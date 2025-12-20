import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useLocation, useHistory } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import * as Yup from "yup";
import { getCookie } from "../utils/cookies";
import Layout from "./layout";
import { toast } from "react-toastify";

const CreateEditPurchaseBill = () => {
  const BASE_URL = process.env.REACT_APP_API_BASE_URL;
  const { id } = useParams(); // if id exists -> Edit Mode
  const history = useHistory();
  const [branches, setBranches] = useState([]);
  const [suppliers, setSupplierBill] = useState([]);
  const [products, setProducts] = useState([]);
  const [gstRates, setGstRates] = useState([]);
  const [supplierId, setSupplierId] = useState("");
  const [productId, setProductId] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showProductModal, setShowProductModal] = useState(false);
  const [newSupplier, setNewSupplier] = useState("");
  const [newProduct, setNewProduct] = useState("");
  const [error, setError] = useState("");

  const user_data = JSON.parse(localStorage.getItem("user_detail"));

  const store_purchase_bill = localStorage.getItem("purchase_bills_create");

  const incomingBill = store_purchase_bill
    ? JSON.parse(store_purchase_bill)
    : null;

  const isEdit = Boolean(id);

  const [initialValues, setInitialValues] = useState({
    branch_id: "",
    supplier_id: "",
    bill_no: "",
    bill_date: "",
    lines: [
      {
        product_id: "",
        qty: "",
        free_qty: "",
        purchase_rate: "",
        discount_type: "",
        discount: "",
        hsn_code: "",
        gst_rate_id: "",
        batch_no: "",
        expiry_date: "",
      },
    ],
  });

  useEffect(() => {
    if (incomingBill) {
      setInitialValues({
        branch_id: incomingBill.branch_id?.toString() || "",
        supplier_id: incomingBill.supplier_id?.toString() || "",
        bill_no: incomingBill.bill_no || "",
        bill_date: incomingBill.bill_date || "",

        lines: incomingBill.lines?.length
          ? incomingBill.lines.map((line) => ({
              product_id: line.product_id?.toString() || "",
              qty: line.qty || "",
              free_qty: line.free_qty || "",
              purchase_rate: line.purchase_rate || "",
              discount_type: line.discount_type || "",
              discount: line.discount || "",
              hsn_code: line.hsn_code || "",
              gst_rate_id: line.gst_rate_id?.toString() || "",
              batch_no: line.batch_no || "",
              expiry_date: line.expiry_date || "",
            }))
          : initialValues.lines, // fallback
      });
    }
  }, []);

  const fetchBranch = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/api/manager/branches`, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${user_data.token}`,
        },
      });
      setBranches(response.data.branches);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const fetchSupplierBill = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/api/suppliers`, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${user_data.token}`,
        },
      });
      setSupplierBill(response.data.suppliers);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const fetchProduct = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/api/products`, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${user_data.token}`,
        },
      });
      setProducts(response.data.products);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const fetchGstRates = async () => {
    const response = await axios.get(`${BASE_URL}/api/gst-rates`, {
      headers: { Authorization: `Bearer ${user_data.token}` },
    });
    setGstRates(response.data.gstRates);
  };

  useEffect(() => {
     fetchSupplierBill();
     fetchBranch();
    fetchProduct();
    fetchGstRates();
  }, []);

  useEffect(() => {
    const handler = (e) => e.key === "Escape" && setShowModal(false);
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  // Validation Schema

  const validationSchema = Yup.object().shape({
    branch_id: Yup.string().required("Branch is required"),
    supplier_id: Yup.string().required("Supplier is required"),
    bill_no: Yup.string().required("Bill No is required"),
    bill_date: Yup.date().required("Bill date is required"),

    lines: Yup.array()
      .min(1, "At least one product is required")
      .of(
        Yup.object().shape({
          product_id: Yup.string().required("Product is required"),

          qty: Yup.number()
            .typeError("Quantity must be a number")
            .required("Qty required")
            .min(0.0001, "Qty must be greater than 0"),

          free_qty: Yup.number()
            .nullable()
            .typeError("Free Qty must be a number")
            .min(0, "Free Qty cannot be negative"),

          purchase_rate: Yup.number()
            .typeError("Purchase rate must be a number")
            .required("Purchase rate required")
            .min(0, "Rate cannot be negative"),

          discount_type: Yup.string().required(),

          discount: Yup.number()
            .nullable()
            .typeError("Discount must be a number")
            .min(0, "Discount cannot be negative"),

          hsn_code: Yup.string().required(),

          gst_rate_id: Yup.string().required("GST rate required"),

          batch_no: Yup.string().required(),

          expiry_date: Yup.date().required(),
        })
      ),
  });

  const handleSubmit = async (values, actions) => {
    try {
      let response;

      if (isEdit) {
        // UPDATE
        response = await axios.put(`/api/purchase-bill/${id}`, values, {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${user_data.token}`,
          },
        });
        toast.success("Purchase Bill Updated!");
      } else {
        // CREATE
        response = await axios.post("/api/purchase-bill", values, {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${user_data.token}`,
          },
        });
        actions.resetForm();
        toast.success("Purchase Bill Saved!");
      }

      history.push("/purchase-bill");
    } catch (error) {
      console.log(error.response?.data);
      alert(error.response?.data?.message || "Something went wrong");
    }
  };

  const saveSupplier = async (e) => {
    e.preventDefault();
    if (newSupplier.trim().length < 3) {
      setError("Supplier name must be at least 3 characters.");
      return;
    }
    // Clear error if valid
    setError("");

    const supplier = {
      id: Date.now(),
      name: newSupplier.trim(),
    };
    let url = `${BASE_URL}/api/suppliers`;
    let method = "post";
    const response = await axios({
      method,
      url,
      data: supplier,
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${user_data.token}`,
      },
    });
    toast.success("Suppliers Created!");
    setSupplierId(supplier.id);
    setNewSupplier("");
    setShowModal(false);
    fetchSupplierBill();
  };

  const saveProduct = async (e) => {
    e.preventDefault();
    if (newProduct.trim().length < 3) {
      setError("Product name must be at least 3 characters.");
      return;
    }
    setError("");
    const product = {
      id: Date.now(),
      name: newProduct.trim(),
    };
    let url = `${BASE_URL}/api/products`;
    let method = "post";
    const response = await axios({
      method,
      url,
      data: product,
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${user_data.token}`,
      },
    });
    toast.success("Products Created!");
    setNewProduct("");
    setProductId(product.id);
    setShowProductModal(false);
    fetchProduct();
  };

  return (
    <Layout>
      <div className="main-content-inner">
        <div className="main-content-wrap">
          <h3 className="mb-20">
            {isEdit ? "Edit Purchase Bill" : "Create Purchase Bill"}
          </h3>

          <div className="wg-box" style={{ width: "100%" }}>
            <Formik
              initialValues={initialValues}
              enableReinitialize={true}
              validationSchema={validationSchema}
              onSubmit={(values, actions) => handleSubmit(values, actions)}
            >
              {({ values }) => (
                <Form>
                  {/* ---------------- Basic Form Fields ---------------- */}
                  <div className="container">
                    <div className="row mb-20">
                      <div className="mb-20 col-md-6">
                        <label className="mb-8 purchase-label">Branch</label>
                        <Field as="select" name="branch_id" className="mb-6">
                          <option value="">Select Branch</option>
                          {branches?.map((b) => (
                            <option value={b.id} key={b.id}>
                              {b.name}
                            </option>
                          ))}
                        </Field>
                        <ErrorMessage
                          name="branch_id"
                          className="error-text"
                          component="div"
                        />
                      </div>

                      <div className="mb-20 col-md-6">
                        <label className="mb-8 purchase-label">Supplier</label>
                        <Field name="supplier_id" as="select" className="mb-6">
                          {({ field }) => (
                            <select
                              {...field}
                              value={supplierId}
                              onChange={(e) => {
                                field.onChange(e);

                                const value = e.target.value;
                                if (value === "add_new") {
                                  setShowModal(true);
                                }
                                setSupplierId(value);
                              }}
                            >
                              <option value="">Select Supplier</option>
                              {suppliers.map((s) => (
                                <option key={s.id} value={s.id}>
                                  {s.name}
                                </option>
                              ))}
                              {!newSupplier && (
                                <option value="add_new">
                                  + Add New Supplier
                                </option>
                              )}
                            </select>
                          )}
                        </Field>
                        <ErrorMessage
                          name="supplier_id"
                          className="error-text"
                          component="div"
                        />
                      </div>
                    </div>
                  </div>
                  {/* <div className="container"> */}
                  <div className="row mb-20">
                    <div className="mb-20 col-md-6">
                      <label className="mb-8 purchase-label">Bill No</label>
                      <Field type="text" name="bill_no" className="mb-6" />
                      <ErrorMessage
                        name="bill_no"
                        className="error-text"
                        component="div"
                      />
                    </div>

                    <div className="mb-20 col-md-6">
                      <label
                        className="mb-8 purchase-label"
                        style={{ fontSize: "15px" }}
                      >
                        Bill Date
                      </label>
                      <Field type="date" name="bill_date" className="mb-6" />
                      <ErrorMessage
                        name="bill_date"
                        className="error-text"
                        component="div"
                      />
                    </div>
                  </div>
                  {/* </div> */}

                  {/* ---------------- Line Items ---------------- */}
                  <FieldArray name="lines">
                    {({ push, remove }) => (
                      <>
                        {values?.lines?.map((line, index) => (
                          <div
                            key={index}
                            style={{
                              border: "1px solid #ccc",
                              padding: 10,
                              marginBottom: 12,
                            }}
                          >
                            <h4>Product {index + 1}</h4>

                            <div className="line-row">
                              <div className="line-col">
                                <label
                                  className="mb-8 mt-12"
                                  style={{
                                    fontSize: "15px",
                                    marginTop: "12px",
                                  }}
                                >
                                  Product
                                </label>
                                <Field
                                  name={`lines.${index}.product_id`}
                                  as="select"
                                  className="mb-6"
                                >
                                  {({ field }) => (
                                    <select
                                      {...field}
                                      value={productId}
                                      onChange={(e) => {
                                        field.onChange(e);

                                        const value = e.target.value;
                                        if (value === "add_new") {
                                          setShowProductModal(true);
                                        }
                                        setProductId(value);
                                      }}
                                    >
                                      <option value="">Select Product</option>
                                      {products.map((p) => (
                                        <option key={p.id} value={p.id}>
                                          {p.name}
                                        </option>
                                      ))}
                                      {!newProduct && (
                                        <option value="add_new">
                                          + Add New Product
                                        </option>
                                      )}
                                    </select>
                                  )}
                                </Field>
                                <ErrorMessage
                                  name={`lines.${index}.product_id`}
                                  className="error-text"
                                  component="div"
                                />
                              </div>

                              <div className="line-col">
                                <label style={{ fontSize: "15px" }}>Qty</label>
                                <Field
                                  type="number"
                                  name={`lines.${index}.qty`}
                                />
                                <ErrorMessage
                                  name={`lines.${index}.qty`}
                                  className="error-text"
                                  component="div"
                                />
                              </div>

                              <div className="line-col">
                                <label style={{ fontSize: "15px" }}>
                                  Free Qty
                                </label>
                                <Field
                                  type="number"
                                  name={`lines.${index}.free_qty`}
                                />
                                <ErrorMessage
                                  name={`lines.${index}.free_qty`}
                                  className="error-text"
                                  component="div"
                                />
                              </div>

                              <div className="line-col">
                                <label style={{ fontSize: "15px" }}>
                                  Purchase Rate
                                </label>
                                <Field
                                  type="number"
                                  name={`lines.${index}.purchase_rate`}
                                />
                                <ErrorMessage
                                  name={`lines.${index}.purchase_rate`}
                                  className="error-text"
                                  component="div"
                                />
                              </div>

                              <div className="line-col">
                                <label style={{ fontSize: "15px" }}>
                                  Discount Type
                                </label>
                                <Field
                                  as="select"
                                  name={`lines.${index}.discount_type`}
                                >
                                  <option value="">None</option>
                                  <option value="percent">%</option>
                                  <option value="fixed">Fixed</option>
                                </Field>
                                <ErrorMessage
                                  name={`lines.${index}.discount_type`}
                                  className="error-text"
                                  component="div"
                                />
                              </div>

                              <div className="line-col">
                                <label style={{ fontSize: "15px" }}>
                                  Discount
                                </label>
                                <Field
                                  type="number"
                                  name={`lines.${index}.discount`}
                                />
                                <ErrorMessage
                                  name={`lines.${index}.discount`}
                                  className="error-text"
                                  component="div"
                                />
                              </div>

                              <div className="line-col">
                                <label style={{ fontSize: "15px" }}>HSN</label>
                                <Field
                                  type="text"
                                  name={`lines.${index}.hsn_code`}
                                />
                                <ErrorMessage
                                  name={`lines.${index}.hsn_code`}
                                  className="error-text"
                                  component="div"
                                />
                              </div>

                              <div className="line-col">
                                <label style={{ fontSize: "15px" }}>
                                  GST Rate
                                </label>
                                <Field
                                  as="select"
                                  name={`lines.${index}.gst_rate_id`}
                                >
                                  <option value="">Select</option>
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
                                  name={`lines.${index}.gst_rate_id`}
                                  className="error-text"
                                  component="div"
                                />
                              </div>

                              <div className="line-col">
                                <label style={{ fontSize: "15px" }}>
                                  Batch
                                </label>
                                <Field
                                  type="text"
                                  name={`lines.${index}.batch_no`}
                                />
                                <ErrorMessage
                                  name={`lines.${index}.batch_no`}
                                  className="error-text"
                                  component="div"
                                />
                              </div>

                              <div className="line-col">
                                <label style={{ fontSize: "15px" }}>
                                  Expiry
                                </label>
                                <Field
                                  type="date"
                                  name={`lines.${index}.expiry_date`}
                                />
                                <ErrorMessage
                                  name={`lines.${index}.expiry_date`}
                                  className="error-text"
                                  component="div"
                                />
                              </div>
                            </div>

                            <button type="button" onClick={() => remove(index)}>
                              Remove Line
                            </button>
                          </div>
                        ))}

                        <button
                          type="button"
                          className="mt-12"
                          style={{ marginRight: "12px" }}
                          onClick={() =>
                            push({
                              product_id: "",
                              qty: "",
                              free_qty: "",
                              purchase_rate: "",
                              discount_type: "",
                              discount: "",
                              hsn_code: "",
                              gst_rate_id: "",
                              batch_no: "",
                              expiry_date: "",
                            })
                          }
                        >
                          + Add Product
                        </button>
                      </>
                    )}
                  </FieldArray>
                  <button type="submit">
                    {isEdit ? "Update Bill" : "Save Bill"}
                  </button>
                </Form>
              )}
            </Formik>
          </div>
          {showModal && (
            <div className="modal-overlay" onClick={() => setShowModal(false)}>
              <div className="modal-card" onClick={(e) => e.stopPropagation()}>
                {/* Header */}
                <div className="modal-header">
                  <h5>Add New Supplier</h5>
                </div>

                {/* Body */}
                <div className="modal-body">
                  <input
                    type="text"
                    className={`form-control model-form-control ${
                      error ? "is-invalid" : ""
                    }`}
                    placeholder="Supplier Name"
                    value={newSupplier}
                    onChange={(e) => {
                      setNewSupplier(e.target.value);
                      if (error) setError("");
                    }}
                  />

                  {error && <div className="invalid-feedback">{error}</div>}
                </div>

                {/* Footer */}
                <div className="modal-footer">
                  <button
                    className="btn btn-secondary cancel-btn"
                    onClick={() => setShowModal(false)}
                  >
                    Cancel
                  </button>

                  <button
                    className="btn btn-primary save-btn"
                    disabled={!newSupplier.trim()}
                    onClick={(e) => saveSupplier(e)}
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          )}
          {showProductModal && (
            <div
              className="modal-overlay"
              onClick={() => setShowProductModal(false)}
            >
              <div className="modal-card" onClick={(e) => e.stopPropagation()}>
                {/* Header */}
                <div className="modal-header">
                  <h5>Add New Product</h5>
                </div>

                {/* Body */}
                <div className="modal-body">
                  <input
                    type="text"
                    className={`form-control model-form-control ${
                      error ? "is-invalid" : ""
                    }`}
                    placeholder="Product Name"
                    value={newProduct}
                    onChange={(e) => {
                      setNewProduct(e.target.value);
                      if (error) setError("");
                    }}
                  />

                  {error && <div className="invalid-feedback">{error}</div>}
                </div>

                {/* Footer */}
                <div className="modal-footer">
                  <button
                    className="btn btn-secondary cancel-btn"
                    onClick={() => setShowProductModal(false)}
                  >
                    Cancel
                  </button>

                  <button
                    className="btn btn-primary save-btn"
                    disabled={!newProduct.trim()}
                    onClick={(e) => saveProduct(e)}
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

export default CreateEditPurchaseBill;
