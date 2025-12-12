import React, { useState, useEffect } from "react";
import Layout from "./layout";
import { Link, useHistory } from "react-router-dom";
import DataTable from "react-data-table-component";
import axios from "axios";
import { getCookie } from "../utils/cookies";
import { toast } from "react-toastify";

const Branch = () => {
  const BASE_URL = process.env.REACT_APP_API_BASE_URL;

  const history = useHistory();
  const [search, setSearch] = useState("");
  const [branches, setBranches] = useState([]);
  const [filteredData, setFilteredData] = useState(branches);
  const user_data = JSON.parse(localStorage.getItem("user_detail"));

  const fetchBranch = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/api/branches`, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${user_data.token}`,
        },
      });
      setBranches(response.data.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };
  useEffect(() => {
    fetchBranch();
  }, []);

  const handleCreateBranch = () => {
    localStorage.setItem("branch_detail", null);
  };
  const handleEdit = (row) => {
    localStorage.setItem("branch_detail", JSON.stringify(row));
  };
 const handleDeleteConfirm = (id) => {
    if (window.confirm("Are you sure you want to delete this branch?")) {
      handleDelete(id);
    }
  };
  const handleDelete = async (id) => {
    const response = await axios.delete(`${BASE_URL}/branches/${id}`, {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${user_data.token}`,
      },
    });
    if (response) {
      history.push("/branch");
       toast.success("Branch Deleted");
      fetchBranch();
    }
  };

  useEffect(() => {
  const s = search.toLowerCase();

  const result = branches.filter((item) => {
    return (
      item.id.toString().includes(s) ||
      item.name?.toLowerCase().includes(s) ||
      item.address?.toLowerCase().includes(s) ||
      item.state?.toLowerCase().includes(s) ||
      item.phone?.toString().includes(s)
    );
  });

  setFilteredData(result);
}, [search, branches]);

  const columns = [
    {
      name: "Id",
      selector: (row) => row.id,
      sortable: true,
      width:"100px"
    },
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
       width:"200px"
    },
    {
      name: "Address",
      selector: (row) => row.address,
      sortable: true,
       width:"300px"
    },
    {
      name: "State",
      selector: (row) => row.state,
      sortable: true,
       width:"200px"
    },
    {
      name: "Phone",
      selector: (row) => row.phone,
      sortable: true,
       width:"200px"
    },
    {
      name: "Action",
      cell: (row) => (
        <div className="list-icon-function">
          <div className="item edit">
            <Link to={`/branch/edit/${row.id}`} onClick={() => handleEdit(row)}>
              <i className="icon-edit-3"></i>
            </Link>
          </div>
          <div className="item trash"  onClick={() => handleDeleteConfirm(row.id)}>
            <i className="icon-trash-2"></i>
          </div>
        </div>
      ),
    },
  ];

  return (
    <Layout>
      <div className="main-content-inner">
        {/* <!-- main-content-wrap --> */}
        <div className="main-content-wrap">
          <div className="flex items-center flex-wrap justify-between gap20 mb-27">
            <h3>All Branches</h3>
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
                  <div className="text-tiny">Branch</div>
                </Link>
              </li>
              <li>
                <i className="icon-chevron-right"></i>
              </li>
              <li>
                <div className="text-tiny">All Branch</div>
              </li>
            </ul>
          </div>
          {/* <!-- all-user --> */}
          <div className="wg-box wg-content">
            <div className="flex items-center justify-between gap10 flex-wrap">
              <div className="wg-filter flex-grow"></div>
              <Link
                className="tf-button style-1 w208"
                to="/create-branch"
                onClick={handleCreateBranch}
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
export default Branch;
