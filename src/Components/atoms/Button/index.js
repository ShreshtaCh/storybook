import PropTypes from "prop-types";

const Button = ({
  label,
  borderRadius,
  backgroundColor = "black",
  color = "white",
  size,
  onClick,
}) => {
  let scale = 1;
  if (size === "small") scale = 0.75;
  if (size === "large") scale = 1.5;
  const style = {
    backgroundColor,
    padding: `${scale * 0.5}rem ${scale * 1}rem`,
    border: "none",
    color,
    borderRadius,
  };
  return (
    <button onClick={onClick} style={style}>
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  onClick: PropTypes.func,
  borderRadius: PropTypes.number,
};
export default Button;
