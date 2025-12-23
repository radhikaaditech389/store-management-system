import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useLocation, useHistory } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { getCookie } from "../utils/cookies";
import Layout from "./layout";
import { toast } from "react-toastify";

const CreateEditProduct = () => {
  const BASE_URL = process.env.REACT_APP_API_BASE_URL;
  const { id } = useParams(); // if id exists -> Edit Mode
  const history = useHistory();

  const user_data = JSON.parse(localStorage.getItem("user_detail"));
  const store_product = localStorage.getItem("product_detail");

  const incomingProduct = store_product && JSON.parse(store_product);
  const isEdit = Boolean(id);

  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);
  const [gstRates, setGstRates] = useState([]);
  const [categoryId, setCategoryId] = useState("");
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const [newCategory, setNewCategory] = useState("");
    const [brandId, setBrandId] = useState("");
  const [showBrandModel, setShowBrandModel] = useState(false);
  const [newBrand, setNewBrand] = useState("");
  const [error, setError] = useState("");

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
    const response = await axios.get(`${BASE_URL}/api/brands`, {
      headers: { Authorization: `Bearer ${user_data.token}` },
    });
    setBrands(response.data.brands);
  };
  const fetchGstRates = async () => {
    const response = await axios.get(`${BASE_URL}/api/gst-rates`, {
      headers: { Authorization: `Bearer ${user_data.token}` },
    });
    setGstRates(response.data.gstRates);
  };

  // Fetch categories
  const fetchCategories = async () => {
    const response = await axios.get(`${BASE_URL}/api/categories`, {
      headers: { Authorization: `Bearer ${user_data.token}` },
    });
    setCategories(response.data.categories);
  };

  // If editing → set initial values
  const loadProductData = () => {
    if (incomingProduct) {
       setBrandId(incomingProduct.brand_id);
       setCategoryId(incomingProduct.category_id);
      setInitialValues({
        sku: incomingProduct.sku,
        name: incomingProduct.name,
        brand_id: incomingProduct.brand_id,
        category_id: incomingProduct.category_id,
        hsn_code: incomingProduct.hsn_code,
        gst_rate_id: incomingProduct.gst_rate_id,
        mrp: incomingProduct.mrp,
        selling_price: incomingProduct.selling_price,
        cost_price: incomingProduct.cost_price,
      });
    }
  };

  useEffect(() => {
    fetchBrands();
    fetchCategories();
    loadProductData();
    fetchGstRates();
  }, []);

  // Validation Schema
  const validationSchema = Yup.object({
    // sku: Yup.string().required("SKU is required"),
    name: Yup.string().required("Product Name is required"),
    // brand_id: Yup.string().required("Brand is required"),
    // category_id: Yup.string().required("Category is required"),
    // hsn_code: Yup.string().required("HSN Code is required"),
    // gst_rate_id: Yup.string().required("GST Rate required"),
    // mrp: Yup.number().required("MRP required"),
    // selling_price: Yup.number().required("Selling price required"),
    // cost_price: Yup.number().required("Cost price required"),
  });

  // Submit (Create + Update)
  const handleSubmit = async (values) => {
    try {
      let url = "";
      let method = "";

      if (isEdit) {
        // UPDATE PRODUCT
        url = `${BASE_URL}/api/products/${id}`;
        method = "put";
      } else {
        // CREATE PRODUCT
        url = `${BASE_URL}/api/products`;
        method = "post";
      }

      const response = await axios({
        method,
        url,
        data: values,
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${user_data.token}`,
        },
      });
      toast.success(isEdit ? "Product Updated!" : "Product Created!");
      history.push("/product");
    } catch (error) {
      console.error("Error saving product:", error);
    }
  };

  const saveCategory = async (e) => {
    e.preventDefault();
    if (newCategory.trim().length < 3) {
      setError("Category name must be at least 3 characters.");
      return;
    }
    setError("");
    const category = {
      id: Date.now(),
      name: newCategory.trim(),
    };
    let url = `${BASE_URL}/api/categories`;
    let method = "post";
    const response = await axios({
      method,
      url,
      data: category,
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${user_data.token}`,
      },
    });
    toast.success("Category Created!");
    setNewCategory("");
    setCategoryId(category.id);
    setShowCategoryModal(false);
    fetchCategories();
  };

  const saveBrand = async (e) => {
    e.preventDefault();
    if (newBrand.trim().length < 3) {
      setError("Category name must be at least 3 characters.");
      return;
    }
    setError("");
    const brand = {
      id: Date.now(),
      name: newBrand.trim(),
    };
    let url = `${BASE_URL}/api/brands`;
    let method = "post";
    const response = await axios({
      method,
      url,
      data: brand,
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${user_data.token}`,
      },
    });
    toast.success("Brand Created!");
    setNewBrand("");
    setBrandId(brand.id);
    setShowBrandModel(false);
    fetchBrands();
  };

  return (
    <Layout>
      <div className="main-content-inner">
        <div className="main-content-wrap">
          <h3 className="mb-20">
            {isEdit ? "Edit Product" : "Create Product"}
          </h3>

          <div className="wg-box">
            <Formik
              enableReinitialize
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {() => (
                <Form className="wg-form">
                  {/* SKU */}
                  <div className="row mb-20">
                    <fieldset className="col-md-6">
                      <div className="body-title">SKU *</div>
                      <div className="body-content mb-15">
                        <Field type="text" name="sku" className="mb-5" />
                        <ErrorMessage
                          name="sku"
                          className="error-text"
                          component="div"
                        />
                      </div>
                    </fieldset>

                    {/* Name */}
                    <fieldset className="col-md-6">
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
                  </div>
                  {/* Brand */}
                  <div className="row mb-20">
                    <fieldset className="col-md-6 mb-15">
                      <div className="body-title">Brand *</div>
                      <div className="body-content">
                        <Field name="brand_id" as="select" className="mb-6">
                          {({ field }) => (
                            <select
                              {...field}
                              value={brandId}
                              onChange={(e) => {
                                field.onChange(e);

                                const value = e.target.value;
                                if (value === "add_new") {
                                  setShowBrandModel(true);
                                }
                                setBrandId(value);
                              }}
                            >
                              <option value="">Select Brand</option>
                              {brands.map((b) => (
                            <option value={b.id} key={b.id}>
                              {b.name}
                            </option>
                          ))}
                              {!newBrand && (
                                <option value="add_new">
                                  + Add New Brand
                                </option>
                              )}
                            </select>
                          )}
                        </Field>
                        <ErrorMessage
                          name="brand_id"
                          className="error-text"
                          component="div"
                        />
                      </div>

                    </fieldset>

                    {/* Category */}
                    <fieldset className="col-md-6">
                      <div className="body-title">Category *</div>
                      <div className="body-content">
                        <Field name="category_id" as="select" className="mb-6">
                          {({ field }) => (
                            <select
                              {...field}
                              value={categoryId}
                              onChange={(e) => {
                                field.onChange(e);

                                const value = e.target.value;
                                if (value === "add_new") {
                                  setShowCategoryModal(true);
                                }
                                setCategoryId(value);
                              }}
                            >
                              <option value="">Select Category</option>
                              {categories.map((c) => (
                                <option value={c.id} key={c.id}>
                                  {c.name}
                                </option>
                              ))}
                              {!newCategory && (
                                <option value="add_new">
                                  + Add New Category
                                </option>
                              )}
                            </select>
                          )}
                        </Field>
                        <ErrorMessage
                          name="category_id"
                          className="error-text"
                          component="div"
                        />
                      </div>
                    </fieldset>
                  </div>

                  <div className="row mb-20">
                    <fieldset className="col-md-6">
                      <div className="body-title">Gst Rate Id *</div>
                      <div className="body-content mb-15">
                        <Field as="select" name="gst_rate_id" className="mb-5">
                          <option value="">Select Gst Rate Id</option>
                          {gstRates.map((element) => {
                            return (
                              <>
                                <option value={element.id} key="1">
                                  {element.rate}
                                </option>
                              </>
                            );
                          })}
                        </Field>
                        <ErrorMessage
                          name="gst_rate_id"
                          component="div"
                          className="error-text"
                        />
                      </div>
                    </fieldset>
                    <fieldset className="col-md-6">
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
                  </div>
                  <div className="row mb-20">
                    <fieldset className="col-md-6">
                      <div className="body-title">HSN *</div>
                      <div className="body-content mb-15">
                        <Field type="text" name="hsn_code" className="mb-5" />
                        <ErrorMessage
                          name="hsn_code"
                          className="error-text"
                          component="div"
                        />
                      </div>
                    </fieldset>

                    <fieldset className="col-md-6">
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
                  </div>

                  <fieldset className="mb-20 col-md-6">
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
          {showCategoryModal && (
            <div
              className="modal-overlay"
              onClick={() => setShowCategoryModal(false)}
            >
              <div className="modal-card" onClick={(e) => e.stopPropagation()}>
                {/* Header */}
                <div className="modal-header">
                  <h5>Add New Category</h5>
                </div>

                {/* Body */}
                <div className="modal-body">
                  <input
                    type="text"
                    className={`form-control model-form-control ${
                      error ? "is-invalid" : ""
                    }`}
                    placeholder="Category Name"
                    value={newCategory}
                    onChange={(e) => {
                      setNewCategory(e.target.value);
                      if (error) setError("");
                    }}
                  />

                  {error && <div className="invalid-feedback">{error}</div>}
                </div>

                {/* Footer */}
                <div className="modal-footer">
                  <button
                    className="btn btn-secondary cancel-btn"
                    onClick={() => setShowCategoryModal(false)}
                  >
                    Cancel
                  </button>

                  <button
                    className="btn btn-primary save-btn"
                    disabled={!newCategory.trim()}
                    onClick={(e) => saveCategory(e)}
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          )}

            {showBrandModel && (
            <div
              className="modal-overlay"
              onClick={() => setShowBrandModel(false)}
            >
              <div className="modal-card" onClick={(e) => e.stopPropagation()}>
                {/* Header */}
                <div className="modal-header">
                  <h5>Add New Brand</h5>
                </div>

                {/* Body */}
                <div className="modal-body">
                  <input
                    type="text"
                    className={`form-control model-form-control ${
                      error ? "is-invalid" : ""
                    }`}
                    placeholder="Brand Name"
                    value={newBrand}
                    onChange={(e) => {
                      setNewBrand(e.target.value);
                      if (error) setError("");
                    }}
                  />

                  {error && <div className="invalid-feedback">{error}</div>}
                </div>

                {/* Footer */}
                <div className="modal-footer">
                  <button
                    className="btn btn-secondary cancel-btn"
                    onClick={() => setShowBrandModel(false)}
                  >
                    Cancel
                  </button>

                  <button
                    className="btn btn-primary save-btn"
                    disabled={!newBrand.trim()}
                    onClick={(e) => saveBrand(e)}
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default CreateEditProduct;
