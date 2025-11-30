import { useState } from 'react';
import CheckboxIcon from '../Checkboxes/checkboxStar';
import Dropdown from '../Select/dropdown';
import './dropdownElements.css';

const FilterText = ({ 
  text, 
  options = [], 
  placeholderText = "значение",
  value = '',
  onChange,
  customContent
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCheckboxChange = (checked) => {
    if (!checked) {
      onChange && onChange({ target: { value: '' } });
    }
  };

  const handleDropdownChange = (e) => {
    onChange && onChange(e);
  };

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="filter-with-dropdown">
      <div className="filter-item" onClick={toggleOpen} style={{ cursor: 'pointer' }}>
        <CheckboxIcon 
          isChecked={!!value}
          onChange={handleCheckboxChange}
        />
        <span className="filter-text">{text}</span>
      </div>
      
      {isOpen && (
        <div className="filter-dropdown-container">
          {customContent ? (
            <div onClick={(e) => e.stopPropagation()}>
              {customContent}
            </div>
          ) : (
            <Dropdown
              value={value}
              onChange={handleDropdownChange}
              options={options}
              placeholder={`Выберите ${placeholderText}`}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default FilterText;