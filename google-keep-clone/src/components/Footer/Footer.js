import React from 'react';
import "./Footer.css"

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer>
      <p>{year} Copyright all rights reserved</p>
    </footer>
  );
};

export default Footer
