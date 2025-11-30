import { useState } from 'react';
import ButtonNav from "../components/Buttons/buttonNav";
import { SearchIcon } from "../components/Buttons/buttonNav";
import Table from "../components/Table/table";
import AddButton from "../components/Buttons/AddButton";
import { useTable } from '../functions/tableFunctions';
import { teachersInitialData, teachersColumns, teachersAvailableOptions } from '../data/teachersData';
import '../styles/pages.css';

export default function Teachers() { 
  const {
    data: teachers,
    editingId,
    addItem,
    deleteItem,
    editItem,
    saveItem,
    changeItem
  } = useTable(teachersInitialData);

  const addNewTeacher = () => {
    addItem({
      name: '',
      startDate: '',
      endDate: '',
      reason: ''
    });
  };

  return( 
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
            text="Добавить преподавателя"
            onClick={addNewTeacher}
            variant="primary"
          />
        </div>
        <Table 
          data={teachers}
          columns={teachersColumns}
          editingId={editingId}
          onEdit={editItem}
          onSave={saveItem}
          onDelete={deleteItem}
          onChange={changeItem}
          availableOptions={teachersAvailableOptions}
        />
      </div>
    </>
  );
}