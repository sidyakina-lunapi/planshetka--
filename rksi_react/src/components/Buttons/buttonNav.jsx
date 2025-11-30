import { useState, useRef, useEffect } from 'react';
import './button.css';

const ButtonNav = ({ 
  text, 
  checkbox: CheckboxIcon, 
  icon: IconComponent, 
  className = '', 
  hasCheckbox = false,
  isChecked: externalIsChecked,
  onCheckboxChange,
  dropdownContent,
  onButtonClick
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [internalIsChecked, setInternalIsChecked] = useState(false);
  const dropdownRef = useRef(null);
  
  const isChecked = externalIsChecked !== undefined ? externalIsChecked : internalIsChecked;
  
  const handleCheckboxClick = (e) => {
    e.stopPropagation();
    const newValue = !isChecked;
    if (onCheckboxChange) {
      onCheckboxChange(newValue);
    } else {
      setInternalIsChecked(newValue);
    }
  };

  const handleButtonClick = () => {
    if (onButtonClick) {
      onButtonClick(); 
    }
    if (dropdownContent) {
      setIsDropdownOpen(!isDropdownOpen);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="button-nav-container" ref={dropdownRef}>
      <button 
        className={`buttonNav ${className} ${isDropdownOpen ? 'buttonNav-active' : ''}`}
        onClick={handleButtonClick}
      >
        {IconComponent && <span className="button-nav-left-icon"><IconComponent /></span>}
        {text}
        {hasCheckbox && (
          <div className="custom-checkbox" onClick={handleCheckboxClick}>
            <div className={`checkbox-circle ${isChecked ? 'checkbox-checked' : ''}`}>
              {isChecked && <div className="checkbox-dot" />}
            </div>
          </div>
        )}
        {CheckboxIcon && !hasCheckbox && <span className="button-nav-right-icon"><CheckboxIcon /></span>}
      </button>
      {dropdownContent && isDropdownOpen && (
        <div className="dropdown-modal">
          <div className="dropdown-content">
            {dropdownContent}
          </div>
        </div>
      )}
    </div>
  );
};

export default ButtonNav;
export const DawIcon = ({ isReversed = false }) => (
  <svg width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.7715 0.247421C10.6985 0.169022 10.6116 0.106794 10.5159 0.0643287C10.4201 0.0218632 10.3175 0 10.2138 0C10.11 0 10.0074 0.0218632 9.91162 0.0643287C9.81588 0.106794 9.72899 0.169022 9.65596 0.247421L6.05779 4.07837C5.98476 4.15677 5.89787 4.219 5.80213 4.26146C5.7064 4.30393 5.60371 4.32579 5.5 4.32579C5.39629 4.32579 5.2936 4.30393 5.19787 4.26146C5.10213 4.219 5.01524 4.15677 4.94221 4.07837L1.34404 0.247421C1.27101 0.169022 1.18412 0.106794 1.08838 0.0643287C0.992645 0.0218632 0.88996 0 0.786248 0C0.682536 0 0.57985 0.0218632 0.484115 0.0643287C0.388379 0.106794 0.301488 0.169022 0.228454 0.247421C0.0821305 0.404141 0 0.616141 0 0.837119C0 1.0581 0.0821305 1.2701 0.228454 1.42682L3.83447 5.26613C4.27639 5.73605 4.87543 5.99999 5.5 5.99999C6.12457 5.99999 6.72361 5.73605 7.16553 5.26613L10.7715 1.42682C10.9179 1.2701 11 1.0581 11 0.837119C11 0.616141 10.9179 0.404141 10.7715 0.247421Z" fill="#C9C9C9"/>
  </svg>
);

export const StarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.96081 1.76092L10.1927 4.24501C10.3607 4.59081 10.8086 4.92249 11.1866 4.986L13.4193 5.36003C14.8472 5.59997 15.1831 6.64441 14.1542 7.67475L12.4184 9.4249C12.1245 9.7213 11.9635 10.2929 12.0545 10.7022L12.5514 12.8687C12.9434 14.5836 12.0405 15.247 10.5356 14.3507L8.44287 13.1016C8.06491 12.8758 7.44198 12.8758 7.05702 13.1016L4.96425 14.3507C3.46642 15.247 2.55652 14.5766 2.94847 12.8687L3.44542 10.7022C3.53641 10.2929 3.37543 9.7213 3.08146 9.4249L1.34565 7.67475C0.323765 6.64441 0.652729 5.59997 2.08057 5.36003L4.31332 4.986C4.68428 4.92249 5.13223 4.59081 5.30021 4.24501L6.53208 1.76092C7.204 0.413025 8.29588 0.413025 8.96081 1.76092Z" fill="#C9C9C9" stroke="#C9C9C9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const RoundIcon = () => (
 <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="8.5" cy="8.5" r="7.5" stroke="#C9C9C9" stroke-width="2"/>
</svg>
);

export const FilterIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.64309 9.37957C4.77676 7.98421 3.44673 6.44937 2.7205 5.5865C2.4957 5.3194 2.42204 5.12392 2.37774 4.7796C2.22609 3.6006 2.15026 3.0111 2.49597 2.63055C2.84167 2.25 3.45303 2.25 4.67574 2.25H13.3243C14.547 2.25 15.1583 2.25 15.504 2.63055C15.8497 3.0111 15.7739 3.6006 15.6223 4.7796C15.578 5.12393 15.5043 5.3194 15.2795 5.5865C14.5522 6.45046 13.2196 7.98803 11.3494 9.38516C11.1802 9.51156 11.0687 9.71755 11.048 9.94605C10.8628 11.994 10.6919 13.1157 10.5856 13.6831C10.4139 14.5993 9.11487 15.1504 8.41951 15.6423C8.00554 15.935 7.50322 15.5865 7.44958 15.1334C7.34732 14.2696 7.1547 12.5148 6.94446 9.94605C6.92556 9.71545 6.81364 9.50706 6.64309 9.37957Z" stroke="#C9C9C9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const PensilIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.5594 2.07159L10.4939 1.13709C11.01 0.620972 11.8468 0.620971 12.3629 1.13709C12.879 1.6532 12.879 2.48999 12.3629 3.0061L11.4284 3.94061M9.5594 2.07159L6.07016 5.56084C5.37329 6.2577 5.02485 6.60614 4.78759 7.03074C4.55033 7.45534 4.31161 8.45794 4.08334 9.41667C5.04207 9.1884 6.04467 8.94968 6.46927 8.71242C6.89387 8.47516 7.2423 8.12672 7.93917 7.42985L11.4284 3.94061M9.5594 2.07159L11.4284 3.94061" stroke="#C9C9C9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12.75 6.75C12.75 9.57843 12.75 10.9926 11.8713 11.8713C10.9926 12.75 9.57843 12.75 6.75 12.75C3.92157 12.75 2.50736 12.75 1.62868 11.8713C0.75 10.9926 0.75 9.57843 0.75 6.75C0.75 3.92157 0.75 2.50736 1.62868 1.62868C2.50736 0.75 3.92157 0.75 6.75 0.75" stroke="#C9C9C9" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export const SearchIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.6667 11.6667L14.6667 14.6667" stroke="#C9C9C9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.3333 7.33337C13.3333 4.01967 10.647 1.33337 7.33325 1.33337C4.01954 1.33337 1.33325 4.01967 1.33325 7.33337C1.33325 10.6471 4.01954 13.3334 7.33325 13.3334C10.647 13.3334 13.3333 10.6471 13.3333 7.33337Z" stroke="#C9C9C9" stroke-width="1.5" stroke-linejoin="round"/>
</svg>

);

