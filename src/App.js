import React from "react";
import "./App.css";
import { NavLink, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { Login } from "./components/Login/Login";
import { Shop } from "./components/Shop/Shop";

function App() {
  return (
    <div className="App">
      <header className="App__header">
        <div className="App__wrap">
          <NavLink to="/">Главная страница</NavLink>
          <NavLink to="/login">Авторизация</NavLink>
          <NavLink to="/shop">Магазин</NavLink>
        </div>
      </header>
      <Routes>
        <Route
          path="/"
          element={
            <div className="App__wrap">
              <Home />
            </div>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route
          path="/shop"
          element={
            <div className="App__wrap">
              <Shop />
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
