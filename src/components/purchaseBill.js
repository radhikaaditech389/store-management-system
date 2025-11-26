import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";
import axios from "axios";
import Layout from "./layout";
import { getCookie } from "../utils/cookies";
const PurchaseBill = () => {
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
      name: "Store Id",
      selector: (row) => row.store_id,
      sortable: true,
    },
    {
      name: "Branch Id",
      selector: (row) => row.branch_id,
      sortable: true,
    },
    {
      name: "Supplier Id",
      selector: (row) => row.supplier_id,
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

  const fetchPurchaseBill = async () => {
    try {
      await axios.get("http://localhost:8000/sanctum/csrf-cookie", {
        withCredentials: true,
      });
      const response = await axios.get("http://127.0.0.1:8000/api/purchase-bill", {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${user_data.token}`,
          "X-XSRF-TOKEN": getCookie("XSRF-TOKEN"),
        },
        withCredentials: true,
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
    const result = purchaseBill.filter((item) => {
      return Object.values(item)
        .join(" ")
        .toLowerCase()
        .includes(search.toLowerCase());
    });

    setFilteredData(result);
  }, [search, purchaseBill]);

  return (
    <Layout>
      <div className="main-content-inner">
        {/* <!-- main-content-wrap --> */}
        <div className="main-content-wrap">
          <div className="flex items-center flex-wrap justify-between gap20 mb-27">
            <h3>All Purchase Bill</h3>
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
            {/* <div className="flex items-center justify-between flex-wrap gap10">
                  <div className="text-tiny">Showing 10 entries</div>
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
                </div> */}
          </div>
          {/* <!-- /all-user --> */}
        </div>
        {/* <!-- /main-content-wrap --> */}
      </div>
    </Layout>
  );
};
export default PurchaseBill;
