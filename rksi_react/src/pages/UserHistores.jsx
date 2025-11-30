import ButtonNav, { DawIcon, StarIcon, RoundIcon, FilterIcon, PensilIcon, SearchIcon } from "../components/Buttons/buttonNav"; 
import '../styles/pages.css';

export default function UserHistores() {
  return (
    <>
    <nav className="pages_nav">
        <ButtonNav
          checkbox={DawIcon}
          text="Фильтры" 
          className="buttonNav pages_nav_item"
          icon={FilterIcon}
        />
        <ButtonNav
          checkbox={DawIcon}
          text="Тип" 
          className="buttonNav pages_nav_item"
          icon={StarIcon}
        />
        <ButtonNav
          text="Сбросить" 
          className="buttonNav pages_nav_item"
        />
        <ButtonNav
          text="Поиск" 
          className="buttonNav pages_nav_item pages_nav_item_search"
          icon={SearchIcon}
        />
      </nav>
    </>
  );
}