const CheckboxRound = ({ isChecked = false, onChange }) => {
  const handleClick = () => {
    onChange && onChange(!isChecked);
  };

  return (
    <div onClick={handleClick} style={{ cursor: 'pointer' }}>
      {isChecked ? (
        <svg width="25" height="25" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="8.25" cy="8.25" r="7.5" stroke="#C9C9C9" stroke-width="1.5"/>
          <circle cx="8.25" cy="8.25" r="4" fill="#C9C9C9"/>
        </svg>
      ) : (
        <svg width="25" height="25" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="8.5" cy="8.5" r="7.5" stroke="#C9C9C9" stroke-width="2"/>
        </svg>
      )}
    </div>
  );
};

export default CheckboxRound;