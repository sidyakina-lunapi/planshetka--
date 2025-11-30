import { useState } from 'react';
import './checkbox.css';

const Checkmark = ({ 
  status = 0, 
  onChange 
}) => {
  const [currentStatus, setCurrentStatus] = useState(status);

  const handleClick = () => {
    const newStatus = (currentStatus + 1) % 3; // Циклическое переключение 0→1→2→0
    setCurrentStatus(newStatus);
    onChange && onChange(newStatus);
  };

  const getSvg = () => {
    switch(currentStatus) {
      case 0: // Красный
        return (
          <svg width="60" height="60" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_653_12479)">
              <circle cx="15" cy="15" r="10" fill="#FFA9A9"/>
              <circle cx="15" cy="15" r="6.5" stroke="#BD4F4B" strokeWidth="3"/>
            </g>
            <defs>
              <filter id="filter0_d_653_12479" x="0" y="0" width="30" height="30" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset/>
                <feGaussianBlur stdDeviation="2.5"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.663462 0 0 0 0 0.663462 0 0 0 1 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_653_12479"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_653_12479" result="shape"/>
              </filter>
            </defs>
          </svg>
        );
      case 1: 
        return (
          <svg width="60" height="60" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_653_12531)">
              <circle cx="15" cy="15" r="10" fill="#FFE6A1"/>
              <circle cx="15" cy="15" r="6.5" stroke="#EBC868" strokeWidth="3"/>
              <circle cx="15" cy="15" r="2" fill="#EBC868"/>
            </g>
            <defs>
              <filter id="filter0_d_653_12531" x="0" y="0" width="30" height="30" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset/>
                <feGaussianBlur stdDeviation="2.5"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0.923077 0 0 0 0 0.785799 0 0 0 0 0.408284 0 0 0 1 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_653_12531"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_653_12531" result="shape"/>
              </filter>
            </defs>
          </svg>
        );
      case 2:
        return (
          <svg width="60" height="60" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_653_9442)">
              <circle cx="15" cy="15" r="10" fill="#B3F0B5"/>
              <circle cx="15" cy="15" r="7" fill="#8CC78E"/>
            </g>
            <defs>
              <filter id="filter0_d_653_9442" x="0" y="0" width="30" height="30" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset/>
                <feGaussianBlur stdDeviation="2.5"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0.550435 0 0 0 0 0.778846 0 0 0 0 0.558048 0 0 0 1 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_653_9442"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_653_9442" result="shape"/>
              </filter>
            </defs>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div 
      className={`checkmark-container state-${currentStatus}`}
      onClick={handleClick}
    >
      {getSvg()}
    </div>
  );
};

export default Checkmark;