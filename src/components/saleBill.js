import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";
import axios from "axios";
import Layout from "./layout";
import { getCookie } from "../utils/cookies";

const SaleBill = () => {
  const BASE_URL = process.env.REACT_APP_API_BASE_URL;
  const [search, setSearch] = useState("");
  const [saleBills, setSaleBills] = useState([]);

  const [filteredData, setFilteredData] = useState(saleBills);
  const user_data = JSON.parse(localStorage.getItem("user_detail"));

  const columns = [
    {
      name: "Id",
      selector: (row) => row.id,
      sortable: true,
      width:"100px"
    },
    {
      name: "Branch Name",
      selector: (row) => row.branch.name,
      sortable: true,
    },
    {
      name: "User Name",
      selector: (row) => row.user.name,
      sortable: true,
    },
    {
      name: "Bill No",
      selector: (row) => row.bill_no,
      sortable: true,
    },
    {
      name: "Subtotal",
      selector: (row) => row.subtotal,
      sortable: true,
    },
    {
      name: "Total Gst",
      selector: (row) => row.total_gst,
      sortable: true,
    },
    {
      name: "Total Amount",
      selector: (row) => row?.total_amount,
      sortable: true,
    },
    {
      name: "Total Saved",
      selector: (row) => row.total_saved,
      sortable: true,
    },
    {
      name: "Total Cogs",
      selector: (row) => row.total_cogs,
      sortable: true,
    },
    {
      name: "Total Profit",
      selector: (row) => row.total_profit,
      sortable: true,
    },
    {
      name: "Cash Received",
      selector: (row) => row.cash_received,
      sortable: true,
    },
    {
      name: "Balance Return",
      selector: (row) => row.balance_return,
      sortable: true,
    },
    {
      name: "Payment Status",
      selector: (row) => row.payment_status,
      sortable: true,
    },
    {
      name: "Bill Status",
      selector: (row) => row.bill_status,
      sortable: true,
    },
    {
      name: "Created At",
      selector: (row) => row.created_at,
      sortable: true,
    },
  ];

  const fetchSaleBill = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/api/sales-bills`, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${user_data.token}`,
        },
      });
      setSaleBills(response.data.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    fetchSaleBill();
  }, []);

  useEffect(() => {
    const searchText = search.toLowerCase();

    const result = saleBills.filter((item) => {
      const formattedDate = new Date(item.created_at).toLocaleDateString('en-CA');
      const searchable = `
      ${item.id}
      ${item.store?.name}
      ${item.branch?.name}
      ${item.user?.name}
      ${item.bill_no}
      ${item.subtotal}
      ${item.total_gst}
      ${item.total_amount}
      ${item.total_saved}
      ${item.total_cogs}
      ${item.total_profit}
      ${item.cash_received}
      ${item.balance_return}
      ${item.payment_status}
      ${item.bill_status}
       ${formattedDate}
    `.toLowerCase();

      return searchable.includes(searchText);
    });

    setFilteredData(result);
  }, [search, saleBills]);

  return (
    <Layout>
      <div className="main-content-inner">
        {/* <!-- main-content-wrap --> */}
        <div className="main-content-wrap">
          <div className="flex items-center flex-wrap justify-between gap20 mb-27">
            <h3>All Sale Bills</h3>
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
                  <div className="text-tiny">Sale Bills</div>
                </Link>
              </li>
              <li>
                <i className="icon-chevron-right"></i>
              </li>
              <li>
                <div className="text-tiny">All Sale Bills</div>
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
export default SaleBill;
