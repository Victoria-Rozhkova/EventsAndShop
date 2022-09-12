
import { Pagination, Stack } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { currentPageSelector, limitSelector, totalPageSelector } from "../../store/selectors/users-selectors";
import { getUsers } from "../../store/thunks/users-thunks";

export const Paginator = () => {
  const dispatch = useDispatch();

  const page = useSelector(state => currentPageSelector(state));
  const limit = useSelector(state => limitSelector(state));
  const totalPage = useSelector(state => totalPageSelector(state));

  const changePage = (e, currentPage) => {
    dispatch(getUsers((currentPage - 1) * limit));
  };
  return (
    <div >
      <Stack spacing={2}>
        <Pagination count={totalPage/limit} shape="rounded" color="primary" page={page} onChange={changePage} />
      </Stack>
    </div>
  );
};
