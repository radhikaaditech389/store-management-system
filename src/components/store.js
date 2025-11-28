import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";
import axios from "axios";
import Layout from "./layout";
import { getCookie } from "../utils/cookies";
const Store = () => {
  const [stores, setStores] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState(stores);
  const user_data = JSON.parse(localStorage.getItem("user_detail"))

  const columns = [
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Code",
      selector: (row) => row.code,
      sortable: true,
    },
    {
      name: "Address",
      selector: (row) => row.address,
      sortable: true,
    },
    {
      name: "Phone",
      selector: (row) => row.phone,
      sortable: true,
    },
    {
      name: "Action",
      cell: (row) => (
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
      ),
    },
  ];

  const fetchStore = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/stores", {
        headers: {
          accept: "application/json",
           Authorization: `Bearer ${user_data.token}`,
        },
        withCredentials: true,
      });
      setStores(response.data.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };
  useEffect(() => {
    fetchStore();
  }, []);
  useEffect(() => {
    const result = stores.filter((item) => {
      return Object.values(item)
        .join(" ")
        .toLowerCase()
        .includes(search.toLowerCase());
    });

    setFilteredData(result);
  }, [search, stores]);

  return (
    <Layout>
        <div className="main-content-inner">
          {/* <!-- main-content-wrap --> */}
          <div className="main-content-wrap">
            <div className="flex items-center flex-wrap justify-between gap20 mb-27">
              <h3>All Stores</h3>
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
                    <div className="text-tiny">Store</div>
                  </Link>
                </li>
                <li>
                  <i className="icon-chevron-right"></i>
                </li>
                <li>
                  <div className="text-tiny">All Store</div>
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
export default Store;
