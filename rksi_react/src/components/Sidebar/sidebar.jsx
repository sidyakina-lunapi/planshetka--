import { NavLink } from "react-router-dom";
import './sidebar.css'; 

export default function Sidebar() {
  return (
    <nav className="navigation">
        <img src="/images/icon.svg" alt="icon" className="nav-icon" />
        <NavLink to="/schedule" className="nav-link">Расписание</NavLink>
        <NavLink to="/replacements" className="nav-link">Замены</NavLink>
        <NavLink to="/teachers" className="nav-link">Преподаватели</NavLink>
        <NavLink to="/audiences" className="nav-link">Аудитории</NavLink> 
        <NavLink to="/users" className="nav-link">Пользователи</NavLink> 
        <NavLink to="/usershistores" className="nav-link">История действий</NavLink>
        <button className="nav-button">Опубликовать</button>
    </nav>
  );
}