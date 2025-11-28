import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

const Navbar = () => {
  const user_detail = JSON.parse(localStorage.getItem("user_detail"));
  const role = user_detail?.user?.role;

  return (
    <div className="section-menu-left">
      <div className="box-logo">
        <Link to="/dashboard" id="site-logo-inner">
          <img
            className=""
            id="logo_header"
            alt=""
            src="images/logo/logo.png"
            data-light="images/logo/logo.png"
            data-dark="images/logo/logo-dark.png"
          />
        </Link>
        <div className="button-show-hide">
          <i className="icon-menu-left"></i>
        </div>
      </div>
      <div className="section-menu-left-wrap">
        <div className="center">
          <div className="center-item">
            <div className="center-heading">Main Home</div>
            <ul className="menu-list">
              <li className="menu-item active">
                <Link to="/dashboard" className="menu-item-button">
                  <div className="icon">
                    <i className="icon-grid"></i>
                  </div>
                  <div className="text">Dashboard</div>
                </Link>
              </li>
            </ul>
          </div>
          <div className="center-item">
            <div className="center-heading">All page</div>
            <ul className="menu-list">
              <li className="menu-item has-children">
                <Link to="/category" className="menu-item-button">
                  <div className="icon">
                    <i className="icon-layers"></i>
                  </div>
                  <div className="text">Categories</div>
                </Link>
              </li>             
              <li className="menu-item has-children">
                <Link to="/store" className="menu-item-button">
                  <div className="icon">
                    <i className="icon-user"></i>
                  </div>
                  <div className="text">Stores</div>
                </Link>
              </li>
              <li className="menu-item has-children">
                <Link to="/branch" className="menu-item-button">
                  <div className="icon">
                    <i className="icon-user"></i>
                  </div>
                  <div className="text">Branches</div>
                </Link>
              </li>
              <li className="menu-item has-children">
                <Link to="/product" className="menu-item-button">
                  <div className="icon">
                    <i className="icon-user"></i>
                  </div>
                  <div className="text">Products</div>
                </Link>
              </li>
               <li className="menu-item has-children">
                <Link to="/purchase-bill" className="menu-item-button">
                  <div className="icon">
                    <i className="icon-user"></i>
                  </div>
                  <div className="text">Purchase Bill</div>
                </Link>
              </li>
              <li className="menu-item has-children">
                <Link to="/supplier-bill" className="menu-item-button">
                  <div className="icon">
                    <i className="icon-user"></i>
                  </div>
                  <div className="text">Supplier Bill</div>
                </Link>
              </li>
               <li className="menu-item has-children">
                <Link to="/brand" className="menu-item-button">
                  <div className="icon">
                    <i className="icon-user"></i>
                  </div>
                  <div className="text">Brands</div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
