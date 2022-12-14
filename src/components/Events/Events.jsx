import React, { useState, useEffect } from 'react';
import useWebSocket from 'react-use-websocket';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import formatDate from '../../utils/formatDate';
import style from "./Events.module.css";

export const Events = () => {
  const [messageHistory, setMessageHistory] = useState([]);

  const { lastMessage } = useWebSocket('wss://test.relabs.ru/event');

  useEffect(() => {
    if (lastMessage !== null) {
      setMessageHistory((prev) => prev.concat(lastMessage));
    }
  }, [lastMessage, setMessageHistory]);
  return (
    <div className={style.Events}>
      <h2>События</h2>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Дата</TableCell>
              <TableCell align="center">Событие</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {messageHistory.map((message, idx) => (
              <TableRow
                key={idx}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {formatDate(JSON.parse(message.data).ctime)}
                </TableCell>
                <TableCell align="center">{JSON.parse(message.data).event}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer >
    </div>
  );
};