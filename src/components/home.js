import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "./layout";
import axios from "axios";
import { getCookie } from "../utils/cookies";

const Home = () => {
  const BASE_URL = process.env.REACT_APP_API_BASE_URL;
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [branchs, setBranchs] = useState([]);
  const [supplierBill, setSupplierBill] = useState([]);
  const [products, setProducts] = useState([]);
  const [staffs, setStaffs] = useState([]);
    const [gstRates, setGstRates] = useState([]);
    const [purchaseBills, setPurchaseBills] = useState([]);
     const [saleBills, setSaleBills] = useState([]);
    
  
  const user_data = JSON.parse(localStorage.getItem("user_detail"));
  const role = user_data?.user?.role;
  const fetchCategory = async () => {
    try {
      await axios.get(`${BASE_URL}/sanctum/csrf-cookie`, {
        withCredentials: true,
      });
      const response = await axios.get(`${BASE_URL}/api/categories`, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${user_data.token}`,
          "X-XSRF-TOKEN": getCookie("XSRF-TOKEN"),
        },
        withCredentials: true,
      });
      setCategories(response.data.categories);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };
  const fetchBrand = async () => {
    try {
      await axios.get(`${BASE_URL}/sanctum/csrf-cookie`, {
        withCredentials: true,
      });
      const response = await axios.get(`${BASE_URL}/api/brands`, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${user_data.token}`,
          "X-XSRF-TOKEN": getCookie("XSRF-TOKEN"),
        },
        withCredentials: true,
      });
      setBrands(response.data.brands);
    } catch (error) {
      console.error("Error fetching brands:", error);
    }
  };
  const fetchBrach = async () => {
    try {
      await axios.get(`${BASE_URL}/sanctum/csrf-cookie`, {
        withCredentials: true,
      });
      const response = await axios.get(`${BASE_URL}/api/branches`, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${user_data.token}`,
          "X-XSRF-TOKEN": getCookie("XSRF-TOKEN"),
        },
        withCredentials: true,
      });
      setBranchs(response.data.data);
    } catch (error) {
      console.error("Error fetching branchs:", error);
    }
  };
  const fetchSupplierBill = async () => {
    try {
      await axios.get(`${BASE_URL}/sanctum/csrf-cookie`, {
        withCredentials: true,
      });
      const response = await axios.get(`${BASE_URL}/api/suppliers`, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${user_data.token}`,
          "X-XSRF-TOKEN": getCookie("XSRF-TOKEN"),
        },
        withCredentials: true,
      });
      setSupplierBill(response.data.suppliers);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };
  const fetchProduct = async () => {
    try {
      await axios.get(`${BASE_URL}/sanctum/csrf-cookie`, {
        withCredentials: true,
      });
      const response = await axios.get(`${BASE_URL}/api/products`, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${user_data.token}`,
          "X-XSRF-TOKEN": getCookie("XSRF-TOKEN"),
        },
        withCredentials: true,
      });
      setProducts(response.data.products);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };
  const fetchStaff = async () => {
    try {
      await axios.get(`${BASE_URL}/sanctum/csrf-cookie`, {
        withCredentials: true,
      });
      const response = await axios.get(`${BASE_URL}/api/staff`, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${user_data.token}`,
          "X-XSRF-TOKEN": getCookie("XSRF-TOKEN"),
        },
        withCredentials: true,
      });
      setStaffs(response.data.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };
  const fetchGstRate = async () => {
    try {
      await axios.get(`${BASE_URL}/sanctum/csrf-cookie`, {
        withCredentials: true,
      });
      const response = await axios.get(`${BASE_URL}/api/gst-rates`, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${user_data.token}`,
          "X-XSRF-TOKEN": getCookie("XSRF-TOKEN"),
        },
        withCredentials: true,
      });
      setGstRates(response.data.gstRates);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };
  const fetchPurchaseBills = async () => {
    try {
      await axios.get(`${BASE_URL}/sanctum/csrf-cookie`, {
        withCredentials: true,
      });
      const response = await axios.get(`${BASE_URL}/api/purchase-bill`, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${user_data.token}`,
          "X-XSRF-TOKEN": getCookie("XSRF-TOKEN"),
        },
        withCredentials: true,
      });
      setPurchaseBills(response.data.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };
   const fetchSaleBills = async () => {
    try {
      await axios.get(`${BASE_URL}/sanctum/csrf-cookie`, {
        withCredentials: true,
      });
      const response = await axios.get(`${BASE_URL}/api/sales-bills`, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${user_data.token}`,
          "X-XSRF-TOKEN": getCookie("XSRF-TOKEN"),
        },
        withCredentials: true,
      });
      setSaleBills(response.data.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };
  useEffect(() => {
    fetchCategory();
    fetchBrand();
    fetchSupplierBill();
    fetchProduct();
    fetchBrach();
    fetchStaff();
    fetchGstRate();
    fetchPurchaseBills();
    fetchSaleBills();
  }, []);

  return (
    <>
      <Layout>
        <div className="main-content-inner">
          {/* <!-- main-content-wrap --> */}
          <div className="main-content-wrap">
            <div className="tf-section-4 mb-30">
              {/* <!-- chart-default --> */}
               {role === "manager" && (
                <>
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
                      <i className="icon-layers"></i>
                    </div>
                    <div>
                      <div className="body-text mb-2">Total Categories</div>
                      <h4>{categories.length}</h4>
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
                      <i className="icon-book"></i>
                    </div>
                    <div>
                      <div className="body-text mb-2">Total Brands</div>
                      <h4>{brands.length}</h4>
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
                      <i className="icon-bookmark"></i>
                    </div>
                    <div>
                      <div className="body-text mb-2">Total Suppliers</div>
                      <h4>{supplierBill.length}</h4>
                    </div>
                  </div>
                  <div className="box-icon-trending">
                    <i className="icon-bookmark"></i>
                    <div className="body-title number">0.00%</div>
                  </div>
                </div>
                <div className="wrap-chart">
                  <div id="line-chart-3"></div>
                </div>
              </div>
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
                          fill="#070606b4"
                        />
                      </svg>
                      <i className="icon-folder"></i>
                    </div>
                    <div>
                      <div className="body-text mb-2">Total Gst Rates</div>
                      <h4>{gstRates.length}</h4>
                    </div>
                  </div>
                  <div className="box-icon-trending">
                    <i className="icon-bookmark"></i>
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
                      <div className="body-text mb-2">Total Products</div>
                      <h4>{products.length}</h4>
                    </div>
                  </div>
                  <div className="box-icon-trending up">
                    <i className="icon-cast"></i>
                    <div className="body-title number">1.56%</div>
                  </div>
                </div>
                <div className="wrap-chart">
                  <div id="line-chart-4"></div>
                </div>
              </div>
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
                          fill="#fc2359ff"
                        />
                      </svg>
                      <i className="icon-users"></i>
                    </div>
                    <div>
                      <div className="body-text mb-2">Total Purchase Bills</div>
                      <h4>{purchaseBills.length}</h4>
                    </div>
                  </div>
                  <div className="box-icon-trending up">
                    <i className="icon-cast"></i>
                    <div className="body-title number">1.56%</div>
                  </div>
                </div>
                <div className="wrap-chart">
                  <div id="line-chart-4"></div>
                </div>
              </div>
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
                          fill="#23fc6bff"
                        />
                      </svg>
                      <i className="icon-users"></i>
                    </div>
                    <div>
                      <div className="body-text mb-2">Total Sale Bills</div>
                      <h4>{saleBills.length}</h4>
                    </div>
                  </div>
                  <div className="box-icon-trending up">
                    <i className="icon-cast"></i>
                    <div className="body-title number">1.56%</div>
                  </div>
                </div>
                <div className="wrap-chart">
                  <div id="line-chart-4"></div>
                </div>
              </div>
              </>
               )}
              {role === "admin" && (
                <>
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
                          <i className="icon-shopping-bag"></i>
                        </div>
                        <div>
                          <div className="body-text mb-2">Total Branches</div>
                          <h4>{branchs.length}</h4>
                        </div>
                      </div>
                      <div className="box-icon-trending up">
                        <i className="icon-cast"></i>
                        <div className="body-title number">1.56%</div>
                      </div>
                    </div>
                    <div className="wrap-chart">
                      <div id="line-chart-4"></div>
                    </div>
                  </div>
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
                          <i className="icon-edit"></i>
                        </div>
                        <div>
                          <div className="body-text mb-2">Total Staff</div>
                          <h4>{staffs.length}</h4>
                        </div>
                      </div>
                      <div className="box-icon-trending up">
                        <i className="icon-cast"></i>
                        <div className="body-title number">1.56%</div>
                      </div>
                    </div>
                    <div className="wrap-chart">
                      <div id="line-chart-4"></div>
                    </div>
                  </div>
                </>
              )}
              {/* <!-- /chart-default --> */}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};
export default Home;
