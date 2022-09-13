import React from "react";
import style from "./Events.module.css";
import { EventsWebSocket } from "./EventsWebSocket";

export const Events = () => {
  return (
    <div className={style.Events}>
      <h2>События</h2>
      <EventsWebSocket />
    </div>
  );
};