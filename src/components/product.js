import React from "react";
import {Link} from "react-router-dom";
const Product = () =>{
    return(
           <div className="layout-wrap">
                {/* <!-- section-menu-left --> */}
                <div className="section-menu-left">
                    <div className="box-logo">
                        <Link to="/" id="site-logo-inner">
                            <img className="" id="logo_header" alt="" src="images/logo/logo.png" data-light="images/logo/logo.png" data-dark="images/logo/logo-dark.png" />
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
                                    <li className="menu-item has-children">
                                        <Link to="javascript:void(0);" className="menu-item-button">
                                            <div className="icon"><i className="icon-grid"></i></div>
                                            <div className="text">Dashboard</div>
                                        </Link>
                                        <ul className="sub-menu">
                                            <li className="sub-menu-item">
                                                <Link to="/" className="">
                                                    <div className="text">Home 01</div>
                                                </Link>
                                            </li>
                                            <li className="sub-menu-item">
                                                <Link to="home-2.html" className="">
                                                    <div className="text">Home 02</div>
                                                </Link>
                                            </li>
                                            <li className="sub-menu-item">
                                                <Link to="home-3.html" className="">
                                                    <div className="text">Home 03</div>
                                                </Link>
                                            </li>
                                            <li className="sub-menu-item">
                                                <Link to="home-4.html" className="">
                                                    <div className="text">Home 04</div>
                                                </Link>
                                            </li>
                                            <li className="sub-menu-item">
                                                <Link to="home-boxed.html" className="">
                                                    <div className="text">Home Boxed</div>
                                                </Link>
                                            </li>
                                            <li className="sub-menu-item">
                                                <Link to="home-menu-icon-hover.html" className="">
                                                    <div className="text">Home Menu Icon Hover</div>
                                                </Link>
                                            </li>
                                            <li className="sub-menu-item">
                                                <Link to="home-menu-icon-default.html" className="">
                                                    <div className="text">Home Menu Icon Default</div>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div className="center-item">
                                <div className="center-heading">All page</div>
                                <ul className="menu-list">
                                    <li className="menu-item has-children">
                                        <Link to="javascript:void(0);" className="menu-item-button">
                                            <div className="icon"><i className="icon-shopping-cart"></i></div>
                                            <div className="text">Ecommerce</div>
                                        </Link>
                                        <ul className="sub-menu">
                                            <li className="sub-menu-item">
                                                <Link to="add-product.html" className="">
                                                    <div className="text">Add Product</div>
                                                </Link>
                                            </li>
                                            <li className="sub-menu-item">
                                                <Link to="product-list.html" className="">
                                                    <div className="text">Product List</div>
                                                </Link>
                                            </li>
                                            <li className="sub-menu-item">
                                                <Link to="product-detail-1.html" className="">
                                                    <div className="text">Product Detail 1</div>
                                                </Link>
                                            </li>
                                            <li className="sub-menu-item">
                                                <Link to="product-detail-2.html" className="">
                                                    <div className="text">Product Detail 2</div>
                                                </Link>
                                            </li>
                                            <li className="sub-menu-item">
                                                <Link to="product-detail-3.html" className="">
                                                    <div className="text">Product Detail 3</div>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="menu-item has-children">
                                        <Link to="javascript:void(0);" className="menu-item-button">
                                            <div className="icon"><i className="icon-layers"></i></div>
                                            <div className="text">Category</div>
                                        </Link>
                                        <ul className="sub-menu">
                                            <li className="sub-menu-item">
                                                <Link to="category-list.html" className="">
                                                    <div className="text">Category list</div>
                                                </Link>
                                            </li>
                                            <li className="sub-menu-item">
                                                <Link to="new-category.html" className="">
                                                    <div className="text">New category</div>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="menu-item has-children">
                                        <Link to="javascript:void(0);" className="menu-item-button">
                                            <div className="icon"><i className="icon-box"></i></div>
                                            <div className="text">Attributes</div>
                                        </Link>
                                        <ul className="sub-menu">
                                            <li className="sub-menu-item">
                                                <Link to="attributes.html" className="">
                                                    <div className="text">Attributes</div>
                                                </Link>
                                            </li>
                                            <li className="sub-menu-item">
                                                <Link to="add-attributes.html" className="">
                                                    <div className="text">Add attributes</div>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="menu-item has-children">
                                        <Link to="javascript:void(0);" className="menu-item-button">
                                            <div className="icon"><i className="icon-file-plus"></i></div>
                                            <div className="text">Order</div>
                                        </Link>
                                        <ul className="sub-menu">
                                            <li className="sub-menu-item">
                                                <Link to="oder-list.html" className="">
                                                    <div className="text">Order list</div>
                                                </Link>
                                            </li>
                                            <li className="sub-menu-item">
                                                <Link to="oder-detail.html" className="">
                                                    <div className="text">Order detail</div>
                                                </Link>
                                            </li>
                                            <li className="sub-menu-item">
                                                <Link to="oder-tracking.html" className="">
                                                    <div className="text">Order tracking</div>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="menu-item has-children active">
                                        <Link to="javascript:void(0);" className="menu-item-button">
                                            <div className="icon"><i className="icon-user"></i></div>
                                            <div className="text">User</div>
                                        </Link>
                                        <ul className="sub-menu" style={{display: "block"}}>
                                            <li className="sub-menu-item">
                                                <Link to="all-user.html" className="active">
                                                    <div className="text">All user</div>
                                                </Link>
                                            </li>
                                            {/* <li className="sub-menu-item">
                                                <Link to="add-new-user.html" className="">
                                                    <div className="text">Add new user</div>
                                                </Link>
                                            </li> */}
                                            <li className="sub-menu-item">
                                                <Link to="login.html" className="">
                                                    <div className="text">Login</div>
                                                </Link>
                                            </li>
                                            <li className="sub-menu-item">
                                                <Link to="sign-up.html" className="">
                                                    <div className="text">Sign up</div>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="menu-item has-children">
                                        <Link to="javascript:void(0);" className="menu-item-button">
                                            <div className="icon"><i className="icon-user-plus"></i></div>
                                            <div className="text">Roles</div>
                                        </Link>
                                        <ul className="sub-menu">
                                            <li className="sub-menu-item">
                                                <Link to="all-roles.html" className="">
                                                    <div className="text">All roles</div>
                                                </Link>
                                            </li>
                                            <li className="sub-menu-item">
                                                <Link to="create-role.html" className="">
                                                    <div className="text">Create role</div>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="menu-item">
                                        <Link to="gallery.html" className="">
                                            <div className="icon"><i className="icon-image"></i></div>
                                            <div className="text">Gallery</div>
                                        </Link>
                                    </li>
                                    <li className="menu-item">
                                        <Link to="report.html" className="">
                                            <div className="icon"><i className="icon-pie-chart"></i></div>
                                            <div className="text">Report</div>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="center-item">
                                <div className="center-heading">Setting</div>
                                <ul className="menu-list">
                                    <li className="menu-item has-children">
                                        <Link to="javascript:void(0);" className="menu-item-button">
                                            <div className="icon"><i className="icon-map-pin"></i></div>
                                            <div className="text">Location</div>
                                        </Link>
                                        <ul className="sub-menu">
                                            <li className="sub-menu-item">
                                                <Link to="countries.html" className="">
                                                    <div className="text">Countries</div>
                                                </Link>
                                            </li>
                                            <li className="sub-menu-item">
                                                <Link to="states.html" className="">
                                                    <div className="text">States</div>
                                                </Link>
                                            </li>
                                            <li className="sub-menu-item">
                                                <Link to="cities.html" className="">
                                                    <div className="text">Cities</div>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="menu-item">
                                        <Link to="setting.html" className="">
                                            <div className="icon"><i className="icon-settings"></i></div>
                                            <div className="text">Setting</div>
                                        </Link>
                                    </li>
                                    <li className="menu-item has-children">
                                        <Link to="javascript:void(0);" className="menu-item-button">
                                            <div className="icon"><i className="icon-edit"></i></div>
                                            <div className="text">Pages</div>
                                        </Link>
                                        <ul className="sub-menu">
                                            <li className="sub-menu-item">
                                                <Link to="list-page.html" className="">
                                                    <div className="text">List page</div>
                                                </Link>
                                            </li>
                                            <li className="sub-menu-item">
                                                <Link to="new-page.html" className="">
                                                    <div className="text">New page</div>
                                                </Link>
                                            </li>
                                            <li className="sub-menu-item">
                                                <Link to="edit-page.html" className="">
                                                    <div className="text">Edit page</div>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                          <div className="center-item">
                                <div className="center-heading">Components</div>
                                <ul className="menu-list">
                                    <li className="menu-item">
                                        <Link to="components.html" className="">
                                            <div className="icon"><i className="icon-database"></i></div>
                                            <div className="text">Components</div>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="center-item">
                                <div className="center-heading">Support</div>
                                <ul className="menu-list">
                                    <li className="menu-item">
                                        <Link to="#" className="">
                                            <div className="icon"><i className="icon-help-circle"></i></div>
                                            <div className="text">Help center</div>
                                        </Link>
                                    </li>
                                    <li className="menu-item">
                                        <Link to="#" className="">
                                            <div className="icon">
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M15.7727 4.27031C15.025 3.51514 14.1357 2.91486 13.1558 2.50383C12.1758 2.09281 11.1244 1.87912 10.0617 1.875H10C7.84512 1.875 5.77849 2.73102 4.25476 4.25476C2.73102 5.77849 1.875 7.84512 1.875 10V14.375C1.875 14.8723 2.07254 15.3492 2.42417 15.7008C2.77581 16.0525 3.25272 16.25 3.75 16.25H5C5.49728 16.25 5.9742 16.0525 6.32583 15.7008C6.67746 15.3492 6.875 14.8723 6.875 14.375V11.25C6.875 10.7527 6.67746 10.2758 6.32583 9.92417C5.9742 9.57254 5.49728 9.375 5 9.375H3.15313C3.27366 8.07182 3.76315 6.83 4.56424 5.79508C5.36532 4.76016 6.44481 3.97502 7.67617 3.53169C8.90753 3.08836 10.2398 3.0052 11.5167 3.29196C12.7936 3.57872 13.9624 4.22352 14.8859 5.15078C16.0148 6.28539 16.7091 7.78052 16.8477 9.375H15C14.5027 9.375 14.0258 9.57254 13.6742 9.92417C13.3225 10.2758 13.125 10.7527 13.125 11.25V14.375C13.125 14.8723 13.3225 15.3492 13.6742 15.7008C14.0258 16.0525 14.5027 16.25 15 16.25H16.875C16.875 16.7473 16.6775 17.2242 16.3258 17.5758C15.9742 17.9275 15.4973 18.125 15 18.125H10.625C10.4592 18.125 10.3003 18.1908 10.1831 18.3081C10.0658 18.4253 10 18.5842 10 18.75C10 18.9158 10.0658 19.0747 10.1831 19.1919C10.3003 19.3092 10.4592 19.375 10.625 19.375H15C15.8288 19.375 16.6237 19.0458 17.2097 18.4597C17.7958 17.8737 18.125 17.0788 18.125 16.25V10C18.1291 8.93717 17.9234 7.88398 17.5197 6.90077C17.1161 5.91757 16.5224 5.02368 15.7727 4.27031ZM5 10.625C5.16576 10.625 5.32473 10.6908 5.44194 10.8081C5.55915 10.9253 5.625 11.0842 5.625 11.25V14.375C5.625 14.5408 5.55915 14.6997 5.44194 14.8169C5.32473 14.9342 5.16576 15 5 15H3.75C3.58424 15 3.42527 14.9342 3.30806 14.8169C3.19085 14.6997 3.125 14.5408 3.125 14.375V10.625H5ZM15 15C14.8342 15 14.6753 14.9342 14.5581 14.8169C14.4408 14.6997 14.375 14.5408 14.375 14.375V11.25C14.375 11.0842 14.4408 10.9253 14.5581 10.8081C14.6753 10.6908 14.8342 10.625 15 10.625H16.875V15H15Z" fill="#111111"/>
                                                </svg>
                                            </div>
                                            <div className="text">FAQs</div>
                                        </Link>
                                    </li>
                                    <li className="menu-item">
                                        <Link to="#" className="">
                                            <div className="icon">
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clip-path="url(#clip0_604_18468)">
                                                    <path d="M4.71875 7V1H15.5561L18.9991 4.44801V19H4.71875C4.71875 19 4.71875 16.2 4.71875 13.5" stroke="#111111" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                                    <path d="M19.0015 4.44801H15.5586V1L19.0015 4.44801Z" stroke="#111111" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                                    <path d="M7.53469 14.5507C9.89243 14.5507 11.8037 12.6366 11.8037 10.2754C11.8037 7.91415 9.89243 6 7.53469 6C5.17695 6 3.26562 7.91415 3.26562 10.2754C3.26562 12.6366 5.17695 14.5507 7.53469 14.5507Z" stroke="#111111" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                                    <path d="M5.41029 13.9852L2.90967 16.4895C2.47263 16.9272 1.76451 16.9272 1.3275 16.4895C0.890833 16.0522 0.890833 15.3427 1.3275 14.9054L3.82812 12.4011M6.14799 10.2051L7.11794 11.175L8.91794 9.375" stroke="#111111" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                                    </g>
                                                    <defs>
                                                    <clipPath id="clip0_604_18468">
                                                    <rect width="20" height="20" fill="white"/>
                                                    </clipPath>
                                                    </defs>
                                                </svg>
                                            </div>
                                            <div className="text">Privacy policy</div>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="center-item">
                                <div className="center-heading">Connect us</div>
                                <ul className="wg-social">
                                    <li>
                                        <Link to="#"><i className="icon-facebook"></i></Link>
                                    </li>
                                    <li className="active">
                                        <Link to="#"><i className="icon-twitter"></i></Link>
                                    </li>
                                    <li>
                                        <Link to="#"><i className="icon-linkedin"></i></Link>
                                    </li>
                                    <li>
                                        <Link to="#"><i className="icon-instagram"></i></Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="bot text-center">
                            <div className="wrap">
                                <div className="mb-20">
                                    <img src="images/menu-left/img-bot.png" alt=""/>
                                </div>
                                <div className="mb-20">
                                    <h6>Hi, how can we help?</h6>
                                    <div className="text">Contact us if you have any assistance, we will contact you as soon as possible</div>
                                </div>
                                <Link to="#" className="tf-button w-full">Contact</Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- /section-menu-left --> */}
                {/* <!-- section-content-right --> */}
                <div className="section-content-right">
                    {/* <!-- header-dashboard --> */}
                    <div className="header-dashboard">
                        <div className="wrap">
                            <div className="header-left">
                                <Link to="/">
                                    <img className="" id="logo_header_mobile" alt="" src="images/logo/logo.png" data-light="images/logo/logo.png" data-dark="images/logo/logo-dark.png" data-width="154px" data-height="52px" data-retina="images/logo/logo@2x.png"/>
                                </Link>
                                <div className="button-show-hide">
                                    <i className="icon-menu-left"></i>
                                </div>
                                <form className="form-search flex-grow">
                                    <fieldset className="name">
                                        <input type="text" placeholder="Search here..." className="show-search" name="name" tabindex="2" value="" aria-required="true" required=""/>
                                    </fieldset>
                                    <div className="button-submit">
                                        <button className="" type="submit"><i className="icon-search"></i></button>
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
                                                            <img src="images/products/17.png" alt=""/>
                                                        </div>
                                                        <div className="flex items-center justify-between gap20 flex-grow">
                                                            <div className="name">
                                                                <Link to="product-list.html" className="body-text">Dog Food Rachael Ray Nutrish®</Link>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="mb-10">
                                                        <div className="divider"></div>
                                                    </li>
                                                    <li className="product-item gap14 mb-10">
                                                        <div className="image no-bg">
                                                            <img src="images/products/18.png" alt=""/>
                                                        </div>
                                                        <div className="flex items-center justify-between gap20 flex-grow">
                                                            <div className="name">
                                                                <Link to="product-list.html" className="body-text">Natural Dog Food Healthy Dog Food</Link>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="mb-10">
                                                        <div className="divider"></div>
                                                    </li>
                                                    <li className="product-item gap14">
                                                        <div className="image no-bg">
                                                            <img src="images/products/19.png" alt=""/>
                                                        </div>
                                                        <div className="flex items-center justify-between gap20 flex-grow">
                                                            <div className="name">
                                                                <Link to="product-list.html" className="body-text">Freshpet Healthy Dog Food and Cat</Link>
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
                                                            <img src="images/products/20.png" alt=""/>
                                                        </div>
                                                        <div className="flex items-center justify-between gap20 flex-grow">
                                                            <div className="name">
                                                                <Link to="product-list.html" className="body-text">Sojos Crunchy Natural Grain Free...</Link>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="mb-10">
                                                        <div className="divider"></div>
                                                    </li>
                                                    <li className="product-item gap14 mb-10">
                                                        <div className="image no-bg">
                                                            <img src="images/products/21.png" alt=""/>
                                                        </div>
                                                        <div className="flex items-center justify-between gap20 flex-grow">
                                                            <div className="name">
                                                                <Link to="product-list.html" className="body-text">Kristin Watson</Link>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="mb-10">
                                                        <div className="divider"></div>
                                                    </li>
                                                    <li className="product-item gap14 mb-10">
                                                        <div className="image no-bg">
                                                            <img src="images/products/22.png" alt=""/>
                                                        </div>
                                                        <div className="flex items-center justify-between gap20 flex-grow">
                                                            <div className="name">
                                                                <Link to="product-list.html" className="body-text">Mega Pumpkin Bone</Link>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="mb-10">
                                                        <div className="divider"></div>
                                                    </li>
                                                    <li className="product-item gap14">
                                                        <div className="image no-bg">
                                                            <img src="images/products/23.png" alt=""/>
                                                        </div>
                                                        <div className="flex items-center justify-between gap20 flex-grow">
                                                            <div className="name">
                                                                <Link to="product-list.html" className="body-text">Mega Pumpkin Bone</Link>
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
                                <div className="header-item country">
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
                                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                            <span className="header-item">
                                                <span className="text-tiny">1</span>
                                                <i className="icon-bell"></i>
                                            </span>
                                        </button>
                                        <ul className="dropdown-menu dropdown-menu-end has-content" aria-labelledby="dropdownMenuButton1" >
                                            <li>
                                                <h6>Message</h6>
                                            </li>
                                            <li>
                                                <div className="noti-item w-full wg-user active">
                                                    <div className="image">
                                                        <img src="images/avatar/user-11.png" alt=""/>
                                                    </div>
                                                    <div className="flex-grow">
                                                        <div className="flex items-center justify-between">
                                                            <Link to="#" className="body-title">Cameron Williamson</Link>
                                                            <div className="time">10:13 PM</div>
                                                        </div>
                                                        <div className="text-tiny">Hello?</div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="noti-item w-full wg-user active">
                                                    <div className="image">
                                                        <img src="images/avatar/user-12.png" alt=""/>
                                                    </div>
                                                    <div className="flex-grow">
                                                        <div className="flex items-center justify-between">
                                                            <Link to="#" className="body-title">Ralph Edwards</Link>
                                                            <div className="time">10:13 PM</div>
                                                        </div>
                                                        <div className="text-tiny">Are you there?  interested i this...</div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="noti-item w-full wg-user active">
                                                    <div className="image">
                                                        <img src="images/avatar/user-13.png" alt=""/>
                                                    </div>
                                                    <div className="flex-grow">
                                                        <div className="flex items-center justify-between">
                                                            <Link to="#" className="body-title">Eleanor Pena</Link>
                                                            <div className="time">10:13 PM</div>
                                                        </div>
                                                        <div className="text-tiny">Interested in this loads?</div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="noti-item w-full wg-user active">
                                                    <div className="image">
                                                        <img src="images/avatar/user-11.png" alt=""/>
                                                    </div>
                                                    <div className="flex-grow">
                                                        <div className="flex items-center justify-between">
                                                            <Link to="#" className="body-title">Jane Cooper</Link>
                                                            <div className="time">10:13 PM</div>
                                                        </div>
                                                        <div className="text-tiny">Okay...Do we have a deal?</div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li><Link to="#" className="tf-button w-full">View all</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="popup-wrap message type-header">
                                    <div className="dropdown">
                                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                                            <span className="header-item">
                                                <span className="text-tiny">1</span>
                                                <i className="icon-message-square"></i>
                                            </span>
                                        </button>
                                        <ul className="dropdown-menu dropdown-menu-end has-content" aria-labelledby="dropdownMenuButton2" >
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
                                                        <div className="text-tiny">Morbi sapien massa, ultricies at rhoncus at, ullamcorper nec diam</div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="message-item item-2">
                                                    <div className="image">
                                                        <i className="icon-noti-2"></i>
                                                    </div>
                                                    <div>
                                                        <div className="body-title-2">Account has been verified</div>
                                                        <div className="text-tiny">Mauris libero ex, iaculis vitae rhoncus et</div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="message-item item-3">
                                                    <div className="image">
                                                        <i className="icon-noti-3"></i>
                                                    </div>
                                                    <div>
                                                        <div className="body-title-2">Order shipped successfully</div>
                                                        <div className="text-tiny">Integer aliquam eros nec sollicitudin sollicitudin</div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="message-item item-4">
                                                    <div className="image">
                                                        <i className="icon-noti-4"></i>
                                                    </div>
                                                    <div>
                                                        <div className="body-title-2">Order pending: <span>ID 305830</span></div>
                                                        <div className="text-tiny">Ultricies at rhoncus at ullamcorper</div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li><Link to="#" className="tf-button w-full">View all</Link></li>
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
                                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton4" data-bs-toggle="dropdown" aria-expanded="false">
                                            <span className="header-item">
                                                <i className="icon-grid"></i>
                                            </span>
                                        </button>
                                        <ul className="dropdown-menu dropdown-menu-end has-content" aria-labelledby="dropdownMenuButton4" >
                                            <li>
                                                <h6>Related apps</h6>
                                            </li>
                                            <li>
                                                <ul className="list-apps">
                                                    <li className="item">
                                                        <div className="image">
                                                            <img src="images/apps/item-1.png" alt=""/>
                                                        </div>
                                                        <Link to="#">
                                                            <div className="text-tiny">Photoshop</div>
                                                        </Link>
                                                    </li>
                                                    <li className="item">
                                                        <div className="image">
                                                            <img src="images/apps/item-2.png" alt=""/>
                                                        </div>
                                                        <Link to="#">
                                                            <div className="text-tiny">illustrator</div>
                                                        </Link>
                                                    </li>
                                                    <li className="item">
                                                        <div className="image">
                                                            <img src="images/apps/item-3.png" alt=""/>
                                                        </div>
                                                        <Link to="#">
                                                            <div className="text-tiny">Sheets</div>
                                                        </Link>
                                                    </li>
                                                    <li className="item">
                                                        <div className="image">
                                                            <img src="images/apps/item-4.png" alt=""/>
                                                        </div>
                                                        <Link to="#">
                                                            <div className="text-tiny">Gmail</div>
                                                        </Link>
                                                    </li>
                                                    <li className="item">
                                                        <div className="image">
                                                            <img src="images/apps/item-5.png" alt=""/>
                                                        </div>
                                                        <Link to="#">
                                                            <div className="text-tiny">Messenger</div>
                                                        </Link>
                                                    </li>
                                                    <li className="item">
                                                        <div className="image">
                                                            <img src="images/apps/item-6.png" alt=""/>
                                                        </div>
                                                        <Link to="#">
                                                            <div className="text-tiny">Youtube</div>
                                                        </Link>
                                                    </li>
                                                    <li className="item">
                                                        <div className="image">
                                                            <img src="images/apps/item-7.png" alt=""/>
                                                        </div>
                                                        <Link to="#">
                                                            <div className="text-tiny">Flaticon</div>
                                                        </Link>
                                                    </li>
                                                    <li className="item">
                                                        <div className="image">
                                                            <img src="images/apps/item-8.png" alt=""/>
                                                        </div>
                                                        <Link to="#">
                                                            <div className="text-tiny">Instagram</div>
                                                        </Link>
                                                    </li>
                                                    <li className="item">
                                                        <div className="image">
                                                            <img src="images/apps/item-9.png" alt=""/>
                                                        </div>
                                                        <Link to="#">
                                                            <div className="text-tiny">PDF</div>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li><Link to="#" className="tf-button w-full">View all app</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="popup-wrap user type-header">
                                    <div className="dropdown">
                                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton3" data-bs-toggle="dropdown" aria-expanded="false">
                                            <span className="header-user wg-user">
                                                <span className="image">
                                                    <img src="images/avatar/user-1.png" alt=""/>
                                                </span>
                                                <span className="flex flex-column">
                                                    <span className="body-title mb-2">Kristin Watson</span>
                                                    <span className="text-tiny">Admin</span>
                                                </span>
                                            </span>
                                        </button>
                                        <ul className="dropdown-menu dropdown-menu-end has-content" aria-labelledby="dropdownMenuButton3" >
                                            <li>
                                                <Link to="#" className="user-item">
                                                    <div className="icon">
                                                        <i className="icon-user"></i>
                                                    </div>
                                                    <div className="body-title-2">Account</div>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#" className="user-item">
                                                    <div className="icon">
                                                        <i className="icon-mail"></i>
                                                    </div>
                                                    <div className="body-title-2">Inbox</div>
                                                    <div className="number">27</div>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#" className="user-item">
                                                    <div className="icon">
                                                        <i className="icon-file-text"></i>
                                                    </div>
                                                    <div className="body-title-2">Taskboard</div>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="setting.html" className="user-item">
                                                    <div className="icon">
                                                        <i className="icon-settings"></i>
                                                    </div>
                                                    <div className="body-title-2">Setting</div>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#" className="user-item">
                                                    <div className="icon">
                                                        <i className="icon-headphones"></i>
                                                    </div>
                                                    <div className="body-title-2">Support</div>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="login.html" className="user-item">
                                                    <div className="icon">
                                                        <i className="icon-log-out"></i>
                                                    </div>
                                                    <div className="body-title-2">Log out</div>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- /header-dashboard --> */}
                    {/* <!-- main-content --> */}
                    <div className="main-content">
                        {/* <!-- main-content-wrap --> */}
                        <div className="main-content-inner">
                            {/* <!-- main-content-wrap --> */}
                            <div className="main-content-wrap">
                                <div className="flex items-center flex-wrap justify-between gap20 mb-27">
                                    <h3>All User</h3>
                                    <ul className="breadcrumbs flex items-center flex-wrap justify-start gap10">
                                        <li>
                                            <Link to="/"><div className="text-tiny">Dashboard</div></Link>
                                        </li>
                                        <li>
                                            <i className="icon-chevron-right"></i>
                                        </li>
                                        <li>
                                            <Link to="#"><div className="text-tiny">User</div></Link>
                                        </li>
                                        <li>
                                            <i className="icon-chevron-right"></i>
                                        </li>
                                        <li>
                                            <div className="text-tiny">All User</div>
                                        </li>
                                    </ul>
                                </div>
                                {/* <!-- all-user --> */}
                                <div className="wg-box">
                                    <div className="flex items-center justify-between gap10 flex-wrap">
                                        <div className="wg-filter flex-grow">
                                            <form className="form-search">
                                                <fieldset className="name">
                                                    <input type="text" placeholder="Search here..." className="" name="name" tabindex="2" value="" aria-required="true" required=""/>
                                                </fieldset>
                                                <div className="button-submit">
                                                    <button className="" type="submit"><i className="icon-search"></i></button>
                                                </div>
                                            </form>
                                        </div>
                                        <Link className="tf-button style-1 w208" to="add-new-user.html"><i className="icon-plus"></i>Add new</Link>
                                    </div>
                                    <div className="wg-table table-all-user">
                                        <ul className="table-title flex gap20 mb-14">
                                            <li>
                                                <div className="body-title">User</div>
                                            </li>    
                                            <li>
                                                <div className="body-title">Phone</div>
                                            </li>
                                            <li>
                                                <div className="body-title">Email</div>
                                            </li>
                                            <li>
                                                <div className="body-title">Action</div>
                                            </li>
                                        </ul>
                                        <ul className="flex flex-column">
                                            <li className="user-item gap14">
                                                <div className="image">
                                                    <img src="images/avatar/user-6.png" alt=""/>
                                                </div>
                                                <div className="flex items-center justify-between gap20 flex-grow">
                                                    <div className="name">
                                                        <Link to="#" className="body-title-2">Kristin Watson</Link>
                                                        <div className="text-tiny mt-3">Product name</div>
                                                    </div>
                                                    <div className="body-text">$1,452.500</div>
                                                    <div className="body-text">1,638</div>
                                                    <div className="list-icon-function">
                                                        <div className="item eye">
                                                            <i className="icon-eye"></i>
                                                        </div>
                                                        <div className="item edit">
                                                            <i className="icon-edit-3"></i>
                                                        </div>
                                                        <div className="item trash">
                                                            <i className="icon-trash-2"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="user-item gap14">
                                                <div className="image">
                                                    <img src="images/avatar/user-7.png" alt=""/>
                                                </div>
                                                <div className="flex items-center justify-between gap20 flex-grow">
                                                    <div className="name">
                                                        <Link to="#" className="body-title-2">Kristin Watson</Link>
                                                        <div className="text-tiny mt-3">Product name</div>
                                                    </div>
                                                    <div className="body-text">$1,452.500</div>
                                                    <div className="body-text">1,638</div>
                                                    <div className="list-icon-function">
                                                        <div className="item eye">
                                                            <i className="icon-eye"></i>
                                                        </div>
                                                        <div className="item edit">
                                                            <i className="icon-edit-3"></i>
                                                        </div>
                                                        <div className="item trash">
                                                            <i className="icon-trash-2"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="user-item gap14">
                                                <div className="image">
                                                    <img src="images/avatar/user-8.png" alt=""/>
                                                </div>
                                                <div className="flex items-center justify-between gap20 flex-grow">
                                                    <div className="name">
                                                        <Link to="#" className="body-title-2">Kristin Watson</Link>
                                                        <div className="text-tiny mt-3">Product name</div>
                                                    </div>
                                                    <div className="body-text">$1,452.500</div>
                                                    <div className="body-text">1,638</div>
                                                    <div className="list-icon-function">
                                                        <div className="item eye">
                                                            <i className="icon-eye"></i>
                                                        </div>
                                                        <div className="item edit">
                                                            <i className="icon-edit-3"></i>
                                                        </div>
                                                        <div className="item trash">
                                                            <i className="icon-trash-2"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="user-item gap14">
                                                <div className="image">
                                                    <img src="images/avatar/user-9.png" alt=""/>
                                                </div>
                                                <div className="flex items-center justify-between gap20 flex-grow">
                                                    <div className="name">
                                                        <Link to="#" className="body-title-2">Kristin Watson</Link>
                                                        <div className="text-tiny mt-3">Product name</div>
                                                    </div>
                                                    <div className="body-text">$1,452.500</div>
                                                    <div className="body-text">1,638</div>
                                                    <div className="list-icon-function">
                                                        <div className="item eye">
                                                            <i className="icon-eye"></i>
                                                        </div>
                                                        <div className="item edit">
                                                            <i className="icon-edit-3"></i>
                                                        </div>
                                                        <div className="item trash">
                                                            <i className="icon-trash-2"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="user-item gap14">
                                                <div className="image">
                                                    <img src="images/avatar/user-10.png" alt=""/>
                                                </div>
                                                <div className="flex items-center justify-between gap20 flex-grow">
                                                    <div className="name">
                                                        <Link to="#" className="body-title-2">Kristin Watson</Link>
                                                        <div className="text-tiny mt-3">Product name</div>
                                                    </div>
                                                    <div className="body-text">$1,452.500</div>
                                                    <div className="body-text">1,638</div>
                                                    <div className="list-icon-function">
                                                        <div className="item eye">
                                                            <i className="icon-eye"></i>
                                                        </div>
                                                        <div className="item edit">
                                                            <i className="icon-edit-3"></i>
                                                        </div>
                                                        <div className="item trash">
                                                            <i className="icon-trash-2"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="user-item gap14">
                                                <div className="image">
                                                    <img src="images/avatar/user-11.png" alt=""/>
                                                </div>
                                                <div className="flex items-center justify-between gap20 flex-grow">
                                                    <div className="name">
                                                        <Link to="#" className="body-title-2">Kristin Watson</Link>
                                                        <div className="text-tiny mt-3">Product name</div>
                                                    </div>
                                                    <div className="body-text">$1,452.500</div>
                                                    <div className="body-text">1,638</div>
                                                    <div className="list-icon-function">
                                                        <div className="item eye">
                                                            <i className="icon-eye"></i>
                                                        </div>
                                                        <div className="item edit">
                                                            <i className="icon-edit-3"></i>
                                                        </div>
                                                        <div className="item trash">
                                                            <i className="icon-trash-2"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="user-item gap14">
                                                <div className="image">
                                                    <img src="images/avatar/user-12.png" alt=""/>
                                                </div>
                                                <div className="flex items-center justify-between gap20 flex-grow">
                                                    <div className="name">
                                                        <Link to="#" className="body-title-2">Kristin Watson</Link>
                                                        <div className="text-tiny mt-3">Product name</div>
                                                    </div>
                                                    <div className="body-text">$1,452.500</div>
                                                    <div className="body-text">1,638</div>
                                                    <div className="list-icon-function">
                                                        <div className="item eye">
                                                            <i className="icon-eye"></i>
                                                        </div>
                                                        <div className="item edit">
                                                            <i className="icon-edit-3"></i>
                                                        </div>
                                                        <div className="item trash">
                                                            <i className="icon-trash-2"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="user-item gap14">
                                                <div className="image">
                                                    <img src="images/avatar/user-13.png" alt=""/>
                                                </div>
                                                <div className="flex items-center justify-between gap20 flex-grow">
                                                    <div className="name">
                                                        <Link to="#" className="body-title-2">Kristin Watson</Link>
                                                        <div className="text-tiny mt-3">Product name</div>
                                                    </div>
                                                    <div className="body-text">$1,452.500</div>
                                                    <div className="body-text">1,638</div>
                                                    <div className="list-icon-function">
                                                        <div className="item eye">
                                                            <i className="icon-eye"></i>
                                                        </div>
                                                        <div className="item edit">
                                                            <i className="icon-edit-3"></i>
                                                        </div>
                                                        <div className="item trash">
                                                            <i className="icon-trash-2"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="user-item gap14">
                                                <div className="image">
                                                    <img src="images/avatar/user-14.png" alt=""/>
                                                </div>
                                                <div className="flex items-center justify-between gap20 flex-grow">
                                                    <div className="name">
                                                        <Link to="#" className="body-title-2">Kristin Watson</Link>
                                                        <div className="text-tiny mt-3">Product name</div>
                                                    </div>
                                                    <div className="body-text">$1,452.500</div>
                                                    <div className="body-text">1,638</div>
                                                    <div className="list-icon-function">
                                                        <div className="item eye">
                                                            <i className="icon-eye"></i>
                                                        </div>
                                                        <div className="item edit">
                                                            <i className="icon-edit-3"></i>
                                                        </div>
                                                        <div className="item trash">
                                                            <i className="icon-trash-2"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="user-item gap14">
                                                <div className="image">
                                                    <img src="images/avatar/user-15.png" alt=""/>
                                                </div>
                                                <div className="flex items-center justify-between gap20 flex-grow">
                                                    <div className="name">
                                                        <Link to="#" className="body-title-2">Kristin Watson</Link>
                                                        <div className="text-tiny mt-3">Product name</div>
                                                    </div>
                                                    <div className="body-text">$1,452.500</div>
                                                    <div className="body-text">1,638</div>
                                                    <div className="list-icon-function">
                                                        <div className="item eye">
                                                            <i className="icon-eye"></i>
                                                        </div>
                                                        <div className="item edit">
                                                            <i className="icon-edit-3"></i>
                                                        </div>
                                                        <div className="item trash">
                                                            <i className="icon-trash-2"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="divider"></div>
                                    <div className="flex items-center justify-between flex-wrap gap10">
                                        <div className="text-tiny">Showing 10 entries</div>
                                        <ul className="wg-pagination">
                                            <li>
                                                <Link to="#"><i className="icon-chevron-left"></i></Link>
                                            </li>
                                            <li>
                                                <Link to="#">1</Link>
                                            </li>
                                            <li className="active">
                                                <Link to="#">2</Link>
                                            </li>
                                            <li>
                                                <Link to="#">3</Link>
                                            </li>
                                            <li>
                                                <Link to="#"><i className="icon-chevron-right"></i></Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/* <!-- /all-user --> */}
                            </div>
                            {/* <!-- /main-content-wrap --> */}
                        </div>
                        {/* <!-- /main-content-wrap --> */}
                        {/* <!-- bottom-page --> */}
                        <div className="bottom-page">
                            <div className="body-text">Copyright © 2024 Remos. Design with</div>
                            <i className="icon-heart"></i>
                            <div className="body-text">by <Link to="https://themeforest.net/user/themesflat/portfolio">Themesflat</Link> All rights reserved.</div>
                        </div>
                        {/* <!-- /bottom-page --> */}
                    </div>
                    {/* <!-- /main-content --> */}
                </div>
                {/* <!-- /section-content-right --> */}
            </div>
    )
}
export default Product