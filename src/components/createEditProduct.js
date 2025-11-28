import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useLocation, useHistory } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { getCookie } from "../utils/cookies";
import Layout from "./layout";

const CreateEditProduct = () => {
  const { id } = useParams(); // if id exists -> Edit Mode
  const history = useHistory();

  const user_data = JSON.parse(localStorage.getItem("user_detail"));
  const store_product = localStorage.getItem("product_detail");

  const incomingProduct = store_product && JSON.parse(store_product);
  const isEdit = Boolean(id);

  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);
  const [initialValues, setInitialValues] = useState({
    sku: "",
    name: "",
    brand_id: "",
    category_id: "",
    hsn_code: "",
    gst_rate_id: "",
    mrp: "",
    selling_price: "",
    cost_price: "",
  });

  // Fetch brands
  const fetchBrands = async () => {
    const response = await axios.get("http://localhost:8000/api/brands", {
      headers: { Authorization: `Bearer ${user_data.token}` },
    });
    setBrands(response.data.brands);
  };

  // Fetch categories
  const fetchCategories = async () => {
    const response = await axios.get("http://localhost:8000/api/categories", {
      headers: { Authorization: `Bearer ${user_data.token}` },
    });
    setCategories(response.data.categories);
  };

  // If editing → set initial values
  const loadProductData = () => {
    if (incomingProduct) {
      setInitialValues({
        sku: incomingProduct.sku,
        name: incomingProduct.name,
        brand_id: incomingProduct.brand_id,
        category_id: incomingProduct.category_id,
        hsn_code: incomingProduct.hsn_code,
        gst_rate_id: incomingProduct.gst_rate_id,
        mrp: incomingProduct.mrp,
        selling_price: incomingProduct.selling_price,
        cost_price: incomingProduct.cost_price
      });
    }
  };

  useEffect(() => {
    fetchBrands();
    fetchCategories();
    loadProductData();
  }, []);

  // Validation Schema
  const validationSchema = Yup.object({
    sku: Yup.string().required("SKU is required"),
    name: Yup.string().required("Product Name is required"),
    brand_id: Yup.string().required("Brand is required"),
    category_id: Yup.string().required("Category is required"),
    hsn_code: Yup.string().required("HSN Code is required"),
    gst_rate_id: Yup.string().required("GST Rate required"),
    mrp: Yup.number().required("MRP required"),
    selling_price: Yup.number().required("Selling price required"),
    cost_price: Yup.number().required("Cost price required"),
  });

  // Submit (Create + Update)
  const handleSubmit = async (values) => {
    console.log("create data");
    try {
      await axios.get("http://localhost:8000/sanctum/csrf-cookie", {
        withCredentials: true,
      });

      let url = "";
      let method = "";

      if (isEdit) {
        // UPDATE PRODUCT
        url = `http://localhost:8000/api/products/${id}`;
        method = "put";
      } else {
        // CREATE PRODUCT
        url = `http://localhost:8000/api/products`;
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

      alert(isEdit ? "Product Updated!" : "Product Created!");
      history.push("/product");
      // navigate("/product");
    } catch (error) {
      console.error("Error saving product:", error);
    }
  };

  return (
    <Layout>
      <div className="main-content-inner">
        <div className="main-content-wrap">
          <h3 className="mb-8">{isEdit ? "Edit Product" : "Create Product"}</h3>

          <div className="wg-box">
            <Formik
              enableReinitialize
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {() => (
                <Form className="form-new-product form-style-1">
                  {/* SKU */}
                  <fieldset>
                    <div className="body-title">SKU *</div>
                    <div className="body-content">
                    <Field type="text" name="sku" className="mb-5" />
                    <ErrorMessage
                      name="sku"
                      className="error-text"
                      component="div"
                    />
                    </div>
                  </fieldset>

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

                  {/* Brand */}
                  <fieldset>
                    <div className="body-title">Brand *</div>
                   <div className="body-content">
                    <Field as="select" name="brand_id" className="mb-5">
                      <option value="">Select Brand</option>
                      {brands.map((b) => (
                        <option value={b.id} key={b.id}>
                          {b.name}
                        </option>
                      ))}
                    </Field>
                    <ErrorMessage
                      name="brand_id"
                      component="div"
                      className="error-text"
                    />
                    </div>
                  </fieldset>

                  {/* Category */}
                  <fieldset>
                    <div className="body-title">Category *</div>
                      <div className="body-content">
                    <Field as="select" name="category_id" className="mb-5">
                      <option value="">Select Category</option>
                      {categories.map((c) => (
                        <option value={c.id} key={c.id}>
                          {c.name}
                        </option>
                      ))}
                    </Field>
                    <ErrorMessage
                      name="category_id"
                      component="div"
                      className="error-text"
                    />
                    </div>
                  </fieldset>

                  {/* Other fields ... */}
                  {/* <fieldset>
                    <div className="body-title">GST Rate *</div>
                    <Field type="number" name="gst_rate_id" className="mb-2" />
                    <ErrorMessage
                      name="gst_rate_id"
                      component="div"
                      className="error-text"
                    />
                  </fieldset> */}

                  <fieldset>
                    <div className="body-title">Gst Rate Id *</div>
                     <div className="body-content">
                    <Field as="select" name="gst_rate_id" className="mb-5">
                      <option value="">Select Gst Rate Id</option>
                     <option value="1" key="1">1</option>
                      <option value="2" key="2">2</option>
                       <option value="3" key="3">3</option>
                    </Field>
                    <ErrorMessage
                      name="category_id"
                      component="div"
                      className="error-text"
                    />
                    </div>
                  </fieldset>
                  <fieldset>
                    <div className="body-title">MRP *</div>
                     <div className="body-content">
                    <Field type="number" name="mrp" className="mb-5" />
                    <ErrorMessage
                      name="mrp"
                      component="div"
                      className="error-text"
                    />
                    </div>
                  </fieldset>
                  <fieldset>
                    <div className="body-title">HSN *</div>
                     <div className="body-content">
                    <Field type="text" name="hsn_code" className="mb-5" />
                    <ErrorMessage
                      name="hsn_code"
                      className="error-text"
                      component="div"
                    />
                    </div>
                  </fieldset>

                  <fieldset>
                    <div className="body-title">Selling Price *</div>
                     <div className="body-content">
                    <Field
                      type="number"
                      name="selling_price"
                      className="mb-5"
                    />
                    <ErrorMessage
                      name="selling_price"
                      component="div"
                      className="error-text"
                    />
                   </div>
                  </fieldset>

                  <fieldset>
                    <div className="body-title">Cost Price *</div>
                    <div className="body-content">
                    <Field type="number" name="cost_price" className="mb-5" />
                    <ErrorMessage
                      name="cost_price"
                      component="div"
                      className="error-text"
                    />
                    </div>
                  </fieldset>

                  {/* SUBMIT BUTTON */}
                  <button className="tf-button w208" type="submit">
                    {isEdit ? "Update Product" : "Create Product"}
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

export default CreateEditProduct;
