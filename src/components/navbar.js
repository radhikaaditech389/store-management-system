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
          {/* MAIN HOME */}
          <div className="center-item">
            <div className="center-heading">Main Home</div>
            <ul className="menu-list">
              {/* Dashboard - visible to ALL */}
              <li className="menu-item">
                <Link to="/dashboard" className="menu-item-button">
                  <div className="icon">
                    <i className="icon-grid"></i>
                  </div>
                  <div className="text">Dashboard</div>
                </Link>
              </li>
            </ul>
          </div>

          {/* ALL PAGE */}
          <div className="center-item">
            <div className="center-heading">All Page</div>
            <ul className="menu-list">
              {/* ───── SUPERADMIN ONLY ───── */}
              {role === "superadmin" && (
                <li className="menu-item">
                  <Link to="/store" className="menu-item-button">
                    <div className="icon">
                      <i className="icon-briefcase"></i>
                    </div>
                    <div className="text">Stores</div>
                  </Link>
                </li>
              )}

              {/* ───── ADMIN ONLY ───── */}
              {role === "admin" && (
                <>
                  <li className="menu-item">
                    <Link to="/branch" className="menu-item-button">
                      <div className="icon">
                        <i className="icon-clipboard"></i>
                      </div>
                      <div className="text">Branches</div>
                    </Link>
                  </li>

                  <li className="menu-item">
                    <Link to="/staff" className="menu-item-button">
                      <div className="icon">
                        <i className="icon-edit"></i>
                      </div>
                      <div className="text">Staff</div>
                    </Link>
                  </li>
                </>
              )}

              {/* ───── MANAGER ONLY ───── */}
              {role === "manager" && (
                <>
                  <li className="menu-item">
                    <Link to="/category" className="menu-item-button">
                      <div className="icon">
                        <i className="icon-layers"></i>
                      </div>
                      <div className="text">Categories</div>
                    </Link>
                  </li>

                  <li className="menu-item">
                    <Link to="/brand" className="menu-item-button">
                      <div className="icon">
                        <i className="icon-book"></i>
                      </div>
                      <div className="text">Brands</div>
                    </Link>
                  </li>

                  <li className="menu-item">
                    <Link to="/supplier-bill" className="menu-item-button">
                      <div className="icon">
                        <i className="icon-bookmark"></i>
                      </div>
                      <div className="text">Supplier</div>
                    </Link>
                  </li>

                  <li className="menu-item">
                    <Link to="/gst-rates" className="menu-item-button">
                      <div className="icon">
                        <i className="icon-folder"></i>
                      </div>
                      <div className="text">GST Rates</div>
                    </Link>
                  </li>

                  <li className="menu-item">
                    <Link to="/product" className="menu-item-button">
                      <div className="icon">
                        <i className="icon-cast"></i>
                      </div>
                      <div className="text">Products</div>
                    </Link>
                  </li>

                  <li className="menu-item">
                    <Link to="/purchase-bill" className="menu-item-button">
                      <div className="icon">
                        <i className="icon-bookmark"></i>
                      </div>
                      <div className="text">Purchase Bill</div>
                    </Link>
                  </li>
                    <li className="menu-item">
                    <Link to="/sale-bill" className="menu-item-button">
                      <div className="icon">
                        <i className="icon-box"></i>
                      </div>
                      <div className="text">Sale Bill</div>
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
