import React from "react";
import PropTypes from "prop-types";
import LogoImg from "../../assets/images/logo.png";

const Logo = ({ width, maxWidth }) => {
  return (
    <img
      src={LogoImg}
      style={{ width: width, maxWidth: maxWidth }}
      alt="Website Logo"
      fluid
    />
  );
};

Logo.propTypes = {
  title: PropTypes.string,
  width: PropTypes.string,
  maxWidth: PropTypes.string,
};

Logo.defaultProps = {
  title: "",
  width: "100px",
  maxWidth: "100%",
};

export default Logo;
