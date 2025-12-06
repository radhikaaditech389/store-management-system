import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import Layout from "./layout";
import { getCookie } from "../utils/cookies";
import { toast } from "react-toastify";
const PurchaseBill = () => {
  const BASE_URL = process.env.REACT_APP_API_BASE_URL;
  const history = useHistory();
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [purchaseBill, setPurchaseBill] = useState([]);
  const [filteredData, setFilteredData] = useState(products);

  const user_data = JSON.parse(localStorage.getItem("user_detail"));
  const handleCreatePurchaseBills = () => {
    localStorage.setItem("purchase_bills_create", null);
  };
  const handleEdit = (row) => {
    localStorage.setItem("purchase_bills_create", JSON.stringify(row));
  };
 const handleDeleteConfirm = (id) => {
    if (window.confirm("Are you sure you want to delete this Purchase Bill?")) {
      handleDelete(id);
    }
  };
  const handleDelete = async (id) => {
    const response = await axios.delete(`${BASE_URL}/api/purchase-bill/${id}`, {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${user_data.token}`,
      },
    });
    if (response) {
      history.push("/purchase-bill");
      toast.success("Purchase Bill Deleted!");
      fetchPurchaseBill();
    }
  };
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
    {
      name: "Action",
      cell: (row) => (
        <div className="list-icon-function">
          <div className="item edit">
            <Link
              to={`/purchase-bill/edit/${row.id}`}
              onClick={() => handleEdit(row)}
            >
              <i className="icon-edit-3"></i>
            </Link>
          </div>
          <div className="item trash" onClick={() => handleDeleteConfirm(row.id)}>
            <i className="icon-trash-2"></i>
          </div>
        </div>
      ),
    },
  ];

  const fetchPurchaseBill = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/api/purchase-bill`, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${user_data.token}`,
        },
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
    const searchText = search.toLowerCase();

    const result = purchaseBill.filter((item) => {
      const searchable = `
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
      return searchable.includes(searchText);
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
            <div className="flex items-center justify-between gap10 flex-wrap">
              <div className="wg-filter flex-grow"></div>
              <Link
                className="tf-button style-1 w208"
                to="/create-purchase-bill"
                onClick={handleCreatePurchaseBills}
              >
                <i className="icon-plus"></i>Add new
              </Link>
            </div>
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="search-input"
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
export default PurchaseBill;