export const CalendarIcon = () => (
  <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.33333 8.7C2.94444 8.7 2.61574 8.555 2.34722 8.265C2.0787 7.975 1.94444 7.62 1.94444 7.2C1.94444 6.78 2.0787 6.425 2.34722 6.135C2.61574 5.845 2.94444 5.7 3.33333 5.7C3.72222 5.7 4.05093 5.845 4.31944 6.135C4.58796 6.425 4.72222 6.78 4.72222 7.2C4.72222 7.62 4.58796 7.975 4.31944 8.265C4.05093 8.555 3.72222 8.7 3.33333 8.7ZM1.11111 12C0.805556 12 0.543982 11.8825 0.326389 11.6475C0.108796 11.4125 0 11.13 0 10.8V2.4C0 2.07 0.108796 1.7875 0.326389 1.5525C0.543982 1.3175 0.805556 1.2 1.11111 1.2H1.66667V0H2.77778V1.2H7.22222V0H8.33333V1.2H8.88889C9.19444 1.2 9.45602 1.3175 9.67361 1.5525C9.8912 1.7875 10 2.07 10 2.4V10.8C10 11.13 9.8912 11.4125 9.67361 11.6475C9.45602 11.8825 9.19444 12 8.88889 12H1.11111ZM1.11111 10.8H8.88889V4.8H1.11111V10.8Z" fill="#C9C9C9"/>
  </svg>
);