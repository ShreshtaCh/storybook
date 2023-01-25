import PropTypes from "prop-types";
const Input = ({ label, type, placeholder }) => {
  return (
    <input type={type} required="true" placeholder={placeholder}>
      {label}
    </input>
  );
};

Input.propTypes = {
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  type: PropTypes.oneOf([
    "text",
    "password",
    "email",
    "date",
    "time",
    "search",
    "datetime-local",
  ]),
};

export default Input;
