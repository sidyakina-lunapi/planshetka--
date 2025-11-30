import { useLocation } from 'react-router-dom';
import './header.css';

const Header = () => {
  const location = useLocation();
  
  const getTitle = () => {
    switch (location.pathname) {
      case '/schedule':
        return 'Расписание';
      case '/replacements':
        return 'Замены';
      case '/teachers':
        return 'Отсутствующие преподаватели';  
      case '/audiences':
        return 'Аудитории';      
      case '/users':
        return 'Пользователи';
      case '/usershistores':
        return 'История действий';
      default:
        return 'Расписание'; 
    }
};

  return (
    <header className="header">
      <h1 className="header-title">{getTitle()}</h1>
    </header>
  );
};

export default Header;