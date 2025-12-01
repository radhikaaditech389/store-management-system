import React, { useState, useEffect } from "react";
import Layout from "./layout";
import { Link, useHistory } from "react-router-dom";
import DataTable from "react-data-table-component";
import axios from "axios";
import { getCookie } from "../utils/cookies";

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

const GstRate = () => {
  const history = useHistory();
  const [search, setSearch] = useState("");
  const [gstRates, setGstRates] = useState([]);
  const [filteredData, setFilteredData] = useState(gstRates);
  const user_data = JSON.parse(localStorage.getItem("user_detail"));

  const fetchGstRate = async () => {
    try {
      await axios.get("http://localhost:8000/sanctum/csrf-cookie", {
        withCredentials: true,
      });
      const response = await axios.get(`${BASE_URL}/gst-rates`, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${user_data.token}`,
          "X-XSRF-TOKEN": getCookie("XSRF-TOKEN"),
        },
        withCredentials: true,
      });
      setGstRates(response.data.gstRates);
    } catch (error) {
      console.error("Error fetching gst Rates:", error);
    }
  };

  //   const handleCreateGstRates = () => {
  //     localStorage.setItem("gst_rate_detail", null);
  //   };

  const handleDelete = async (id) => {
    await axios.get("http://localhost:8000/sanctum/csrf-cookie", {
      withCredentials: true,
    });
    const response = await axios.delete(`${BASE_URL}/gst-rates/${id}`, {
      headers: {
        accept: "application/json",
        "X-XSRF-TOKEN": getCookie("XSRF-TOKEN"),
        Authorization: `Bearer ${user_data.token}`,
      },
      withCredentials: true,
    });
    if (response) {
      history.push("/gst-rates");
      fetchGstRate();
    }
  };
  useEffect(() => {
    fetchGstRate();
  }, []);

  useEffect(() => {
    const result = gstRates.filter((item) => {
      return Object.values(item)
        .join(" ")
        .toLowerCase()
        .includes(search.toLowerCase());
    });

    setFilteredData(result);
  }, [search, gstRates]);

  const columns = [
    {
      name: "Id",
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: "Store Name",
      selector: (row) => row?.store?.name,
      sortable: true,
    },
    {
      name: "rate",
      selector: (row) => row.rate,
      sortable: true,
    },
    {
      name: "Description",
      selector: (row) => row.description,
      sortable: true,
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
          <div className="wg-box">
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{
                marginBottom: "10px",
                padding: "8px",
                width: "250px",
              }}
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
