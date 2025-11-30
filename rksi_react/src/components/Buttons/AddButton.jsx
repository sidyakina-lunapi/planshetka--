import './button.css';

const AddButton = ({ 
  text, 
  onClick, 
  variant = 'primary',
  className = '',
  icon: Icon,
  disabled = false
}) => {
  return (
    <button 
      className={`add-button ${variant} ${className}`} 
      onClick={onClick}
      disabled={disabled}
    >
      {Icon && <Icon className="btn-icon" />}
      {text}
    </button>
  );
};

export default AddButton;