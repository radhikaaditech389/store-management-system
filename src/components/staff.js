import React, { useState, useEffect } from "react";
import Layout from "./layout";
import { Link, useHistory } from "react-router-dom";
import DataTable from "react-data-table-component";
import axios from "axios";
import { getCookie } from "../utils/cookies";

const Staff = () => {
  const history = useHistory();
  const [search, setSearch] = useState("");
  const [staffs, setStaffs] = useState([]);
  const [filteredData, setFilteredData] = useState(staffs);
  const user_data = JSON.parse(localStorage.getItem("user_detail"));

  const fetchStaff = async () => {
    try {
      await axios.get("http://localhost:8000/sanctum/csrf-cookie", {
        withCredentials: true,
      });
      const response = await axios.get("http://localhost:8000/api/staff", {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${user_data.token}`,
          "X-XSRF-TOKEN": getCookie("XSRF-TOKEN"),
        },
        withCredentials: true,
      });
      setStaffs(response.data.data);
    } catch (error) {
      console.error("Error fetching staffs:", error);
    }
  };

//   const handleCreateStaff = () => {
//     localStorage.setItem("brand_detail", null);
//   };
//   const handleEdit = (row) => {
//     localStorage.setItem("brand_detail", JSON.stringify(row));
//   };

//   const handleDelete = async (id) => {
//     await axios.get("http://localhost:8000/sanctum/csrf-cookie", {
//       withCredentials: true,
//     });
//     const response = await axios.delete(
//       `http://localhost:8000/api/brands/${id}`,
//       {
//         headers: {
//           accept: "application/json",
//           "X-XSRF-TOKEN": getCookie("XSRF-TOKEN"),
//           Authorization: `Bearer ${user_data.token}`,
//         },
//         withCredentials: true,
//       }
//     );
//     if (response) {
//       history.push("/brand");
//       fetchBrand();
//     }
//   };
  useEffect(() => {
    fetchStaff();
  }, []);

  useEffect(() => {
    const result = staffs.filter((item) => {
      return Object.values(item)
        .join(" ")
        .toLowerCase()
        .includes(search.toLowerCase());
    });

    setFilteredData(result);
  }, [search, staffs]);

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
      name: "username",
      selector: (row) => row.username,
      sortable: true,
    },
     {
      name: "role",
      selector: (row) => row.role,
      sortable: true,
    },
    // {
    //   name: "Action",
    //   cell: (row) => (
    //     <div className="list-icon-function">
    //       <div className="item edit">
    //         <Link to={`/brand/edit/${row.id}`} onClick={() => handleEdit(row)}>
    //           <i className="icon-edit-3"></i>
    //         </Link>
    //       </div>
    //       <div className="item trash" onClick={() => handleDelete(row.id)}>
    //         <i className="icon-trash-2"></i>
    //       </div>
    //     </div>
    //   ),
    // },
  ];

  return (
    <Layout>
      <div className="main-content-inner">
        {/* <!-- main-content-wrap --> */}
        <div className="main-content-wrap">
          <div className="flex items-center flex-wrap justify-between gap20 mb-27">
            <h3>All Brands</h3>
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
                  <div className="text-tiny">Brand</div>
                </Link>
              </li>
              <li>
                <i className="icon-chevron-right"></i>
              </li>
              <li>
                <div className="text-tiny">All Brand</div>
              </li>
            </ul>
          </div>
          {/* <!-- all-user --> */}
          <div className="wg-box">
            {/* <div className="flex items-center justify-between gap10 flex-wrap">
              <div className="wg-filter flex-grow"></div>
              <Link
                className="tf-button style-1 w208"
                to="/create-brand"
                onClick={handleCreateBrand}
              >
                <i className="icon-plus"></i>Add new
              </Link>
            </div> */}
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
export default Staff;
