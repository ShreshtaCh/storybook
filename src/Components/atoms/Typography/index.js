import React from "react";
import PropTypes from "prop-types";

const getMappedVariant = (variant) => {
  switch (variant) {
    case "header":
      return "h2";
    case "title":
      return "subtitle1";
    case "subtitle":
      return "subtitle2";
    default:
      return "body1";
  }
};

const Typography = (props) => {
  const { variant } = props;
  return (
    <div variant={getMappedVariant(props.variant)} className={variant}>
      {props.children}
    </div>
  );
};

Typography.propTypes = {
  children: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(["header", "title", "subtitle", "body"]),
};

Typography.defaultProps = {
  variant: "body",
};

export default Typography;
