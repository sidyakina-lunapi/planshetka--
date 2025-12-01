import { useState, useEffect } from 'react';
import Modal from './Modal';
import Dropdown from '../Select/dropdown';
import Input from '../Input/input'; 
import Checkmark from '../Checkboxes/Checkmark';
import { replacementInitialData, replacementOptions } from "../../data/replacementData";
import ReplacementCard from '../Cards/ReplacementCard';
import CardPair from '../Cards/CardPair';
import EmptinessCard from '../Cards/EmptinessCard';
import './Modal.css';

const ScheduleReplacementModal = ({ 
  isOpen, 
  onClose, 
  scheduleData,
  onPairCreated 
}) => {
  const [secondCardData, setSecondCardData] = useState(replacementInitialData);

  useEffect(() => {
    if (scheduleData) {
      setSecondCardData(prev => ({
        ...prev,
        building: scheduleData.building || '',
        roomNumber: scheduleData.roomNumber || '',
        discipline: scheduleData.discipline || '',
        lastName: scheduleData.lastName || '',
        group: scheduleData.group || '',
        date: scheduleData.date || '',
        pair: scheduleData.pair || '',
        status: 0
      }));
    }
  }, [scheduleData]);

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
      firstCardData: scheduleData, 
      secondCardData: { ...secondCardData } 
    };
    
    if (onPairCreated) {
      onPairCreated(newPair);
    }
    
    onClose();
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
    <Modal 
      isOpen={isOpen}
      onClose={onClose}
      title="Создание замены из расписания"
      className="schedule-replacement-modal"
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
                {scheduleData ? (
                <div className="schedule-data-preview">
                  <p> <img src="/images/building.svg"  className='sheldule-card-icon'/><strong>Корпус</strong> {scheduleData.building}</p>
                  <p><img src="/images/discipline.svg"  className='sheldule-card-icon'/>{scheduleData.roomNumber}</p>
                  <p><img src="/images/audience.svg"  className='sheldule-card-icon'/>{scheduleData.discipline}</p>
                  <p><img src="/images/surname.svg"  className='sheldule-card-icon'/>{scheduleData.lastName}</p>
                  <p><img src="/images/group.svg"  className='sheldule-card-icon'/>{scheduleData.group}</p>
                  <p><img src="/images/calendar.svg"  className='sheldule-card-icon'/>{scheduleData.date}</p>
                  <p><img src="/images/clock.svg"  className='sheldule-card-icon'/>{scheduleData.pair}<strong> пара</strong></p>
                {scheduleData.reason && <p><img src="/images/reason.svg"  className='sheldule-card-icon'/>{scheduleData.reason}</p>}
                </div>
            ) : (
                <div className="empty-state">Выберите карточку в расписании</div>
                )}
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
          Сохранить замену
        </button>
      </div>
    </Modal>
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

export default ScheduleReplacementModal;