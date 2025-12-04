import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import Layout from "./layout";
import { getCookie } from "../utils/cookies";
import { toast } from "react-toastify";


const Product = () => {
  const BASE_URL = process.env.REACT_APP_API_BASE_URL;
  const history = useHistory();
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState(products);
  const user_data = JSON.parse(localStorage.getItem("user_detail"));

  const handleEdit = (row) => {
    localStorage.setItem("product_detail", JSON.stringify(row));
  };

  const handleCreateProduct = () => {
    localStorage.setItem("product_detail", null);
  };

  const handleDelete = async (id) => {
    // await axios.get(`${BASE_URL}/sanctum/csrf-cookie`, {
    //   withCredentials: true,
    // });
    const response = await axios.delete(`${BASE_URL}/products/${id}`, {
      headers: {
        accept: "application/json",
        // "X-XSRF-TOKEN": getCookie("XSRF-TOKEN"),
        Authorization: `Bearer ${user_data.token}`,
      },
      // withCredentials: true,
    });
    if (response) {
      history.push("/product");
      toast.success("Product Deleted");
      fetchProduct();
    }
  };

  const columns = [
    {
      name: "Id",
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: "SKU",
      selector: (row) => row.sku,
      sortable: true,
    },
    {
      name: "Barcode",
      selector: (row) => row.barcode,
      sortable: true,
    },
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Brand Name",
      selector: (row) => row.brand.name,
      sortable: true,
    },
    {
      name: "Category Name",
      selector: (row) => row.category.name,
      sortable: true,
    },
    {
      name: "HSN Code",
      selector: (row) => row.hsn_code,
      sortable: true,
    },
    {
      name: "GST",
      selector: (row) => row.gst_rate.rate,
      sortable: true,
    },
    {
      name: "MRP",
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
      name: "Action",
      cell: (row) => (
        <div className="list-icon-function">
          <div className="item edit">
            <Link
              to={`/product/edit/${row.id}`}
              onClick={() => handleEdit(row)}
            >
              <i className="icon-edit-3"></i>
            </Link>
          </div>
          <div className="item trash" onClick={() => handleDelete(row.id)}>
            <i className="icon-trash-2"></i>
          </div>
        </div>
      ),
    },
  ];

  const fetchProduct = async () => {
    try {
      // await axios.get(`${BASE_URL}/sanctum/csrf-cookie`, {
      //   withCredentials: true,
      // });
      const response = await axios.get(`${BASE_URL}/products`, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${user_data.token}`,
          // "X-XSRF-TOKEN": getCookie("XSRF-TOKEN"),
        },
        // withCredentials: true,
      });
      setProducts(response.data.products);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };
  useEffect(() => {
    fetchProduct();
  }, []);
useEffect(() => {
  const text = search.toLowerCase();

  const result = products.filter((item) => {
    const searchString = `
      ${item.id}
      ${item.sku}
      ${item.barcode}
      ${item.name}
      ${item.brand?.name}
      ${item.category?.name}
      ${item.hsn_code}
      ${item.gst_rate?.rate}
      ${item.mrp}
      ${item.selling_price}
      ${item.cost_price}
    `.toLowerCase();

    return searchString.includes(text);
  });

  setFilteredData(result);
}, [search, products]);

  return (
    <Layout>
      <div className="main-content-inner">
        {/* <!-- main-content-wrap --> */}
        <div className="main-content-wrap">
          <div className="flex items-center flex-wrap justify-between gap20 mb-27">
            <h3>All Products</h3>
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
            <div className="flex items-center justify-between gap10 flex-wrap">
              <div className="wg-filter flex-grow"></div>
              <Link
                className="tf-button style-1 w208"
                to="/create-product"
                onClick={handleCreateProduct}
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
export default Product;
