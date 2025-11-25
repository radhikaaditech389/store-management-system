import { Link } from "react-router-dom";
import Layout from "./layout";

const Home = () => {
  return (
    <>
      <Layout>
        <div className="main-content">
          {/* <!-- main-content-wrap --> */}
          <div className="main-content-inner">
            {/* <!-- main-content-wrap --> */}
            <div className="main-content-wrap">
              <div className="tf-section-4 mb-30">
                {/* <!-- chart-default --> */}
                <div className="wg-chart-default">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap14">
                      <div className="image type-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="48"
                          height="52"
                          viewBox="0 0 48 52"
                          fill="none"
                        >
                          <path
                            d="M19.1094 2.12943C22.2034 0.343099 26.0154 0.343099 29.1094 2.12943L42.4921 9.85592C45.5861 11.6423 47.4921 14.9435 47.4921 18.5162V33.9692C47.4921 37.5418 45.5861 40.8431 42.4921 42.6294L29.1094 50.3559C26.0154 52.1423 22.2034 52.1423 19.1094 50.3559L5.72669 42.6294C2.63268 40.8431 0.726688 37.5418 0.726688 33.9692V18.5162C0.726688 14.9435 2.63268 11.6423 5.72669 9.85592L19.1094 2.12943Z"
                            fill="#22C55E"
                          />
                        </svg>
                        <i className="icon-shopping-bag"></i>
                      </div>
                      <div>
                        <div className="body-text mb-2">Total Sales</div>
                        <h4>34,945</h4>
                      </div>
                    </div>
                    <div className="box-icon-trending up">
                      <i className="icon-trending-up"></i>
                      <div className="body-title number">1.56%</div>
                    </div>
                  </div>
                  <div className="wrap-chart">
                    <div id="line-chart-1"></div>
                  </div>
                </div>
                {/* <!-- /chart-default --> */}
                {/* <!-- chart-default --> */}
                <div className="wg-chart-default">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap14">
                      <div className="image type-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="48"
                          height="52"
                          viewBox="0 0 48 52"
                          fill="none"
                        >
                          <path
                            d="M19.1094 2.12943C22.2034 0.343099 26.0154 0.343099 29.1094 2.12943L42.4921 9.85592C45.5861 11.6423 47.4921 14.9435 47.4921 18.5162V33.9692C47.4921 37.5418 45.5861 40.8431 42.4921 42.6294L29.1094 50.3559C26.0154 52.1423 22.2034 52.1423 19.1094 50.3559L5.72669 42.6294C2.63268 40.8431 0.726688 37.5418 0.726688 33.9692V18.5162C0.726688 14.9435 2.63268 11.6423 5.72669 9.85592L19.1094 2.12943Z"
                            fill="#FF5200"
                          />
                        </svg>
                        <i className="icon-dollar-sign"></i>
                      </div>
                      <div>
                        <div className="body-text mb-2">Total Income</div>
                        <h4>$37,802</h4>
                      </div>
                    </div>
                    <div className="box-icon-trending down">
                      <i className="icon-trending-down"></i>
                      <div className="body-title number">1.56%</div>
                    </div>
                  </div>
                  <div className="wrap-chart">
                    <div id="line-chart-2"></div>
                  </div>
                </div>
                {/* <!-- /chart-default --> */}
                {/* <!-- chart-default --> */}
                <div className="wg-chart-default">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap14">
                      <div className="image type-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="48"
                          height="52"
                          viewBox="0 0 48 52"
                          fill="none"
                        >
                          <path
                            d="M19.1094 2.12943C22.2034 0.343099 26.0154 0.343099 29.1094 2.12943L42.4921 9.85592C45.5861 11.6423 47.4921 14.9435 47.4921 18.5162V33.9692C47.4921 37.5418 45.5861 40.8431 42.4921 42.6294L29.1094 50.3559C26.0154 52.1423 22.2034 52.1423 19.1094 50.3559L5.72669 42.6294C2.63268 40.8431 0.726688 37.5418 0.726688 33.9692V18.5162C0.726688 14.9435 2.63268 11.6423 5.72669 9.85592L19.1094 2.12943Z"
                            fill="#CBD5E1"
                          />
                        </svg>
                        <i className="icon-file"></i>
                      </div>
                      <div>
                        <div className="body-text mb-2">Orders Paid</div>
                        <h4>34,945</h4>
                      </div>
                    </div>
                    <div className="box-icon-trending">
                      <i className="icon-trending-up"></i>
                      <div className="body-title number">0.00%</div>
                    </div>
                  </div>
                  <div className="wrap-chart">
                    <div id="line-chart-3"></div>
                  </div>
                </div>
                {/* <!-- /chart-default --> */}
                {/* <!-- chart-default --> */}
                <div className="wg-chart-default">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap14">
                      <div className="image type-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="48"
                          height="52"
                          viewBox="0 0 48 52"
                          fill="none"
                        >
                          <path
                            d="M19.1094 2.12943C22.2034 0.343099 26.0154 0.343099 29.1094 2.12943L42.4921 9.85592C45.5861 11.6423 47.4921 14.9435 47.4921 18.5162V33.9692C47.4921 37.5418 45.5861 40.8431 42.4921 42.6294L29.1094 50.3559C26.0154 52.1423 22.2034 52.1423 19.1094 50.3559L5.72669 42.6294C2.63268 40.8431 0.726688 37.5418 0.726688 33.9692V18.5162C0.726688 14.9435 2.63268 11.6423 5.72669 9.85592L19.1094 2.12943Z"
                            fill="#2377FC"
                          />
                        </svg>
                        <i className="icon-users"></i>
                      </div>
                      <div>
                        <div className="body-text mb-2">Total Visitor</div>
                        <h4>34,945</h4>
                      </div>
                    </div>
                    <div className="box-icon-trending up">
                      <i className="icon-trending-up"></i>
                      <div className="body-title number">1.56%</div>
                    </div>
                  </div>
                  <div className="wrap-chart">
                    <div id="line-chart-4"></div>
                  </div>
                </div>
                {/* <!-- /chart-default --> */}
              </div>
              <div className="tf-section-5 mb-30">
                {/* <!-- chart --> */}
                <div className="wg-box">
                  <div className="flex items-center justify-between">
                    <h5>Recent Order</h5>
                    <div className="dropdown default">
                      <button
                        className="btn btn-secondary dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <span className="icon-more">
                          <i className="icon-more-horizontal"></i>
                        </span>
                      </button>
                      <ul className="dropdown-menu dropdown-menu-end">
                        <li>
                          <Link to="javascript:void(0);">This Week</Link>
                        </li>
                        <li>
                          <Link to="javascript:void(0);">Last Week</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div id="line-chart-5"></div>
                </div>
                {/* <!-- /chart --> */}
                {/* <!-- top-product --> */}
                <div className="wg-box">
                  <div className="flex items-center justify-between">
                    <h5>Top Products</h5>
                    <div className="dropdown default">
                      <button
                        className="btn btn-secondary dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <span className="view-all">
                          View all<i className="icon-chevron-down"></i>
                        </span>
                      </button>
                      <ul className="dropdown-menu dropdown-menu-end">
                        <li>
                          <Link to="javascript:void(0);">3 days</Link>
                        </li>
                        <li>
                          <Link to="javascript:void(0);">7 days</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="wg-table table-top-product">
                    <ul className="flex flex-column gap14">
                      <li className="product-item">
                        <div className="image">
                          <img src="images/products/1.png" alt="" />
                        </div>
                        <div className="flex items-center justify-between flex-grow">
                          <div className="name">
                            <Link
                              to="product-list.html"
                              className="body-title-2"
                            >
                              Patimax Fragrance Long...
                            </Link>
                            <div className="text-tiny mt-3">100 Items</div>
                          </div>
                          <div>
                            <div className="text-tiny mb-3">Coupon Code</div>
                            <div className="body-text">Sflat</div>
                          </div>
                          <div className="country">
                            <img src="images/country/2.png" alt="" />
                          </div>
                          <div>
                            <div className="body-title-2 mb-3">-15%</div>
                            <div className="text-tiny">$27.00</div>
                          </div>
                        </div>
                      </li>
                      <li className="product-item">
                        <div className="image">
                          <img src="images/products/2.png" alt="" />
                        </div>
                        <div className="flex items-center justify-between flex-grow">
                          <div className="name">
                            <Link
                              to="product-list.html"
                              className="body-title-2"
                            >
                              Nulo MedalSeries Adult Cat...
                            </Link>
                            <div className="text-tiny mt-3">100 Items</div>
                          </div>
                          <div>
                            <div className="text-tiny mb-3">Coupon Code</div>
                            <div className="body-text">Sflat</div>
                          </div>
                          <div className="country">
                            <img src="images/country/3.png" alt="" />
                          </div>
                          <div>
                            <div className="body-title-2 mb-3">-15%</div>
                            <div className="text-tiny">$27.00</div>
                          </div>
                        </div>
                      </li>
                      <li className="product-item">
                        <div className="image">
                          <img src="images/products/3.png" alt="" />
                        </div>
                        <div className="flex items-center justify-between flex-grow">
                          <div className="name">
                            <Link
                              to="product-list.html"
                              className="body-title-2"
                            >
                              Pedigree Puppy Dry Dog...
                            </Link>
                            <div className="text-tiny mt-3">100 Items</div>
                          </div>
                          <div>
                            <div className="text-tiny mb-3">Coupon Code</div>
                            <div className="body-text">Sflat</div>
                          </div>
                          <div className="country">
                            <img src="images/country/1.png" alt="" />
                          </div>
                          <div>
                            <div className="body-title-2 mb-3">-15%</div>
                            <div className="text-tiny">$27.00</div>
                          </div>
                        </div>
                      </li>
                      <li className="product-item">
                        <div className="image">
                          <img src="images/products/4.png" alt="" />
                        </div>
                        <div className="flex items-center justify-between flex-grow">
                          <div className="name">
                            <Link
                              to="product-list.html"
                              className="body-title-2"
                            >
                              Biscoito Premier Cookie...
                            </Link>
                            <div className="text-tiny mt-3">100 Items</div>
                          </div>
                          <div>
                            <div className="text-tiny mb-3">Coupon Code</div>
                            <div className="body-text">Sflat</div>
                          </div>
                          <div className="country">
                            <img src="images/country/4.png" alt="" />
                          </div>
                          <div>
                            <div className="body-title-2 mb-3">-15%</div>
                            <div className="text-tiny">$27.00</div>
                          </div>
                        </div>
                      </li>
                      <li className="product-item">
                        <div className="image">
                          <img src="images/products/5.png" alt="" />
                        </div>
                        <div className="flex items-center justify-between flex-grow">
                          <div className="name">
                            <Link
                              to="product-list.html"
                              className="body-title-2 mb-3"
                            >
                              Pedigree Adult Dry Dog...
                            </Link>
                            <div className="text-tiny">100 Items</div>
                          </div>
                          <div>
                            <div className="text-tiny mb-3">Coupon Code</div>
                            <div className="body-text">Sflat</div>
                          </div>
                          <div className="country">
                            <img src="images/country/5.png" alt="" />
                          </div>
                          <div>
                            <div className="body-title-2 mb-3">-15%</div>
                            <div className="text-tiny">$27.00</div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* <!-- /top-product --> */}
                {/* <!-- top-countries --> */}
                <div className="wg-box">
                  <div className="flex items-center justify-between">
                    <h5>Top Countries By Sales</h5>
                    <div className="dropdown default">
                      <button
                        className="btn btn-secondary dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <span className="view-all">
                          View all<i className="icon-chevron-down"></i>
                        </span>
                      </button>
                      <ul className="dropdown-menu dropdown-menu-end">
                        <li>
                          <Link to="javascript:void(0);">3 days</Link>
                        </li>
                        <li>
                          <Link to="javascript:void(0);">7 days</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex items-center gap10">
                    <h4>$37,802</h4>
                    <div className="box-icon-trending up">
                      <i className="icon-trending-up"></i>
                      <div className="body-title number">1.56%</div>
                    </div>
                    <div className="text-tiny">since last weekend</div>
                  </div>
                  <ul className="flex flex-column justify-between gap10 h-full">
                    <li className="country-item">
                      <div className="image">
                        <img src="images/country/6.png" alt="" />
                      </div>
                      <div className="flex-grow flex items-center justify-between">
                        <Link to="countries.html" className="body-text name">
                          Turkish Flag
                        </Link>
                        <div className="box-icon-trending up">
                          <i className="icon-trending-up"></i>
                        </div>
                        <div className="body-text number">6,972</div>
                      </div>
                    </li>
                    <li className="country-item">
                      <div className="image">
                        <img src="images/country/7.png" alt="" />
                      </div>
                      <div className="flex-grow flex items-center justify-between">
                        <Link to="countries.html" className="body-text name">
                          Belgium
                        </Link>
                        <div className="box-icon-trending up">
                          <i className="icon-trending-up"></i>
                        </div>
                        <div className="body-text number">6,972</div>
                      </div>
                    </li>
                    <li className="country-item">
                      <div className="image">
                        <img src="images/country/8.png" alt="" />
                      </div>
                      <div className="flex-grow flex items-center justify-between">
                        <Link to="countries.html" className="body-text name">
                          Sweden
                        </Link>
                        <div className="box-icon-trending down">
                          <i className="icon-trending-down"></i>
                        </div>
                        <div className="body-text number">6,972</div>
                      </div>
                    </li>
                    <li className="country-item">
                      <div className="image">
                        <img src="images/country/9.png" alt="" />
                      </div>
                      <div className="flex-grow flex items-center justify-between">
                        <Link to="countries.html" className="body-text name">
                          Vietnamese
                        </Link>
                        <div className="box-icon-trending up">
                          <i className="icon-trending-up"></i>
                        </div>
                        <div className="body-text number">6,972</div>
                      </div>
                    </li>
                    <li className="country-item">
                      <div className="image">
                        <img src="images/country/10.png" alt="" />
                      </div>
                      <div className="flex-grow flex items-center justify-between">
                        <Link to="countries.html" className="body-text name">
                          Australia
                        </Link>
                        <div className="box-icon-trending down">
                          <i className="icon-trending-down"></i>
                        </div>
                        <div className="body-text number">6,972</div>
                      </div>
                    </li>
                    <li className="country-item">
                      <div className="image">
                        <img src="images/country/11.png" alt="" />
                      </div>
                      <div className="flex-grow flex items-center justify-between">
                        <Link to="countries.html" className="body-text name">
                          Saudi Arabia
                        </Link>
                        <div className="box-icon-trending down">
                          <i className="icon-trending-down"></i>
                        </div>
                        <div className="body-text number">6,972</div>
                      </div>
                    </li>
                  </ul>
                </div>
                {/* <!-- /top-countries --> */}
              </div>
              <div className="tf-section-6 mb-30">
                {/* <!-- best-shop-sellers --> */}
                <div className="wg-box">
                  <div className="flex items-center justify-between">
                    <h5>Best Shop Sellers</h5>
                    <div className="dropdown default">
                      <button
                        className="btn btn-secondary dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <span className="view-all">
                          View all<i className="icon-chevron-down"></i>
                        </span>
                      </button>
                      <ul className="dropdown-menu dropdown-menu-end">
                        <li>
                          <Link to="javascript:void(0);">3 days</Link>
                        </li>
                        <li>
                          <Link to="javascript:void(0);">7 days</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="wg-table table-best-shop-sellers">
                    <ul className="table-title flex gap20 mb-14">
                      <li>
                        <div className="body-title">Shop</div>
                      </li>
                      <li>
                        <div className="body-title">Categories</div>
                      </li>
                      <li>
                        <div className="body-title">Total</div>
                      </li>
                      <li>
                        <div className="body-title">Status</div>
                      </li>
                    </ul>
                    <ul className="flex flex-column gap18">
                      <li className="shop-item">
                        <div className="image">
                          <img src="images/shop/1.png" alt="" />
                        </div>
                        <div className="flex-grow flex items-center justify-between gap20">
                          <div>
                            <Link to="#" className="body-text name">
                              Robert
                            </Link>
                            <div className="text-tiny mt-4">73 Purchases</div>
                          </div>
                          <div className="body-text">Kitchen, Pets</div>
                          <div className="body-text">$1,000</div>
                          <div className="flex items-center justify-between gap10">
                            <div className="progress-level-bar">
                              <span
                                data-progress="29"
                                data-max="70"
                                className=""
                              ></span>
                            </div>
                            <div className="text-tiny">100%</div>
                          </div>
                        </div>
                      </li>
                      <li className="shop-item">
                        <div className="image">
                          <img src="images/shop/2.png" alt="" />
                        </div>
                        <div className="flex-grow flex items-center justify-between gap20">
                          <div>
                            <Link to="#" className="body-text name">
                              Calvin
                            </Link>
                            <div className="text-tiny mt-4">66 Purchases</div>
                          </div>
                          <div className="body-text">Health, Grocery</div>
                          <div className="body-text">$4,000</div>
                          <div className="flex items-center justify-between gap10">
                            <div className="progress-level-bar t1">
                              <span
                                data-progress="59"
                                data-max="70"
                                className=""
                              ></span>
                            </div>
                            <div className="text-tiny">100%</div>
                          </div>
                        </div>
                      </li>
                      <li className="shop-item">
                        <div className="image">
                          <img src="images/shop/3.png" alt="" />
                        </div>
                        <div className="flex-grow flex items-center justify-between gap20">
                          <div>
                            <Link to="#" className="body-text name">
                              Dwight
                            </Link>
                            <div className="text-tiny mt-4">
                              15,890 Purchases
                            </div>
                          </div>
                          <div className="body-text">Electronics</div>
                          <div className="body-text">$2,700</div>
                          <div className="flex items-center justify-between gap10">
                            <div className="progress-level-bar t2">
                              <span
                                data-progress="29"
                                data-max="70"
                                className=""
                              ></span>
                            </div>
                            <div className="text-tiny">100%</div>
                          </div>
                        </div>
                      </li>
                      <li className="shop-item">
                        <div className="image">
                          <img src="images/shop/4.png" alt="" />
                        </div>
                        <div className="flex-grow flex items-center justify-between gap20">
                          <div>
                            <Link to="#" className="body-text name">
                              Cody
                            </Link>
                            <div className="text-tiny mt-4">15 Purchases</div>
                          </div>
                          <div className="body-text">Movies, Music</div>
                          <div className="body-text">$2,100</div>
                          <div className="flex items-center justify-between gap10">
                            <div className="progress-level-bar">
                              <span
                                data-progress="25"
                                data-max="70"
                                className=""
                              ></span>
                            </div>
                            <div className="text-tiny">100%</div>
                          </div>
                        </div>
                      </li>
                      <li className="shop-item">
                        <div className="image">
                          <img src="images/shop/5.png" alt="" />
                        </div>
                        <div className="flex-grow flex items-center justify-between gap20">
                          <div>
                            <Link to="#" className="body-text name">
                              Bruce
                            </Link>
                            <div className="text-tiny mt-4">127 Purchases</div>
                          </div>
                          <div className="body-text">Sports, Fitness</div>
                          <div className="body-text">$4,400</div>
                          <div className="flex items-center justify-between gap10">
                            <div className="progress-level-bar t3">
                              <span
                                data-progress="52"
                                data-max="70"
                                className=""
                              ></span>
                            </div>
                            <div className="text-tiny">100%</div>
                          </div>
                        </div>
                      </li>
                      <li className="shop-item">
                        <div className="image">
                          <img src="images/shop/6.png" alt="" />
                        </div>
                        <div className="flex-grow flex items-center justify-between gap20">
                          <div>
                            <Link to="#" className="body-text name">
                              Jorge
                            </Link>
                            <div className="text-tiny mt-4">30 Purchases</div>
                          </div>
                          <div className="body-text">Toys, Baby</div>
                          <div className="body-text">$4,750</div>
                          <div className="flex items-center justify-between gap10">
                            <div className="progress-level-bar t4">
                              <span
                                data-progress="23"
                                data-max="70"
                                className=""
                              ></span>
                            </div>
                            <div className="text-tiny">100%</div>
                          </div>
                        </div>
                      </li>
                      <li className="shop-item">
                        <div className="image">
                          <img src="images/shop/7.png" alt="" />
                        </div>
                        <div className="flex-grow flex items-center justify-between gap20">
                          <div>
                            <Link to="#" className="body-text name">
                              Kristin Watson
                            </Link>
                            <div className="text-tiny mt-4">93 Purchases</div>
                          </div>
                          <div className="body-text">Gift Cards</div>
                          <div className="body-text">$1,000</div>
                          <div className="flex items-center justify-between gap10">
                            <div className="progress-level-bar t5">
                              <span
                                data-progress="45"
                                data-max="70"
                                className=""
                              ></span>
                            </div>
                            <div className="text-tiny">100%</div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* <!-- /best-shop-sellers --> */}
                {/* <!-- product-overview --> */}
                <div className="wg-box">
                  <div className="flex items-center justify-between">
                    <h5>Product overview</h5>
                    <div className="dropdown default">
                      <button
                        className="btn btn-secondary dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <span className="view-all">
                          View all<i className="icon-chevron-down"></i>
                        </span>
                      </button>
                      <ul className="dropdown-menu dropdown-menu-end">
                        <li>
                          <Link to="javascript:void(0);">3 days</Link>
                        </li>
                        <li>
                          <Link to="javascript:void(0);">7 days</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="wg-table table-product-overview">
                    <ul className="table-title flex gap20 mb-14">
                      <li>
                        <div className="body-title">Name</div>
                      </li>
                      <li>
                        <div className="body-title">Product ID</div>
                      </li>
                      <li>
                        <div className="body-title">Price</div>
                      </li>
                      <li>
                        <div className="body-title">Quantity</div>
                      </li>
                      <li>
                        <div className="body-title">Sale</div>
                      </li>
                      <li>
                        <div className="body-title">Revenue</div>
                      </li>
                      <li>
                        <div className="body-title">Status</div>
                      </li>
                    </ul>
                    <ul className="flex flex-column gap10">
                      <li className="product-item gap14">
                        <div className="image">
                          <img src="images/products/6.png" alt="" />
                        </div>
                        <div className="flex items-center justify-between flex-grow">
                          <div className="name">
                            <Link to="product-list.html" className="body-text">
                              Soft Fluffy Cats
                            </Link>
                          </div>
                          <div className="body-text">#327</div>
                          <div className="body-text">$11.70</div>
                          <div className="body-text">28</div>
                          <div className="body-text">On sale</div>
                          <div className="body-text">$328.85</div>
                          <div className="block-not-available">
                            Not Available
                          </div>
                        </div>
                      </li>
                      <li className="product-item gap14">
                        <div className="image">
                          <img src="images/products/7.png" alt="" />
                        </div>
                        <div className="flex items-center justify-between flex-grow">
                          <div className="name">
                            <Link to="product-list.html" className="body-text">
                              Taste of the Wild Formula Finder
                            </Link>
                          </div>
                          <div className="body-text">#380</div>
                          <div className="body-text">$8.99</div>
                          <div className="body-text">10</div>
                          <div className="body-text">On sale</div>
                          <div className="body-text">$105.55</div>
                          <div className="block-not-available">
                            Not Available
                          </div>
                        </div>
                      </li>
                      <li className="product-item gap14">
                        <div className="image">
                          <img src="images/products/8.png" alt="" />
                        </div>
                        <div className="flex items-center justify-between flex-grow">
                          <div className="name">
                            <Link to="product-list.html" className="body-text">
                              Wellness Natural Food
                            </Link>
                          </div>
                          <div className="body-text">#126</div>
                          <div className="body-text">$5.22</div>
                          <div className="body-text">578</div>
                          <div className="body-text">--/--</div>
                          <div className="body-text">$202.87</div>
                          <div className="block-not-available">
                            Not Available
                          </div>
                        </div>
                      </li>
                      <li className="product-item gap14">
                        <div className="image">
                          <img src="images/products/9.png" alt="" />
                        </div>
                        <div className="flex items-center justify-between flex-grow">
                          <div className="name">
                            <Link to="product-list.html" className="body-text">
                              Dog Food Rachael Ray
                            </Link>
                          </div>
                          <div className="body-text">#582</div>
                          <div className="body-text">$14.81</div>
                          <div className="body-text">36</div>
                          <div className="body-text">--/--</div>
                          <div className="body-text">$475.22</div>
                          <div>
                            <div className="block-available">Available</div>
                          </div>
                        </div>
                      </li>
                      <li className="product-item gap14">
                        <div className="image">
                          <img src="images/products/10.png" alt="" />
                        </div>
                        <div className="flex items-center justify-between flex-grow">
                          <div className="name">
                            <Link to="product-list.html" className="body-text">
                              Best Buddy Bits Dog Treats
                            </Link>
                          </div>
                          <div className="body-text">#293</div>
                          <div className="body-text">$6.48</div>
                          <div className="body-text">84</div>
                          <div className="body-text">--/--</div>
                          <div className="body-text">$219.78</div>
                          <div className="block-not-available">
                            Not Available
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="divider"></div>
                  <div className="flex items-center justify-between flex-wrap gap10">
                    <div className="text-tiny">Showing 5 entries</div>
                    <ul className="wg-pagination">
                      <li>
                        <Link to="#">
                          <i className="icon-chevron-left"></i>
                        </Link>
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
                        <Link to="#">
                          <i className="icon-chevron-right"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* <!-- /product-overview --> */}
              </div>
              <div className="tf-section-3">
                {/* <!-- orders --> */}
                <div className="wg-box">
                  <div className="flex items-center justify-between">
                    <h5>Orders</h5>
                    <div className="dropdown default">
                      <button
                        className="btn btn-secondary dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <span className="icon-more">
                          <i className="icon-more-horizontal"></i>
                        </span>
                      </button>
                      <ul className="dropdown-menu dropdown-menu-end">
                        <li>
                          <Link to="javascript:void(0);">This Week</Link>
                        </li>
                        <li>
                          <Link to="javascript:void(0);">Last Week</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="wg-table table-orders">
                    <ul className="table-title flex gap10 mb-14">
                      <li>
                        <div className="body-title">Product</div>
                      </li>
                      <li>
                        <div className="body-title">Price</div>
                      </li>
                      <li>
                        <div className="body-title">Delivery date</div>
                      </li>
                    </ul>
                    <ul className="flex flex-column gap18">
                      <li className="product-item gap14">
                        <div className="image small">
                          <img src="images/products/11.png" alt="" />
                        </div>
                        <div className="flex items-center justify-between flex-grow gap10">
                          <div className="name">
                            <Link to="product-list.html" className="body-text">
                              Prodotti per il tuo cane...
                            </Link>
                          </div>
                          <div className="body-text">20 Nov 2023</div>
                          <div className="body-text">20 Nov 2023</div>
                        </div>
                      </li>
                      <li className="product-item gap14">
                        <div className="image small">
                          <img src="images/products/12.png" alt="" />
                        </div>
                        <div className="flex items-center justify-between flex-grow gap10">
                          <div className="name">
                            <Link to="product-list.html" className="body-text">
                              Wholesome Pride...
                            </Link>
                          </div>
                          <div className="body-text">20 Nov 2023</div>
                          <div className="body-text">20 Nov 2023</div>
                        </div>
                      </li>
                      <li className="product-item gap14">
                        <div className="image small">
                          <img src="images/products/13.png" alt="" />
                        </div>
                        <div className="flex items-center justify-between flex-grow gap10">
                          <div className="name">
                            <Link to="product-list.html" className="body-text">
                              Beneful Baked Delights...
                            </Link>
                          </div>
                          <div className="body-text">20 Nov 2023</div>
                          <div className="body-text">20 Nov 2023</div>
                        </div>
                      </li>
                      <li className="product-item gap14">
                        <div className="image small">
                          <img src="images/products/14.png" alt="" />
                        </div>
                        <div className="flex items-center justify-between flex-grow gap10">
                          <div className="name">
                            <Link to="product-list.html" className="body-text">
                              Taste of the Wild...
                            </Link>
                          </div>
                          <div className="body-text">20 Nov 2023</div>
                          <div className="body-text">20 Nov 2023</div>
                        </div>
                      </li>
                      <li className="product-item gap14">
                        <div className="image small">
                          <img src="images/products/15.png" alt="" />
                        </div>
                        <div className="flex items-center justify-between flex-grow gap10">
                          <div className="name">
                            <Link to="product-list.html" className="body-text">
                              Canagan - Britain's...
                            </Link>
                          </div>
                          <div className="body-text">20 Nov 2023</div>
                          <div className="body-text">20 Nov 2023</div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* <!-- /orders --> */}
                {/* <!-- earnings --> */}
                <div className="wg-box">
                  <div className="flex items-center justify-between">
                    <h5>Earnings</h5>
                    <div className="dropdown default">
                      <button
                        className="btn btn-secondary dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <span className="icon-more">
                          <i className="icon-more-horizontal"></i>
                        </span>
                      </button>
                      <ul className="dropdown-menu dropdown-menu-end">
                        <li>
                          <Link to="javascript:void(0);">This Week</Link>
                        </li>
                        <li>
                          <Link to="javascript:void(0);">Last Week</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap40">
                    <div>
                      <div className="mb-2">
                        <div className="block-legend">
                          <div className="dot t1"></div>
                          <div className="text-tiny">Revenue</div>
                        </div>
                      </div>
                      <div className="flex items-center gap10">
                        <h4>$37,802</h4>
                        <div className="box-icon-trending up">
                          <i className="icon-trending-up"></i>
                          <div className="body-title number">0.56%</div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="mb-2">
                        <div className="block-legend">
                          <div className="dot t2"></div>
                          <div className="text-tiny">Profit</div>
                        </div>
                      </div>
                      <div className="flex items-center gap10">
                        <h4>$28,305</h4>
                        <div className="box-icon-trending up">
                          <i className="icon-trending-up"></i>
                          <div className="body-title number">0.56%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="line-chart-6"></div>
                </div>
                {/* <!-- /earnings --> */}
                {/* <!-- new-comment --> */}
                <div className="wg-box">
                  <div className="flex items-center justify-between">
                    <h5>New Comments</h5>
                    <div className="dropdown default">
                      <button
                        className="btn btn-secondary dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <span className="icon-more">
                          <i className="icon-more-horizontal"></i>
                        </span>
                      </button>
                      <ul className="dropdown-menu dropdown-menu-end">
                        <li>
                          <Link to="javascript:void(0);">This Week</Link>
                        </li>
                        <li>
                          <Link to="javascript:void(0);">Last Week</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <ul className="flex flex-column gap20 overflow-h">
                    <li className="comment-item">
                      <div className="image">
                        <img src="images/avatar/user-2.png" alt="" />
                      </div>
                      <div className="">
                        <div className="mb-4 name">
                          <Link to="all-user.html" className="body-title-2">
                            Kathryn Murphy
                          </Link>
                        </div>
                        <div className="ratings mb-10">
                          <i className="icon-star1 active"></i>
                          <i className="icon-star1 active"></i>
                          <i className="icon-star1 active"></i>
                          <i className="icon-star1 active"></i>
                          <i className="icon-star1"></i>
                        </div>
                        <div className="text-tiny">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Cras nec dolor vel est interdum
                        </div>
                      </div>
                    </li>
                    <li className="comment-item">
                      <div className="image">
                        <img src="images/avatar/user-3.png" alt="" />
                      </div>
                      <div className="">
                        <div className="mb-4 name">
                          <Link to="all-user.html" className="body-title-2">
                            Leslie Alexander
                          </Link>
                        </div>
                        <div className="ratings mb-10">
                          <i className="icon-star1 active"></i>
                          <i className="icon-star1 active"></i>
                          <i className="icon-star1 active"></i>
                          <i className="icon-star1 active"></i>
                          <i className="icon-star1"></i>
                        </div>
                        <div className="text-tiny">
                          Cras nec viverra justo, a mattis lacus. Vestibulum
                          eleifend, leo sit amet aliquam laoreet, turpis leo
                          vulputate orci
                        </div>
                      </div>
                    </li>
                    <li className="comment-item">
                      <div className="image">
                        <img src="images/avatar/user-4.png" alt="" />
                      </div>
                      <div className="">
                        <div className="mb-4 name">
                          <Link to="all-user.html" className="body-title-2">
                            Devon Lane
                          </Link>
                        </div>
                        <div className="ratings mb-10">
                          <i className="icon-star1 active"></i>
                          <i className="icon-star1 active"></i>
                          <i className="icon-star1 active"></i>
                          <i className="icon-star1 active"></i>
                          <i className="icon-star1"></i>
                        </div>
                        <div className="text-tiny">
                          Morbi eget commodo diam. Praesent dignissim purus ac
                          turpis porta
                        </div>
                      </div>
                    </li>
                    <li className="comment-item">
                      <div className="image">
                        <img src="images/avatar/user-5.png" alt="" />
                      </div>
                      <div className="">
                        <div className="mb-4 name">
                          <Link to="all-user.html" className="body-title-2">
                            Eleanor Pena
                          </Link>
                        </div>
                        <div className="ratings mb-10">
                          <i className="icon-star1 active"></i>
                          <i className="icon-star1 active"></i>
                          <i className="icon-star1 active"></i>
                          <i className="icon-star1 active"></i>
                          <i className="icon-star1"></i>
                        </div>
                        <div className="text-tiny">
                          Phasellus et eros ullamcorper, efficitur eros eget,
                          pharetra ante. Sed blandit risus vitae dolor feugiat,
                          eu vulputate elit rhoncus
                        </div>
                      </div>
                    </li>
                    <li className="comment-item">
                      <div className="image">
                        <img src="images/avatar/user-2.png" alt="" />
                      </div>
                      <div className="">
                        <div className="mb-4 name">
                          <Link to="all-user.html" className="body-title-2">
                            Kathryn Murphy
                          </Link>
                        </div>
                        <div className="ratings mb-10">
                          <i className="icon-star1 active"></i>
                          <i className="icon-star1 active"></i>
                          <i className="icon-star1 active"></i>
                          <i className="icon-star1 active"></i>
                          <i className="icon-star1"></i>
                        </div>
                        <div className="text-tiny">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Cras nec dolor vel est interdum
                        </div>
                      </div>
                    </li>
                    <li className="comment-item">
                      <div className="image">
                        <img src="images/avatar/user-3.png" alt="" />
                      </div>
                      <div className="">
                        <div className="mb-4 name">
                          <Link to="all-user.html" className="body-title-2">
                            Leslie Alexander
                          </Link>
                        </div>
                        <div className="ratings mb-10">
                          <i className="icon-star1 active"></i>
                          <i className="icon-star1 active"></i>
                          <i className="icon-star1 active"></i>
                          <i className="icon-star1 active"></i>
                          <i className="icon-star1"></i>
                        </div>
                        <div className="text-tiny">
                          Cras nec viverra justo, a mattis lacus. Vestibulum
                          eleifend, leo sit amet aliquam laoreet, turpis leo
                          vulputate orci
                        </div>
                      </div>
                    </li>
                    <li className="comment-item">
                      <div className="image">
                        <img src="images/avatar/user-4.png" alt="" />
                      </div>
                      <div className="">
                        <div className="mb-4 name">
                          <Link to="all-user.html" className="body-title-2">
                            Devon Lane
                          </Link>
                        </div>
                        <div className="ratings mb-10">
                          <i className="icon-star1 active"></i>
                          <i className="icon-star1 active"></i>
                          <i className="icon-star1 active"></i>
                          <i className="icon-star1 active"></i>
                          <i className="icon-star1"></i>
                        </div>
                        <div className="text-tiny">
                          Morbi eget commodo diam. Praesent dignissim purus ac
                          turpis porta
                        </div>
                      </div>
                    </li>
                    <li className="comment-item">
                      <div className="image">
                        <img src="images/avatar/user-5.png" alt="" />
                      </div>
                      <div className="">
                        <div className="mb-4 name">
                          <Link to="all-user.html" className="body-title-2">
                            Eleanor Pena
                          </Link>
                        </div>
                        <div className="ratings mb-10">
                          <i className="icon-star1 active"></i>
                          <i className="icon-star1 active"></i>
                          <i className="icon-star1 active"></i>
                          <i className="icon-star1 active"></i>
                          <i className="icon-star1"></i>
                        </div>
                        <div className="text-tiny">
                          Phasellus et eros ullamcorper, efficitur eros eget,
                          pharetra ante. Sed blandit risus vitae dolor feugiat,
                          eu vulputate elit rhoncus
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                {/* <!-- /new-comment --> */}
              </div>
            </div>
            {/* <!-- /main-content-wrap --> */}
          </div>
          {/* <!-- /main-content-wrap --> */}
          {/* <!-- bottom-page --> */}
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
          {/* <!-- /bottom-page --> */}
        </div>
      </Layout>
    </>
  );
};
export default Home;
