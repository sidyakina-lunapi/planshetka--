import './input.css';

const Input = ({ 
  value = '', 
  onChange, 
  type = 'text',
  placeholder = "",
  className = "",
  disabled = false
}) => {
  const handleChange = (event) => {
    if (onChange) {
      onChange(event);
    }
  };

  return (
    <div className={`custom-input ${className} ${type === 'date' ? 'custom-input--date' : ''}`}>
      <input
        type={type}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        disabled={disabled}
        className="custom-input__field"
      />
      {type === 'date' && (
        <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.33333 8.7C2.94444 8.7 2.61574 8.555 2.34722 8.265C2.0787 7.975 1.94444 7.62 1.94444 7.2C1.94444 6.78 2.0787 6.425 2.34722 6.135C2.61574 5.845 2.94444 5.7 3.33333 5.7C3.72222 5.7 4.05093 5.845 4.31944 6.135C4.58796 6.425 4.72222 6.78 4.72222 7.2C4.72222 7.62 4.58796 7.975 4.31944 8.265C4.05093 8.555 3.72222 8.7 3.33333 8.7ZM1.11111 12C0.805556 12 0.543982 11.8825 0.326389 11.6475C0.108796 11.4125 0 11.13 0 10.8V2.4C0 2.07 0.108796 1.7875 0.326389 1.5525C0.543982 1.3175 0.805556 1.2 1.11111 1.2H1.66667V0H2.77778V1.2H7.22222V0H8.33333V1.2H8.88889C9.19444 1.2 9.45602 1.3175 9.67361 1.5525C9.8912 1.7875 10 2.07 10 2.4V10.8C10 11.13 9.8912 11.4125 9.67361 11.6475C9.45602 11.8825 9.19444 12 8.88889 12H1.11111ZM1.11111 10.8H8.88889V4.8H1.11111V10.8Z" fill="#C9C9C9"/>
        </svg>

      )}
    </div>
  );
};

export default Input;