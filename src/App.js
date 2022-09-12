import "./App.css";
import { NavLink, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { Login } from "./components/Login/Login";
import { Shop } from "./components/Shop/Shop";

function App() {
  return (
    <div className="App">
      <header className="App__header">
        <NavLink to="/">Главная страница</NavLink>
        <NavLink to="/login">Авторизация</NavLink>
        <NavLink to="/shop">Магазин</NavLink>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </div>
  );
}

export default App;
