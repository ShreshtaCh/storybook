import PropTypes from "prop-types";
const Text = ({ label, backgroundColor, color = "black", fontSize = 20 }) => {
  const style = {
    color,
    fontSize,
    backgroundColor,
  };

  return <p style={style}>{label}</p>;
};

Text.propTypes = {
  label: PropTypes.string,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  fontSize: PropTypes.number,
};

export default Text;
