import React, { useState, useEffect } from "react";
import Layout from "./layout";
import { Link, useHistory } from "react-router-dom";
import DataTable from "react-data-table-component";
import axios from "axios";
import { getCookie } from "../utils/cookies";
import { toast } from "react-toastify";

const Category = () => {
  const BASE_URL = process.env.REACT_APP_API_BASE_URL;

  const [search, setSearch] = useState("");
  const [categories, setCategories] = useState([]);
  const [filteredData, setFilteredData] = useState(categories);
  const user_data = JSON.parse(localStorage.getItem("user_detail"));
  const history = useHistory();

  const fetchCategory = async () => {
    try {
      // await axios.get(`${BASE_URL}/sanctum/csrf-cookie`, {
      //   withCredentials: true,
      // });
      const response = await axios.get(`${BASE_URL}/api/categories`, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${user_data.token}`,
          // "X-XSRF-TOKEN": getCookie("XSRF-TOKEN"),
        },
        // withCredentials: true,
      });
      setCategories(response.data.categories);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };
  useEffect(() => {
    fetchCategory();
  }, []);

  const handleDelete = async (id) => {
    // await axios.get(`${BASE_URL}/sanctum/csrf-cookie`, {
    //   withCredentials: true,
    // });
    const response = await axios.delete(`${BASE_URL}/api/categories/${id}`, {
      headers: {
        accept: "application/json",
        // "X-XSRF-TOKEN": getCookie("XSRF-TOKEN"),
        Authorization: `Bearer ${user_data.token}`,
      },
      // withCredentials: true,
    });
    if (response) {
      history.push("/category");
      toast.success("Category Deleted");
      fetchCategory();
    }
  };

  const columns = [
    {
      name: "Id",
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Description",
      selector: (row) => row.description,
      sortable: true,
    },
    {
      name: "Parent Category",
      selector: (row) => row?.parent?.name,
      sortable: true,
    },
    {
      name: "Action",
      cell: (row) => (
        <div className="list-icon-function">
          {/* <div className="item eye">
            <i className="icon-eye"></i>
          </div> */}
          <div className="item edit">
            <Link
              to={`/category/edit/${row.id}`}
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

  useEffect(() => {
    const searchText = search.toLowerCase();

    const result = categories.filter((item) => {
      return (
        item.store.name.toLowerCase().includes(searchText) ||
        item.name.toLowerCase().includes(searchText) ||
        item.description.toLowerCase().includes(searchText) ||
        item.parent?.name?.toLowerCase().includes(searchText)
      );
    });

    setFilteredData(result);
  }, [search, categories]);

  const handleCreateCategory = () => {
    localStorage.setItem("category_detail", null);
  };
  const handleEdit = (row) => {
    localStorage.setItem("category_detail", JSON.stringify(row));
  };
  return (
    <Layout>
      <div className="main-content-inner">
        {/* <!-- main-content-wrap --> */}
        <div className="main-content-wrap">
          <div className="flex items-center flex-wrap justify-between gap20 mb-27">
            <h3>All Categories</h3>
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
                  <div className="text-tiny">Category</div>
                </Link>
              </li>
              <li>
                <i className="icon-chevron-right"></i>
              </li>
              <li>
                <div className="text-tiny">All Category</div>
              </li>
            </ul>
          </div>
          {/* <!-- all-user --> */}
          <div className="wg-box">
            <div className="flex items-center justify-between gap10 flex-wrap">
              <div className="wg-filter flex-grow"></div>
              <Link
                className="tf-button style-1 w208"
                to="/create-category"
                onClick={handleCreateCategory}
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
export default Category;
