import './header.css';

const DateHeader = ({ date }) => {
  const formatDate = (dateString) => {
    const [day, month, year] = dateString.split('.');
    
    return `${parseInt(day)}.${[month]}.${year}`;
  };

  return (
    <div className="date-header">
      <h2 className="date-title"><div className='data-title-style'>{formatDate(date)}</div></h2>
    </div>
  );
};

export default DateHeader;