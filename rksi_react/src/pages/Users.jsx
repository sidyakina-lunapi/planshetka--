import ButtonNav from "../components/Buttons/buttonNav";
import { SearchIcon } from "../components/Buttons/buttonNav";
import AddButton from "../components/Buttons/AddButton";
import Table from "../components/Table/table";
import { useTable } from '../functions/tableFunctions';
import { usersInitialData, usersColumns, usersAvailableOptions } from '../data/usersData';
import '../styles/pages.css';

export default function Users() {
  const {
    data: users,
    editingId,
    addItem,
    deleteItem,
    editItem,
    saveItem,
    changeItem
  } = useTable(usersInitialData);

  const addNewUser = () => {
    addItem({
      name: '',
      position: 'Студент',
      email: 'new@rksi.ru'
    });
  };

  return (
    <>
      <nav className="pages_nav">
        <ButtonNav
          text="Поиск" 
          className="buttonNav pages_nav_item pages_nav_item_search"
          icon={SearchIcon}
        />
      </nav>

      <div className="pages_content">
        <div className='button-box'>
          <AddButton
            text="Добавить пользователя"
            onClick={addNewUser}
            variant="primary"
          />
        </div>
        <Table
          data={users}
          columns={usersColumns}
          editingId={editingId}
          availableOptions={usersAvailableOptions}
          onEdit={editItem}
          onSave={saveItem}
          onDelete={deleteItem}
          onChange={changeItem}
        />
      </div>
    </>
  );
}