import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";
import axios from "axios";
import Layout from "./layout";
import { getCookie } from "../utils/cookies";
const SaleBill = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState(products);
  const user_data = JSON.parse(localStorage.getItem("user_detail"));

  const columns = [
    {
      name: "Id",
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: "Store Name",
      selector: (row) => row.store.name,
      sortable: true,
    },
    {
      name: "sku",
      selector: (row) => row.sku,
      sortable: true,
    },
    {
      name: "barcode",
      selector: (row) => row.barcode,
      sortable: true,
    },
    {
      name: "name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "brand Name",
      selector: (row) => row.brand.name,
      sortable: true,
    },
    {
      name: "Category Name",
      selector: (row) => row.category.name,
      sortable: true,
    },
    {
      name: "Hsn Code",
      selector: (row) => row.hsn_code,
      sortable: true,
    },
    {
      name: "Gst Rate Id",
      selector: (row) => row.gst_rate_id,
      sortable: true,
    },
    {
      name: "mrp",
      selector: (row) => row.mrp,
      sortable: true,
    },
    {
      name: "Selling Price",
      selector: (row) => row.selling_price,
      sortable: true,
    },
    {
      name: "Cost Price",
      selector: (row) => row.cost_price,
      sortable: true,
    },
    {
      name: "Stock",
      selector: (row) => row.stock,
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

  const fetchSaleBill = async () => {
    try {
      await axios.get("http://localhost:8000/sanctum/csrf-cookie", {
        withCredentials: true,
      });
      const response = await axios.get("http://127.0.0.1:8000/api/products", {
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
  useEffect(() => {
    fetchSaleBill();
  }, []);
  useEffect(() => {
    const result = products.filter((item) => {
      return Object.values(item)
        .join(" ")
        .toLowerCase()
        .includes(search.toLowerCase());
    });

    setFilteredData(result);
  }, [search, products]);

  return (
    <Layout>
      <div className="main-content-inner">
        {/* <!-- main-content-wrap --> */}
        <div className="main-content-wrap">
          <div className="flex items-center flex-wrap justify-between gap20 mb-27">
            <h3>All Product</h3>
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
                  <div className="text-tiny">Product</div>
                </Link>
              </li>
              <li>
                <i className="icon-chevron-right"></i>
              </li>
              <li>
                <div className="text-tiny">All Product</div>
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
export default SaleBill;
