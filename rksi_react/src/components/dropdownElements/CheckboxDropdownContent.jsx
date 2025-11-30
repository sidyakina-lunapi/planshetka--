import { useState, useRef, useEffect } from 'react';
import CheckboxRound from '../Checkboxes/checkboxRound';
import './dropdownElements.css';

const CheckboxDropdownContent = ({ 
  options = [], 
  placeholderText = "значение",
  onSelectionChange 
}) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const dropdownRef = useRef(null);

  const handleOptionToggle = (option) => {
    const newSelectedOptions = selectedOptions.includes(option)
      ? selectedOptions.filter(item => item !== option)
      : [...selectedOptions, option];
    
    setSelectedOptions(newSelectedOptions);
    onSelectionChange && onSelectionChange(newSelectedOptions);
  };

  const handleSelectAll = () => {
    const allSelected = selectedOptions.length === options.length;
    const newSelectedOptions = allSelected ? [] : [...options];
    setSelectedOptions(newSelectedOptions);
    onSelectionChange && onSelectionChange(newSelectedOptions);
  };

  return (
    <div className="checkbox-dropdown-content" ref={dropdownRef}>
      <div 
        className="checkbox-dropdown-item select-all"
        onClick={handleSelectAll}
      >
        <CheckboxRound 
          isChecked={selectedOptions.length === options.length && options.length > 0}
          onChange={handleSelectAll}
        />
        <span>Выбрать все</span>
      </div>

      <div className="checkbox-divider"></div>

      {options.map((option, index) => (
        <div
          key={index}
          className="checkbox-dropdown-item"
          onClick={() => handleOptionToggle(option)}
        >
          <CheckboxRound 
            isChecked={selectedOptions.includes(option)}
            onChange={() => handleOptionToggle(option)}
          />
          <span>{option}</span>
        </div>
      ))}
    </div>
  );
};

export default CheckboxDropdownContent;