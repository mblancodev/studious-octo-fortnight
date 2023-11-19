import './Button.scss';
import PropTypes from 'prop-types';

const Button = ({children, variant,evento,
 }) => {


  const btnClasses = `btn ${variant}`;

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      evento(); // Llama a la función asociada al botón cuando se presiona la tecla "Enter"
    }
  };

  return (
    <button className={btnClasses} onKeyPress={handleKeyPress} 
      tabIndex={0}  onClick={evento} >
      {children}  
    </button>
  );
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    variant: PropTypes.string.isRequired,
    evento: PropTypes.func
  };

export default Button;
