import { useState, useEffect, useRef } from 'react';
import Dropdown from '../Select/dropdown';
import './dropdownElements.css';

const DateFilter = ({ value, onChange, availableDates = [] }) => {
  const [selectedDate, setSelectedDate] = useState(value || '');
  const [recentDates, setRecentDates] = useState([]);
  const [dropdownValue, setDropdownValue] = useState('');
  const dateInputRef = useRef(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setSelectedDate(value || '');
  }, [value]);

  useEffect(() => {
    const savedDates = localStorage.getItem('recentDates');
    if (savedDates) {
      setRecentDates(JSON.parse(savedDates));
    }
  }, []);

  const saveToRecentDates = (date) => {
    const formattedDate = formatDateToRussian(new Date(date));
    const newRecentDates = [formattedDate, ...recentDates.filter(d => d !== formattedDate)].slice(0, 3);
    setRecentDates(newRecentDates);
    localStorage.setItem('recentDates', JSON.stringify(newRecentDates));
  };

  const handleDateChange = (e) => {
    const date = e.target.value;
    setSelectedDate(date);
    
    if (date) {
      const formattedDate = formatDateToRussian(new Date(date));
      setDropdownValue(formattedDate);
      saveToRecentDates(date);
      // Вызываем onChange из пропсов
      onChange(formattedDate);
    }

    if (dateInputRef.current) {
      dateInputRef.current.style.display = 'none';
    }
  };

  const formatDateToRussian = (date) => {
    return date.toLocaleDateString('ru-RU');
  };

  const openCalendar = () => {
    if (dateInputRef.current) {
      dateInputRef.current.style.display = 'block';
      dateInputRef.current.showPicker();
      dateInputRef.current.focus();
    }
  };

  const handleDropdownChange = (e) => {
    const value = e.target.value;
    setDropdownValue(value);
    
    if (value === 'Выбрать дату') {
      setTimeout(() => {
        openCalendar();
      }, 100);
    } else if (value) {
      const [day, month, year] = value.split('.');
      const isoDate = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
      setSelectedDate(isoDate);
      saveToRecentDates(isoDate);
      onChange(value);
    } else {
      onChange('');
    }
  };

  const dropdownOptions = [
    'Выбрать дату',
    ...recentDates,
    ...(availableDates || [])
  ].filter((date, index, self) => 
    date && self.indexOf(date) === index
  );

  const displayDate = value || '';

  return (
    <div className="filter-with-dropdown" ref={dropdownRef}>
      <div className="filter-dropdown-container">
        <Dropdown
          value={displayDate}
          onChange={handleDropdownChange}
          options={dropdownOptions}
          placeholder="Выберите дату"
        />
        <input
          ref={dateInputRef}
          type="date"
          style={{ 
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 10000,
            display: 'none'
          }}
          onChange={handleDateChange}
          onBlur={() => {
            if (dateInputRef.current) {
              dateInputRef.current.style.display = 'none';
            }
          }}
        />
      </div>
    </div>
  );
};

export default DateFilter;