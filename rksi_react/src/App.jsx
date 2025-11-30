import './styles/global.css';
import './fonts/fonts.css';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Audiences from "./pages/Audiences";
import Sidebar from "./components/Sidebar/sidebar";
import Header from "./components/Header/header";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Schedule from "./pages/Sheldule";  
import UsersHistores from "./pages/UserHistores";
import Users from "./pages/Users";
import Replacements from "./pages/Replacements";
import Teachers from "./pages/Teachers";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="main-area">
          <Header />
          <div>
            <Routes>
              <Route path="/schedule" element={<Schedule />} />
              <Route path="/replacements" element={<Replacements />} />
              <Route path="/teachers" element={<Teachers />} />
              <Route path="/audiences" element={<Audiences />} />
              <Route path="/users" element={<Users />} />
              <Route path="/usershistores" element={<UsersHistores />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/" element={<Schedule />} /> 
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;

