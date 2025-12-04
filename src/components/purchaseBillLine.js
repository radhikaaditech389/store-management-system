import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";
import axios from "axios";
import Layout from "./layout";
import { getCookie } from "../utils/cookies";
const PurchaseBillLine = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [purchaseBill, setPurchaseBill] = useState([]);
  const [filteredData, setFilteredData] = useState(products);
  
  const user_data = JSON.parse(localStorage.getItem("user_detail"));

  const columns = [
    {
      name: "Id",
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: "Branch Name",
      selector: (row) => row.branch.name,
      sortable: true,
    },
    {
      name: "Supplier Name",
      selector: (row) => row.supplier.name,
      sortable: true,
    },
    {
      name: "Bill No",
      selector: (row) => row.bill_no,
      sortable: true,
    },
    {
      name: "Bill Date",
      selector: (row) => row.bill_date,
      sortable: true,
    },
    {
      name: "taxableValue",
      selector: (row) => row.taxable_value,
      sortable: true,
    },
    {
      name: "Cgst Amount",
      selector: (row) => row.cgst_amount,
      sortable: true,
    },
    {
      name: "Sgst Amount",
      selector: (row) => row.sgst_amount,
      sortable: true,
    },
    {
      name: "Igst Amount",
      selector: (row) => row.igst_amount,
      sortable: true,
    },
    {
      name: "Cess Amount",
      selector: (row) => row.cess_amount,
      sortable: true,
    },
    {
      name: "Total Tax",
      selector: (row) => row.total_tax,
      sortable: true,
    },
    {
      name: "Total Amount",
      selector: (row) => row.total_amount,
      sortable: true,
    },   
  ];

  const fetchPurchaseBill = async () => {
    try {
      // await axios.get(`${BASE_URL}/sanctum/csrf-cookie`, {
      //   withCredentials: true,
      // });
      const response = await axios.get(`${BASE_URL}/purchase-bill`, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${user_data.token}`,
          // "X-XSRF-TOKEN": getCookie("XSRF-TOKEN"),
        },
        // withCredentials: true,
      });
      setPurchaseBill(response.data.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };
  useEffect(() => {
    fetchPurchaseBill();
  }, []);
  
useEffect(() => {
  const lower = search.toLowerCase();

  const result = purchaseBill.filter((item) => {
    const searchableText = `
      ${item.id}
      ${item.branch?.name}
      ${item.supplier?.name}
      ${item.bill_no}
      ${item.bill_date}
      ${item.taxable_value}
      ${item.cgst_amount}
      ${item.sgst_amount}
      ${item.igst_amount}
      ${item.cess_amount}
      ${item.total_tax}
      ${item.total_amount}
    `.toLowerCase();

    return searchableText.includes(lower);
  });

  setFilteredData(result);
}, [search, purchaseBill]);


  return (
    <Layout>
      <div className="main-content-inner">
        {/* <!-- main-content-wrap --> */}
        <div className="main-content-wrap">
          <div className="flex items-center flex-wrap justify-between gap20 mb-27">
            <h3>All Purchase Bills</h3>
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
                  <div className="text-tiny">Purchase Bill</div>
                </Link>
              </li>
              <li>
                <i className="icon-chevron-right"></i>
              </li>
              <li>
                <div className="text-tiny">All Purchase Bill</div>
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
export default PurchaseBillLine;
