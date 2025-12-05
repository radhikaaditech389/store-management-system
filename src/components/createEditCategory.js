import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useLocation, useHistory } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { getCookie } from "../utils/cookies";
import Layout from "./layout";
import { toast } from "react-toastify";

const CreateEditCategory = () => {
  const BASE_URL = process.env.REACT_APP_API_BASE_URL;
  const { id } = useParams(); // if id exists -> Edit Mode
  const history = useHistory();

  const user_data = JSON.parse(localStorage.getItem("user_detail"));
  const store_category = localStorage.getItem("category_detail");

  const incomingCategory = store_category && JSON.parse(store_category);
  const isEdit = Boolean(id);

  const [initialValues, setInitialValues] = useState({
    name: "",
    description: "",
    parent_id: "",
  });

  const [categories, setCategories] = useState([]);

  // If editing → set initial values
  const loadCategoryData = () => {
    if (incomingCategory) {
      setInitialValues({
        name: incomingCategory.name,
        description: incomingCategory.description,
        parent_id: incomingCategory.parent_id,
      });
    }
  };

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
    loadCategoryData();
    fetchCategory();
  }, []);

  // Validation Schema
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    description: Yup.string().required("Description is required"),
    // parent_id: Yup.string().required("Parent Id is required"),
  });

  // Submit (Create + Update)
  const handleSubmit = async (values) => {
    try {
      // await axios.get(`${BASE_URL}/sanctum/csrf-cookie`, {
      //   withCredentials: true,
      // });

      let url = "";
      let method = "";

      if (isEdit) {
        // UPDATE PRODUCT
        url = `${BASE_URL}/api/categories/${id}`;
        method = "put";
      } else {
        // CREATE PRODUCT
        url = `${BASE_URL}/api/categories`;
        method = "post";
      }

      const response = await axios({
        method,
        url,
        data: values,
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${user_data.token}`,
          // "X-XSRF-TOKEN": getCookie("XSRF-TOKEN"),
        },
        // withCredentials: true,
      });
      toast.success(isEdit ? "Category Updated!" : "Category Created!");
      // alert(isEdit ? "Category Updated!" : "Category Created!");
      history.push("/category");
    } catch (error) {
      console.error("Error saving product:", error);
    }
  };

  return (
    <Layout>
      <div className="main-content-inner">
        <div className="main-content-wrap">
          <h3 className="mb-8">
            {isEdit ? "Edit Category" : "Create Category"}
          </h3>

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
                  <fieldset>
                    <div className="body-title">Parent Categories *</div>
                    <div className="body-content">
                      <Field as="select" name="parent_id" className="mb-5">
                        <option value="">Select Parent Category</option>
                        {categories.map((c) => (
                          <option value={c.id} key={c.id}>
                            {c.name}
                          </option>
                        ))}
                      </Field>
                      {/* <ErrorMessage
                        name="parent_id"
                        className="error-text"
                        component="div"
                      /> */}
                    </div>
                  </fieldset>

                  {/* SUBMIT BUTTON */}
                  <button className="tf-button w208" type="submit">
                    {isEdit ? "Update Category" : "Create Category"}
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

export default CreateEditCategory;
