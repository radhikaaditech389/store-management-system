import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useLocation, useHistory } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { getCookie } from "../utils/cookies";
import Layout from "./layout";

const CreateEditBranch = () => {
  const { id } = useParams(); // if id exists -> Edit Mode
  const history = useHistory();

  const user_data = JSON.parse(localStorage.getItem("user_detail"));
  const store_branch = localStorage.getItem("branch_detail");

  const incomingBranch = store_branch && JSON.parse(store_branch);
  const isEdit = Boolean(id);

  const [initialValues, setInitialValues] = useState({
    name: "",
    address: "",
    phone: "",
     state: "",
  });

  // If editing → set initial values
  const loadBranchData = () => {
    if (incomingBranch) {
      setInitialValues({
        name: incomingBranch.name,
        address: incomingBranch.address,
        phone: incomingBranch.phone,
        state: incomingBranch.state,
      });
    }
  };

  useEffect(() => {
    loadBranchData();
  }, []);

  // Validation Schema
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    address: Yup.string().required("Address is required"),
    state: Yup.string().required("State is required"),
    phone: Yup.string().required("Phone is required"),
  });

  // Submit (Create + Update)
  const handleSubmit = async (values) => {
    try {
      await axios.get("http://localhost:8000/sanctum/csrf-cookie", {
        withCredentials: true,
      });

      let url = "";
      let method = "";

      if (isEdit) {
        // UPDATE PRODUCT
        url = `http://localhost:8000/api/branches/${id}`;
        method = "put";
      } else {
        // CREATE PRODUCT
        url = `http://localhost:8000/api/branches`;
        method = "post";
      }

      const response = await axios({
        method,
        url,
        data: values,
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${user_data.token}`,
          "X-XSRF-TOKEN": getCookie("XSRF-TOKEN"),
        },
        withCredentials: true,
      });

      alert(isEdit ? "Branch Updated!" : "Branch Created!");
      history.push("/branch");
    } catch (error) {
      console.error("Error saving product:", error);
    }
  };

  return (
    <Layout>
      <div className="main-content-inner">
        <div className="main-content-wrap">
          <h3 className="mb-8">{isEdit ? "Edit Branch" : "Create Branch"}</h3>

          <div className="wg-box">
            <Formik
              enableReinitialize
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {() => (
                <Form className="form-new-product form-style-1">
                  {/* Name */}
                  <fieldset>
                    <div className="body-title">Name *</div>
                    <div className="body-content">
                      <Field type="text" name="name" className="mb-5" />
                      <ErrorMessage
                        name="name"
                        className="error-text"
                        component="div"
                      />
                    </div>
                  </fieldset>
                  <fieldset>
                    <div className="body-title">Address *</div>
                    <div className="body-content">
                      <Field type="text" name="address" className="mb-5" />
                      <ErrorMessage
                        name="address"
                        className="error-text"
                        component="div"
                      />
                    </div>
                  </fieldset>

                  <fieldset>
                    <div className="body-title">State *</div>
                    <div className="body-content">
                      <Field type="text" name="state" className="mb-5" />
                      <ErrorMessage
                        name="state"
                        className="error-text"
                        component="div"
                      />
                    </div>
                  </fieldset>

                  <fieldset>
                    <div className="body-title">Phone *</div>
                    <div className="body-content">
                      <Field
                        type="text"
                        name="phone"
                        className="mb-5"
                        maxLength={10}
                      />
                      <ErrorMessage
                        name="phone"
                        className="error-text"
                        component="div"
                      />
                    </div>
                  </fieldset>

                  {/* SUBMIT BUTTON */}
                  <button className="tf-button w208" type="submit">
                    {isEdit ? "Update Branch" : "Create Branch"}
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CreateEditBranch;
