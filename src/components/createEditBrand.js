import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useLocation, useHistory } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { getCookie } from "../utils/cookies";
import Layout from "./layout";

const CreateEditBrand = () => {
  const { id } = useParams(); // if id exists -> Edit Mode
  const history = useHistory();

  const user_data = JSON.parse(localStorage.getItem("user_detail"));
  const store_brand = localStorage.getItem("brand_detail");

  const incomingBrand = store_brand && JSON.parse(store_brand);
  const isEdit = Number(id);

  const [initialValues, setInitialValues] = useState({
    name: "",
    description: "",
  });

  // If editing → set initial values
  const loadBrandData = () => {
    if (incomingBrand) {
      setInitialValues({
        name: incomingBrand.name,
        description: incomingBrand.description
      });
    }
  };

  useEffect(() => {
    loadBrandData();
  }, []);

  // Validation Schema
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    description: Yup.string().required("Description is required"),
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
        url = `http://localhost:8000/api/brands/${id}`;
        method = "put";
      } else {
        // CREATE PRODUCT
        url = `http://localhost:8000/api/brands`;
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

      alert(isEdit ? "Brand Updated!" : "Brand Created!");
      history.push("/brand");
    } catch (error) {
      console.error("Error saving product:", error);
    }
  };

  return (
    <Layout>
      <div className="main-content-inner">
        <div className="main-content-wrap">
          <h3 className="mb-8">{isEdit ? "Edit Brand" : "Create Brand"}</h3>

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
                    <div className="body-title">Description *</div>
                    <div className="body-content">
                      <Field type="text" name="description" className="mb-5" />
                      <ErrorMessage
                        name="description"
                        className="error-text"
                        component="div"
                      />
                    </div>
                  </fieldset>

                  {/* SUBMIT BUTTON */}
                  <button className="tf-button w208" type="submit">
                    {isEdit ? "Update Brand" : "Create Brand"}
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

export default CreateEditBrand;
