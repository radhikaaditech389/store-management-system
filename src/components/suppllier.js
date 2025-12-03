import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";
import axios from "axios";
import Layout from "./layout";
import { getCookie } from "../utils/cookies";
const SupplierBill = () => {
  const [search, setSearch] = useState("");
  const [supplierBill, setSupplierBill] = useState([]);
  const [filteredData, setFilteredData] = useState(supplierBill);

  const user_data = JSON.parse(localStorage.getItem("user_detail"));

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
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Gstin",
      selector: (row) => row.gstin,
      sortable: true,
    },
    {
      name: "contact",
      selector: (row) => row.contact,
      sortable: true,
    },
    {
      name: "Address",
      selector: (row) => row.address,
      sortable: true,
    },
    {
      name: "State",
      selector: (row) => row.state,
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

  const fetchSupplierBill = async () => {
    try {
      await axios.get("http://localhost:8000/sanctum/csrf-cookie", {
        withCredentials: true,
      });
      const response = await axios.get("http://127.0.0.1:8000/api/suppliers", {
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
  useEffect(() => {
    fetchSupplierBill();
  }, []);

useEffect(() => {
  const searchText = search.toLowerCase();

  const result = supplierBill.filter((item) => {
    return (
      item.store?.name?.toLowerCase().includes(searchText) ||
      item.name?.toLowerCase().includes(searchText) ||
      String(item.gstin || "").toLowerCase().includes(searchText) ||
      String(item.contact || "").toLowerCase().includes(searchText) ||   // <-- CONTACT SEARCH
      item.address?.toLowerCase().includes(searchText) ||
      item.state?.toLowerCase().includes(searchText) ||
      item.description?.toLowerCase().includes(searchText)
    );
  });

  setFilteredData(result);
}, [search, supplierBill]);


  return (
    <Layout>
      <div className="main-content-inner">
        {/* <!-- main-content-wrap --> */}
        <div className="main-content-wrap">
          <div className="flex items-center flex-wrap justify-between gap20 mb-27">
            <h3>All suppliers</h3>
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
                  <div className="text-tiny">Supplier Bill</div>
                </Link>
              </li>
              <li>
                <i className="icon-chevron-right"></i>
              </li>
              <li>
                <div className="text-tiny">All Supplier Bill</div>
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
export default SupplierBill;
