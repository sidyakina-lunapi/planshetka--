import './cards.css';
import Checkmark from "../Checkboxes/Checkmark";

const ReplacementCard = ({ 
  building, 
  roomNumber, 
  discipline, 
  lastName, 
  group,
  date,
  pair,
  reason,
  cause,
  transfer,
  status 
}) => {
  return (
    <div className="replacement-card">
        <div className='replacement-card-box'>
             <img src="/images/building.svg" alt="Icon" className='replacement-card-icon'/>
              <div className="replacement-card__item">
                Корпус {building}
               </div>
              <div className="replacement_checkbox">
                <Checkmark status={status}/>
              </div> 
        </div>
        <div className='replacement-card-box'>
            <img src="/images/audience.svg" alt="Icon" className='replacement-card-icon'/>
            <div className="replacement-card__item">{roomNumber}</div>
        </div>
        <div className='replacement-card-box'>
            <img src="/images/discipline.svg" alt="Icon" className='replacement-card-icon'/>
            <div className="replacement-card__item">{discipline}</div>
        </div>
        <div className='replacement-card-box'>
            <img src="/images/surname.svg" alt="Icon" className='replacement-card-icon'/>
            <div className="replacement-card__item">{lastName}</div>
        </div>
        <div className='replacement-card-box'>
            <img src="/images/group.svg" alt="Icon" className='replacement-card-icon'/>
            <div className="replacement-card__item">{group}</div>
        </div>
        <div className='replacement-card-box'>
            <img src="/images/date.svg" alt="Icon" className='replacement-card-icon'/>
            <div className="replacement-card__item">{date}</div>
        </div>
        <div className='replacement-card-box'>
             <img src="/images/clock.svg" alt="Icon" className='replacement-card-icon'/>
              <div className="replacement-card__item">
                Пара {pair}
               </div>
        </div>
      </div>
  );
};

ReplacementCard.defaultProps = {
  building: 1,
  roomNumber: '000',
  discipline: 'Дисциплина',
  lastName: 'Фамилия',
  group: 'Группа',
  date: '01.01.2025',
  reason: 'Причина',
  status: 0, 
  pair: 1
};

export default ReplacementCard;