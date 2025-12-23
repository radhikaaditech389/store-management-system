import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

const Header = () => {
  const user_data = JSON.parse(localStorage.getItem("user_detail"));
  const [showMenu, setShowMenu] = useState(false);
  const history = useHistory();
  const handleChange = () => {};

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleLogout = () => {
    document.cookie.split(";").forEach((c) => {
      document.cookie = c
        .replace(/^ +/, "")
        .replace(/=.*/, "=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/");
    });

    localStorage.clear();
    sessionStorage.clear();

    history.push("/");
  };
  return (
    <div className="header-dashboard">
      <div className="wrap">
        <div className="header-left">
          <Link to="/">
            <img
              className=""
              id="logo_header_mobile"
              alt=""
              src="images/logo/logo.png"
              data-light="images/logo/logo.png"
              data-dark="images/logo/logo-dark.png"
              data-width="154px"
              data-height="52px"
              data-retina="images/logo/logo@2x.png"
            />
          </Link>
          <div className="button-show-hide">
            <i className="icon-menu-left"></i>
          </div>
          <form className="form-search flex-grow">
            <fieldset className="name">
              <input
                type="text"
                placeholder="Search here..."
                className="show-search"
                name="name"
                tabIndex="2"
                value=""
                aria-required="true"
                required=""
                onChange={handleChange}
              />
            </fieldset>
            <div className="button-submit">
              <button className="" type="submit">
                <i className="icon-search"></i>
              </button>
            </div>
            <div className="box-content-search" id="box-content-search">
              <ul className="mb-24">
                <li className="mb-14">
                  <div className="body-title">Top selling product</div>
                </li>
                <li className="mb-14">
                  <div className="divider"></div>
                </li>
                <li>
                  <ul>
                    <li className="product-item gap14 mb-10">
                      <div className="image no-bg">
                        <img src="images/products/17.png" alt="" />
                      </div>
                      <div className="flex items-center justify-between gap20 flex-grow">
                        <div className="name">
                          <Link to="product-list.html" className="body-text">
                            Dog Food Rachael Ray Nutrish®
                          </Link>
                        </div>
                      </div>
                    </li>
                    <li className="mb-10">
                      <div className="divider"></div>
                    </li>
                    <li className="product-item gap14 mb-10">
                      <div className="image no-bg">
                        <img src="images/products/18.png" alt="" />
                      </div>
                      <div className="flex items-center justify-between gap20 flex-grow">
                        <div className="name">
                          <Link to="product-list.html" className="body-text">
                            Natural Dog Food Healthy Dog Food
                          </Link>
                        </div>
                      </div>
                    </li>
                    <li className="mb-10">
                      <div className="divider"></div>
                    </li>
                    <li className="product-item gap14">
                      <div className="image no-bg">
                        <img src="images/products/19.png" alt="" />
                      </div>
                      <div className="flex items-center justify-between gap20 flex-grow">
                        <div className="name">
                          <Link to="product-list.html" className="body-text">
                            Freshpet Healthy Dog Food and Cat
                          </Link>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
              </ul>
              <ul className="">
                <li className="mb-14">
                  <div className="body-title">Order product</div>
                </li>
                <li className="mb-14">
                  <div className="divider"></div>
                </li>
                <li>
                  <ul>
                    <li className="product-item gap14 mb-10">
                      <div className="image no-bg">
                        <img src="images/products/20.png" alt="" />
                      </div>
                      <div className="flex items-center justify-between gap20 flex-grow">
                        <div className="name">
                          <Link to="product-list.html" className="body-text">
                            Sojos Crunchy Natural Grain Free...
                          </Link>
                        </div>
                      </div>
                    </li>
                    <li className="mb-10">
                      <div className="divider"></div>
                    </li>
                    <li className="product-item gap14 mb-10">
                      <div className="image no-bg">
                        <img src="images/products/21.png" alt="" />
                      </div>
                      <div className="flex items-center justify-between gap20 flex-grow">
                        <div className="name">
                          <Link to="product-list.html" className="body-text">
                            Kristin Watson
                          </Link>
                        </div>
                      </div>
                    </li>
                    <li className="mb-10">
                      <div className="divider"></div>
                    </li>
                    <li className="product-item gap14 mb-10">
                      <div className="image no-bg">
                        <img src="images/products/22.png" alt="" />
                      </div>
                      <div className="flex items-center justify-between gap20 flex-grow">
                        <div className="name">
                          <Link to="product-list.html" className="body-text">
                            Mega Pumpkin Bone
                          </Link>
                        </div>
                      </div>
                    </li>
                    <li className="mb-10">
                      <div className="divider"></div>
                    </li>
                    <li className="product-item gap14">
                      <div className="image no-bg">
                        <img src="images/products/23.png" alt="" />
                      </div>
                      <div className="flex items-center justify-between gap20 flex-grow">
                        <div className="name">
                          <Link to="product-list.html" className="body-text">
                            Mega Pumpkin Bone
                          </Link>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </form>
        </div>
        <div className="header-grid">
          {/* <div className="header-item country">
            <select className="image-select no-text">
              <option data-thumbnail="images/country/1.png">ENG</option>
              <option data-thumbnail="images/country/9.png">VIE</option>
            </select>
          </div>
          <div className="header-item button-dark-light">
            <i className="icon-moon"></i>
          </div>
          <div className="popup-wrap noti type-header">
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span className="header-item">
                  <span className="text-tiny">1</span>
                  <i className="icon-bell"></i>
                </span>
              </button>
              <ul
                className="dropdown-menu dropdown-menu-end has-content"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <h6>Message</h6>
                </li>
                <li>
                  <div className="noti-item w-full wg-user active">
                    <div className="image">
                      <img src="images/avatar/user-11.png" alt="" />
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center justify-between">
                        <Link to="#" className="body-title">
                          Cameron Williamson
                        </Link>
                        <div className="time">10:13 PM</div>
                      </div>
                      <div className="text-tiny">Hello?</div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="noti-item w-full wg-user active">
                    <div className="image">
                      <img src="images/avatar/user-12.png" alt="" />
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center justify-between">
                        <Link to="#" className="body-title">
                          Ralph Edwards
                        </Link>
                        <div className="time">10:13 PM</div>
                      </div>
                      <div className="text-tiny">
                        Are you there? interested i this...
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="noti-item w-full wg-user active">
                    <div className="image">
                      <img src="images/avatar/user-13.png" alt="" />
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center justify-between">
                        <Link to="#" className="body-title">
                          Eleanor Pena
                        </Link>
                        <div className="time">10:13 PM</div>
                      </div>
                      <div className="text-tiny">Interested in this loads?</div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="noti-item w-full wg-user active">
                    <div className="image">
                      <img src="images/avatar/user-11.png" alt="" />
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center justify-between">
                        <Link to="#" className="body-title">
                          Jane Cooper
                        </Link>
                        <div className="time">10:13 PM</div>
                      </div>
                      <div className="text-tiny">Okay...Do we have a deal?</div>
                    </div>
                  </div>
                </li>
                <li>
                  <Link to="#" className="tf-button w-full">
                    View all
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="popup-wrap message type-header">
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton2"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span className="header-item">
                  <span className="text-tiny">1</span>
                  <i className="icon-message-square"></i>
                </span>
              </button>
              <ul
                className="dropdown-menu dropdown-menu-end has-content"
                aria-labelledby="dropdownMenuButton2"
              >
                <li>
                  <h6>Notifications</h6>
                </li>
                <li>
                  <div className="message-item item-1">
                    <div className="image">
                      <i className="icon-noti-1"></i>
                    </div>
                    <div>
                      <div className="body-title-2">Discount available</div>
                      <div className="text-tiny">
                        Morbi sapien massa, ultricies at rhoncus at, ullamcorper
                        nec diam
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="message-item item-2">
                    <div className="image">
                      <i className="icon-noti-2"></i>
                    </div>
                    <div>
                      <div className="body-title-2">
                        Account has been verified
                      </div>
                      <div className="text-tiny">
                        Mauris libero ex, iaculis vitae rhoncus et
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="message-item item-3">
                    <div className="image">
                      <i className="icon-noti-3"></i>
                    </div>
                    <div>
                      <div className="body-title-2">
                        Order shipped successfully
                      </div>
                      <div className="text-tiny">
                        Integer aliquam eros nec sollicitudin sollicitudin
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="message-item item-4">
                    <div className="image">
                      <i className="icon-noti-4"></i>
                    </div>
                    <div>
                      <div className="body-title-2">
                        Order pending: <span>ID 305830</span>
                      </div>
                      <div className="text-tiny">
                        Ultricies at rhoncus at ullamcorper
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <Link to="#" className="tf-button w-full">
                    View all
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="header-item button-zoom-maximize">
            <div className="">
              <i className="icon-maximize"></i>
            </div>
          </div>
          <div className="popup-wrap apps type-header">
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton4"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span className="header-item icon">
                  <i className="icon-grid"></i>
                </span>
              </button>
              <ul
                className="dropdown-menu dropdown-menu-end has-content"
                aria-labelledby="dropdownMenuButton4"
              >
                <li>
                  <h6>Related apps</h6>
                </li>
                <li>
                  <ul className="list-apps">
                    <li className="item">
                      <div className="image">
                        <img src="images/apps/item-1.png" alt="" />
                      </div>
                      <Link to="#">
                        <div className="text-tiny">Photoshop</div>
                      </Link>
                    </li>
                    <li className="item">
                      <div className="image">
                        <img src="images/apps/item-2.png" alt="" />
                      </div>
                      <Link to="#">
                        <div className="text-tiny">illustrator</div>
                      </Link>
                    </li>
                    <li className="item">
                      <div className="image">
                        <img src="images/apps/item-3.png" alt="" />
                      </div>
                      <Link to="#">
                        <div className="text-tiny">Sheets</div>
                      </Link>
                    </li>
                    <li className="item">
                      <div className="image">
                        <img src="images/apps/item-4.png" alt="" />
                      </div>
                      <Link to="#">
                        <div className="text-tiny">Gmail</div>
                      </Link>
                    </li>
                    <li className="item">
                      <div className="image">
                        <img src="images/apps/item-5.png" alt="" />
                      </div>
                      <Link to="#">
                        <div className="text-tiny">Messenger</div>
                      </Link>
                    </li>
                    <li className="item">
                      <div className="image">
                        <img src="images/apps/item-6.png" alt="" />
                      </div>
                      <Link to="#">
                        <div className="text-tiny">Youtube</div>
                      </Link>
                    </li>
                    <li className="item">
                      <div className="image">
                        <img src="images/apps/item-7.png" alt="" />
                      </div>
                      <Link to="#">
                        <div className="text-tiny">Flaticon</div>
                      </Link>
                    </li>
                    <li className="item">
                      <div className="image">
                        <img src="images/apps/item-8.png" alt="" />
                      </div>
                      <Link to="#">
                        <div className="text-tiny">Instagram</div>
                      </Link>
                    </li>
                    <li className="item">
                      <div className="image">
                        <img src="images/apps/item-9.png" alt="" />
                      </div>
                      <Link to="#">
                        <div className="text-tiny">PDF</div>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="#" className="tf-button w-full">
                    View all app
                  </Link>
                </li>
              </ul>
            </div>
          </div> */}
          <div className="popup-wrap user type-header">
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton3"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                onClick={toggleMenu}
              >
                <span className="header-user wg-user flex items-center justify-end gap-3 mr-10">
                  <span className="image">
                    <img src="images/avatar/user-1.png" alt="" />
                  </span>

                  <span className="flex flex-col items-end text-left">
                    <span className="body-title mb-1">
                      {user_data?.user?.name}
                    </span>
                    <span className="text-tiny">{user_data?.user?.role}</span>
                  </span>
                </span>
              </button>
              <ul
                className={
                  showMenu
                    ? "dropdown-menu-home dropdown-menu-end has-content"
                    : "dropdown-menu-bar dropdown-menu-end has-content"
                }
                aria-labelledby="dropdownMenuButton3"
              >
                <li>
                  <Link to="#" className="user-item" onClick={handleLogout}>
                    <div className="icon">
                      <i className="icon-log-out"></i>
                    </div>
                    <span className="body-title-2">Logout</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
