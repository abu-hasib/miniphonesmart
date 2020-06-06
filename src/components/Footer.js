import React from "react";
import PropTypes from "prop-types";

const Footer = ({ footerMessage }) => {
  return <footer>{footerMessage}</footer>;
};

Footer.propTypes = {
  footerMessage: PropTypes.string,
};

export default Footer;
