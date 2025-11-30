import { useState } from 'react';
import { useTable } from '../functions/tableFunctions';
import AddButton from '../components/Buttons/AddButton';
import ButtonNav, { DawIcon, FilterIcon, SearchIcon } from "../components/Buttons/buttonNav"; 
import Table from "../components/Table/table";
import { audiencesInitialData, audiencesColumns, audiencesAvailableOptions } from '../data/audiencesData';
import '../styles/pages.css';

export default function Audiences() { 
  const {
    data: audiences,
    editingId,
    addItem,
    deleteItem,
    editItem,
    saveItem,
    changeItem
  } = useTable(audiencesInitialData);

  const handleAddAudience = () => {
    addItem({
      building: '',
      audience: '',
      unavailablePairs: '',
      startDate: '',
      endDate: '',
      reason: ''
    });
  };

  return (
    <>
      <nav className="pages_nav">
        <ButtonNav
          text="Фильтры" 
          checkbox={DawIcon}
          className="buttonNav pages_nav_item"
          icon={FilterIcon}
        />
        <ButtonNav
          text="Аудитория" 
          checkbox={DawIcon}
          className="buttonNav pages_nav_item"
          icon={FilterIcon}
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

      <div className="pages_content">
        <div className='button-box'>
          <AddButton
            text="Добавить аудиторию"
            onClick={handleAddAudience}
            variant="primary"
          />
        </div>
        <Table 
          data={audiences}
          columns={audiencesColumns}
          editingId={editingId}
          onEdit={editItem}
          onSave={saveItem}
          onDelete={deleteItem}
          onChange={changeItem}
          availableOptions={audiencesAvailableOptions}
        />
      </div>
    </>
  );
}