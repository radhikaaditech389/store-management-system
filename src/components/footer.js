import React, { useState } from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="bottom-page">
      <div className="body-text">Copyright © 2024 Remos. Design with</div>
      <i className="icon-heart"></i>
      <div className="body-text">
        by{" "}
        <Link to="https://themeforest.net/user/themesflat/portfolio">
          Themesflat
        </Link>{" "}
        All rights reserved.
      </div>
    </div>
  );
};
export default Footer;
