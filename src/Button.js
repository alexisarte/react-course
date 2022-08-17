import PropTypes from 'prop-types';


export function Button({ text, name = '' }) {
  console.log(text, name);
  if (!text) {
    console.error('El texto es requerido');
  }
  return <button>
    {text} - {name}
  </button>;
}

Button.propTypes = {
  text: PropTypes.string.isRequired
};

Button.defaultProps = {
  name: 'Some User'
};
