import React, { useState, useEffect } from "react";
import Layout from "./layout";
import { Link } from "react-router-dom";
import DataTable from "react-data-table-component";
import axios from "axios";
import { getCookie } from "../utils/cookies";

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

const GstRate = () => {
  const [search, setSearch] = useState("");
  const [gstRates, setGstRates] = useState([]);
  const [filteredData, setFilteredData] = useState(gstRates);
  const user_data = JSON.parse(localStorage.getItem("user_detail"));

  const fetchGstRate = async () => {
    try {
      // await axios.get(`${BASE_URL}/sanctum/csrf-cookie`, {
      //   withCredentials: true,
      // });
      const response = await axios.get(`${BASE_URL}/api/gst-rates`, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${user_data.token}`,
          // "X-XSRF-TOKEN": getCookie("XSRF-TOKEN"),
        },
        // withCredentials: true,
      });
      setGstRates(response.data.gstRates);
    } catch (error) {
      console.error("Error fetching gst Rates:", error);
    }
  };

  useEffect(() => {
    fetchGstRate();
  }, []);

  useEffect(() => {
    const searchText = search.toLowerCase();

    const result = gstRates.filter((item) => {
      return (
        item.rate.toLowerCase().includes(searchText) ||
        item.description.toLowerCase().includes(searchText)
      );
    });

    setFilteredData(result);
  }, [search, gstRates]);

  const columns = [
    {
      name: "Id",
      selector: (row) => row.id,
      sortable: true,
       width: "100px",   
    },
    {
      name: "rate",
      selector: (row) => row.rate,
      sortable: true,
       width: "150px",   
    },
    {
      name: "Description",
      selector: (row) => row.description,
      sortable: true,
       width: "250px",   
    },
    {
      name: "Active",
      selector: (row) => row.active,
      sortable: true,
    },
  ];

  return (
    <Layout>
      <div className="main-content-inner">
        {/* <!-- main-content-wrap --> */}
        <div className="main-content-wrap">
          <div className="flex items-center flex-wrap justify-between gap20 mb-27">
            <h3>All Gst Rates</h3>
            <ul className="breadcrumbs flex items-center flex-wrap justify-start gap10">
              <li>
                <Link to="/">
                  <div className="text-tiny">Dashboard</div>
                </Link>
              </li>
              <li>
                <i className="icon-chevron-right"></i>
              </li>
              <li>
                <Link to="#">
                  <div className="text-tiny">Gst Rates</div>
                </Link>
              </li>
              <li>
                <i className="icon-chevron-right"></i>
              </li>
              <li>
                <div className="text-tiny">All Gst Rates</div>
              </li>
            </ul>
          </div>
          {/* <!-- all-user --> */}
          <div className="wg-box wg-gst-content" style={{width:"60%"}}>
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="search-input"
            />
            <DataTable
              columns={columns}
              data={filteredData}
              pagination
              highlightOnHover
              pointerOnHover
              responsive
              customStyles={{
                headCells: {
                  style: {
                    fontWeight: "bold",
                    fontSize: "14px",
                  },
                },
              }}
            />
            <div className="divider"></div>
          </div>
          {/* <!-- /all-user --> */}
        </div>
        {/* <!-- /main-content-wrap --> */}
      </div>
    </Layout>
  );
};
export default GstRate;
