import { useState } from 'react';
import EmptinessCard from '../Cards/EmptinessCard';
import Modal from '../Modal/Modal';
import Dropdown from '../Select/dropdown';
import Input from '../Input/input'; 
import Checkmark from '../Checkboxes/Checkmark';
import { replacementInitialData, replacementOptions } from "../../data/replacementData";
import './button.css';

const ReplacementButton = ({ onPairCreated }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [secondCardData, setSecondCardData] = useState(replacementInitialData);

  const handleSecondCardChange = (field, value) => {
    setSecondCardData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleStatusChange = () => {
    setSecondCardData(prev => ({
      ...prev,
      status: (prev.status + 1) % 3
    }));
  };

  const createNewPair = () => {
    const newPair = {
      id: Date.now(),
      secondCardData: { ...secondCardData } 
    };
    
    if (onPairCreated) {
      onPairCreated(newPair);
    }
    
    setIsModalOpen(false);
    setSecondCardData(replacementInitialData);
  };

  const getButtonColor = () => {
    switch(secondCardData.status) {
      case 0: return '#FFA9A9'; 
      case 1: return '#FFE6A1'; 
      case 2: return '#B3F0B5'; 
      default: return '#FFA9A9';
    }
  };

  return (
    <div>
      <button 
        className="create-pair-btn"
        onClick={() => setIsModalOpen(true)} 
      >
        Создать замену
      </button>
      <Modal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Создание замены"
      >
        <div className='grid_modal'>
          <div className='first-column'>
            <h3>До</h3>
            <img src='/images/tick.svg' alt="Галочка" className="tick-icon" />
            <h3>После</h3>
          </div>
          <div className="modal-create-content">
            <div className="card-info-section">
              <div className="card-preview">
                <EmptinessCard className="EmptinessCard-Replacement"/>
              </div>
            </div>
            <div className="card-form-section">
              <div className="form-column">
                <div className="form-group">
                  <Input 
                    type="date"
                    value={secondCardData.date}
                    onChange={(e) => handleSecondCardChange('date', e.target.value)}
                    placeholder="Выберите дату"
                  />
                </div>

                {Object.entries(replacementOptions).map(([key, options]) => (
                  key !== 'transfer' && (
                    <div key={key} className="form-group">
                      <Dropdown
                        value={secondCardData[key]}
                        onChange={(e) => handleSecondCardChange(key, e.target.value)}
                        options={options}
                        placeholder={`Выберите ${getFieldLabel(key)}`}
                      />
                    </div>
                  )
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className='grid_row'>
          <div className="form-group">
            <label>Причина</label>
            <Input 
              type="text"
              value={secondCardData.cause}
              onChange={(e) => handleSecondCardChange('cause', e.target.value)}
              placeholder="Введите причину"
            />
          </div>
          <div className="form-group">
            <label>Статус</label>
            <div className="status-checkbox" onClick={handleStatusChange} style={{ backgroundColor: getButtonColor() }}>
              <Checkmark status={secondCardData.status}/>
              <span>
                {secondCardData.status === 0 ? "Не согласовано" :
                 secondCardData.status === 1 ? "В ожидании" : 
                 "Согласовано"}
              </span>
            </div>
          </div>
          <div className="form-group">
            <label>Перенос</label>
            <Dropdown
              value={secondCardData.transfer}
              onChange={(e) => handleSecondCardChange('transfer', e.target.value)}
              options={replacementOptions.transfer}
              placeholder="Выберите вариант"
            />
          </div>
        </div>
        <div className="modal-actions">
          <button 
            className="confirm-button"
            onClick={createNewPair}
          >
            Сохранить
          </button>
        </div>
      </Modal>
    </div>
  );
};

function getFieldLabel(field) {
  const labels = {
    building: 'корпус',
    roomNumber: 'аудиторию',
    discipline: 'дисциплину',
    lastName: 'преподавателя',
    group: 'группу',
    pair: 'пару',
    reason: 'причину'
  };
  return labels[field] || field;
}

export default ReplacementButton;