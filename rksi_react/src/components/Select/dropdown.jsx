import { useState, useRef, useEffect } from 'react';
import './dropdown.css';

const Dropdown = ({ 
  value, 
  onChange, 
  options = [], 
  placeholder = "",
  className = ""
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (selectedValue) => {
    onChange({ target: { value: selectedValue } });
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectedLabel = value || placeholder;

  const CalendarIcon = () => (
    <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.33333 8.7C2.94444 8.7 2.61574 8.555 2.34722 8.265C2.0787 7.975 1.94444 7.62 1.94444 7.2C1.94444 6.78 2.0787 6.425 2.34722 6.135C2.61574 5.845 2.94444 5.7 3.33333 5.7C3.72222 5.7 4.05093 5.845 4.31944 6.135C4.58796 6.425 4.72222 6.78 4.72222 7.2C4.72222 7.62 4.58796 7.975 4.31944 8.265C4.05093 8.555 3.72222 8.7 3.33333 8.7ZM1.11111 12C0.805556 12 0.543982 11.8825 0.326389 11.6475C0.108796 11.4125 0 11.13 0 10.8V2.4C0 2.07 0.108796 1.7875 0.326389 1.5525C0.543982 1.3175 0.805556 1.2 1.11111 1.2H1.66667V0H2.77778V1.2H7.22222V0H8.33333V1.2H8.88889C9.19444 1.2 9.45602 1.3175 9.67361 1.5525C9.8912 1.7875 10 2.07 10 2.4V10.8C10 11.13 9.8912 11.4125 9.67361 11.6475C9.45602 11.8825 9.19444 12 8.88889 12H1.11111ZM1.11111 10.8H8.88889V4.8H1.11111V10.8Z" fill="#C9C9C9"/>
    </svg>
  );

  return (
    <div 
      ref={dropdownRef}
      className={`custom-dropdown ${className} ${isOpen ? 'open' : ''}`}
    >
      <div 
        className="custom-dropdown__header"
        onClick={toggleDropdown}
      >
        <span className="custom-dropdown__selected">
          {selectedLabel}
        </span>
        <span className="custom-dropdown__arrow">
          {isOpen ? <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.2668 0.252272C11.1904 0.172336 11.0995 0.108888 10.9994 0.0655901C10.8992 0.0222919 10.7918 0 10.6833 0C10.5749 0 10.4675 0.0222919 10.3673 0.0655901C10.2672 0.108888 10.1763 0.172336 10.0999 0.252272L6.33631 4.15834C6.25992 4.23827 6.16903 4.30172 6.0689 4.34502C5.96876 4.38832 5.86135 4.41061 5.75287 4.41061C5.64439 4.41061 5.53699 4.38832 5.43685 4.34502C5.33671 4.30172 5.24583 4.23827 5.16943 4.15834L1.40584 0.252272C1.32945 0.172336 1.23856 0.108888 1.13842 0.0655901C1.03828 0.0222919 0.930878 0 0.822397 0C0.713917 0 0.60651 0.0222919 0.506373 0.0655901C0.406235 0.108888 0.31535 0.172336 0.238958 0.252272C0.0859066 0.412065 0 0.628222 0 0.853533C0 1.07884 0.0859066 1.295 0.238958 1.45479L4.01077 5.36939C4.473 5.84852 5.09958 6.11765 5.75287 6.11765C6.40616 6.11765 7.03274 5.84852 7.49497 5.36939L11.2668 1.45479C11.4198 1.295 11.5057 1.07884 11.5057 0.853533C11.5057 0.628222 11.4198 0.412065 11.2668 0.252272Z" fill="#C9C9C9"/>
</svg>
 : <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.2668 0.252272C11.1904 0.172336 11.0995 0.108888 10.9994 0.0655901C10.8992 0.0222919 10.7918 0 10.6833 0C10.5749 0 10.4675 0.0222919 10.3673 0.0655901C10.2672 0.108888 10.1763 0.172336 10.0999 0.252272L6.33631 4.15834C6.25992 4.23827 6.16903 4.30172 6.0689 4.34502C5.96876 4.38832 5.86135 4.41061 5.75287 4.41061C5.64439 4.41061 5.53699 4.38832 5.43685 4.34502C5.33671 4.30172 5.24583 4.23827 5.16943 4.15834L1.40584 0.252272C1.32945 0.172336 1.23856 0.108888 1.13842 0.0655901C1.03828 0.0222919 0.930878 0 0.822397 0C0.713917 0 0.60651 0.0222919 0.506373 0.0655901C0.406235 0.108888 0.31535 0.172336 0.238958 0.252272C0.0859066 0.412065 0 0.628222 0 0.853533C0 1.07884 0.0859066 1.295 0.238958 1.45479L4.01077 5.36939C4.473 5.84852 5.09958 6.11765 5.75287 6.11765C6.40616 6.11765 7.03274 5.84852 7.49497 5.36939L11.2668 1.45479C11.4198 1.295 11.5057 1.07884 11.5057 0.853533C11.5057 0.628222 11.4198 0.412065 11.2668 0.252272Z" fill="#C9C9C9"/>
</svg>

}
        </span>
      </div>
      
      {isOpen && (
        <div className="custom-dropdown__list">
          {options.map((option, index) => (
            <div
              key={index}
              className={`custom-dropdown__item ${
                value === option ? 'selected' : ''
              }`}
              onClick={() => handleSelect(option)}
            >
              {option === 'Выбрать дату' ? (
                <span className="calendar-option calendar-option--right">
                  Выбрать дату
                  <CalendarIcon />
                </span>
              ) : (
                option
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;