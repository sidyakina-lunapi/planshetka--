import './cards.css';

const ShelduleCard = ({ 
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
  status,
  visibleFields = {
    Место: true,
    Аудитория: true,
    Дисциплина: true,
    Группа: true,
    Преподаватель: true,
    Мероприятие: true
  }
}) => {

  const hasBuilding = building && building !== '000' && visibleFields['Место'];
  const hasGroup = group && group !== 'Группа' && visibleFields['Группа'];
  const hasRoom = roomNumber && roomNumber !== '000' && visibleFields['Аудитория'];
  const hasLastName = lastName && lastName !== 'Фамилия' && visibleFields['Преподаватель'];
  const hasDiscipline = discipline && discipline !== 'Дисциплина' && visibleFields['Дисциплина'];
  const hasEvent = reason && visibleFields['Мероприятие'];

  const showDiscipline = !reason && hasDiscipline;
  const showEvent = reason && hasEvent;

  const hasAnyVisibleData = hasBuilding || hasGroup || hasRoom || hasLastName || showDiscipline || showEvent;

  if (!hasAnyVisibleData) {
    return (
      <div className="sheldule-card sheldule-card-empty">
        <div className="sheldule-card__item">Нет данных для отображения</div>
      </div>
    );
  }

  const hasAllData = building && building !== '000' && 
                    group && group !== 'Группа' && 
                    roomNumber && roomNumber !== '000' && 
                    lastName && lastName !== 'Фамилия';
  
  const cardClass = `sheldule-card ${!hasAllData ? 'sheldule-card-incomplete' : ''}`;

  return (
    <div className={cardClass}>
      {hasBuilding && (
        <div className='sheldule-card-box'>
          <img src="/images/building.svg" alt="Корпус" className='sheldule-card-icon'/>
          <div className="sheldule-card__item">
            Корпус {building}
          </div>
        </div>
      )}
      
      {hasGroup && (
        <div className='sheldule-card-box sheldule-card-box-reverse'>
          <div className="sheldule-card__item">{group}</div>
          <img src="/images/group.svg" alt="Группа" className='sheldule-card-icon'/>
        </div>
      )}
      
      {hasRoom && (
        <div className='sheldule-card-box'>
          <img src="/images/audience.svg" alt="Аудитория" className='sheldule-card-icon'/>
          <div className="sheldule-card__item">{roomNumber}</div>
        </div>
      )}
      
      {hasLastName && (
        <div className='sheldule-card-box sheldule-card-box-reverse'>
          <div className="sheldule-card__item sheldule-card-name">{lastName}</div>
          <img src="/images/surname.svg" alt="Преподаватель" className='sheldule-card-icon'/>
        </div>
      )}
      
      {showEvent ? (
        <div className='sheldule-card-box'>
          <img src="/images/reason.svg" alt="Мероприятие" className='sheldule-card-icon'/>
          <div className="sheldule-card__item sheldule-card-discipline">{reason}</div>
        </div>
      ) : showDiscipline ? (
        <div className='sheldule-card-box'>
          <img src="/images/discipline.svg" alt="Дисциплина" className='sheldule-card-icon'/>
          <div className="sheldule-card__item sheldule-card-discipline">{discipline}</div>
        </div>
      ) : null}
    </div>
  );
};

export default ShelduleCard;