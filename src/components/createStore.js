import React from "react";
import Layout from "./layout";
import { Link, useLocation, useHistory } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const CreateStore = () => {
  const location = useLocation();
  const history = useHistory();
  const editingData = location.state?.storeData || null;

  const BASE_URL = process.env.REACT_APP_API_BASE_URL;

  // ---------- VALIDATION SCHEMA ----------
  const storeSchema = Yup.object().shape({
    name: Yup.string().required("Store name is required"),
    address: Yup.string().required("Address is required"),
    state: Yup.string().required("State is required"),
    phone: Yup.string()
      .matches(/^[0-9]{10}$/, "Phone must be exactly 10 digits")
      .required("Phone number is required"),
    contact_person_name: Yup.string().required(
      "Contact person name is required"
    ),
    gstin: Yup.string().required("GSTIN is required"),
    logo: Yup.mixed().required("Logo is required"),
    logo: Yup.mixed()
      .required("Logo is required")
      .test(
        "fileType",
        "The logo must be an image (jpeg, png, jpg)",
        (value) => {
          return (
            value &&
            ["image/jpeg", "image/png", "image/jpg"].includes(value.type)
          );
        }
      ),
  });

  // ---------- INITIAL VALUES ----------
  const initialValues = {
    name: editingData?.name || "",
    address: editingData?.address || "",
    state: editingData?.state || "",
    phone: editingData?.phone || "",
    contact_person_name: editingData?.contact_person_name || "",
    gstin: editingData?.gstin || "",
    logo: editingData?.logo || "",
    tagline: editingData?.tagline || "",
  };

  // ---------- SUBMIT HANDLER ----------
  const handleSubmit = async (values, { setSubmitting }) => {
    const user_data = JSON.parse(localStorage.getItem("user_detail"));

    try {
      // Prepare FormData
      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("address", values.address);
      formData.append("state", values.state);
      formData.append("phone", values.phone);
      formData.append("contact_person_name", values.contact_person_name);
      formData.append("gstin", values.gstin);
      formData.append("tagline", values.tagline || "");

      if (values.logo) {
        formData.append("logo", values.logo); // append the file
      }

      let response;
      if (editingData) {
        // UPDATE STORE
        response = await axios.post(
          `${BASE_URL}/stores/${editingData.id}?_method=PUT`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${user_data?.token}`,
              "Content-Type": "multipart/form-data",
            },
          }
        );
      } else {
        // CREATE STORE
        response = await axios.post(`${BASE_URL}/stores`, formData, {
          headers: {
            Authorization: `Bearer ${user_data?.token}`,
            "Content-Type": "multipart/form-data",
          },
        });
      }

      toast.success(response.data?.message || "Store saved successfully!");
      history.push("/store");
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong!");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Layout>
      <div className="main-content-inner">
        <div className="main-content-wrap">
          <div className="flex items-center flex-wrap justify-between gap20 mb-27">
            <h3>Store Information</h3>
            <ul className="breadcrumbs flex items-center gap10">
              <li>
                <Link to="/dashboard">
                  <div className="text-tiny">Dashboard</div>
                </Link>
              </li>
              <li>
                <i className="icon-chevron-right"></i>
              </li>
              <li>
                <Link to="/store">
                  <div className="text-tiny">Store</div>
                </Link>
              </li>
              <li>
                <i className="icon-chevron-right"></i>
              </li>
              <li>
                <div className="text-tiny">Store Information</div>
              </li>
            </ul>
          </div>

          <div className="wg-box">
            <Formik
              initialValues={initialValues}
              validationSchema={storeSchema}
              onSubmit={handleSubmit}
              enableReinitialize
            >
              {({ isSubmitting, setFieldValue, values }) => (
                <Form className="form-new-product form-style-1">
                  {/* NAME */}
                  <fieldset className="name">
                    <div className="body-title">
                      Store Name <span className="tf-color-1">*</span>
                    </div>
                    <div className="field-wrapper">
                      <Field
                        type="text"
                        name="name"
                        placeholder="Enter store name"
                        readOnly={!!editingData}
                      />
                      <ErrorMessage
                        name="name"
                        component="p"
                        className="error-text"
                      />
                    </div>
                  </fieldset>

                  {/* TAGLINE (optional) */}
                  <fieldset className="name">
                    <div className="body-title">Tagline</div>
                    <div className="field-wrapper">
                      <Field
                        type="text"
                        name="tagline"
                        placeholder="Enter store tagline (optional)"
                      />
                      <ErrorMessage
                        name="tagline"
                        component="p"
                        className="error-text"
                      />
                    </div>
                  </fieldset>

                  {/* ADDRESS */}
                  <fieldset className="name">
                    <div className="body-title">
                      Address <span className="tf-color-1">*</span>
                    </div>
                    <div className="field-wrapper">
                      <Field
                        type="text"
                        name="address"
                        placeholder="Enter address"
                      />
                      <ErrorMessage
                        name="address"
                        component="p"
                        className="error-text"
                      />
                    </div>
                  </fieldset>

                  {/* STATE */}
                  <fieldset className="state">
                    <div className="body-title">
                      State <span className="tf-color-1">*</span>
                    </div>
                    <div className="field-wrapper">
                      <div className="select flex-grow">
                        <Field as="select" name="state">
                          <option value="">Select state</option>
                          <option value="Gujarat">Gujarat</option>
                          <option value="Maharashtra">Maharashtra</option>
                          <option value="Rajasthan">Rajasthan</option>
                          <option value="Delhi">Delhi</option>
                          <option value="MP">Madhya Pradesh</option>
                        </Field>
                      </div>
                      <ErrorMessage
                        name="state"
                        component="p"
                        className="error-text"
                      />
                    </div>
                  </fieldset>

                  {/* PHONE */}
                  <fieldset className="name">
                    <div className="body-title">
                      Phone <span className="tf-color-1">*</span>
                    </div>
                    <div className="field-wrapper">
                      <Field
                        type="text"
                        name="phone"
                        placeholder="Enter phone number"
                      />
                      <ErrorMessage
                        name="phone"
                        component="p"
                        className="error-text"
                      />
                    </div>
                  </fieldset>

                  {/* CONTACT PERSON NAME */}
                  <fieldset className="name">
                    <div className="body-title">
                      Contact Person <span className="tf-color-1">*</span>
                    </div>
                    <div className="field-wrapper">
                      <Field
                        type="text"
                        name="contact_person_name"
                        placeholder="Enter contact person name"
                      />
                      <ErrorMessage
                        name="contact_person_name"
                        component="p"
                        className="error-text"
                      />
                    </div>
                  </fieldset>

                  {/* GSTIN */}
                  <fieldset className="name">
                    <div className="body-title">
                      GSTIN <span className="tf-color-1">*</span>
                    </div>
                    <div className="field-wrapper">
                      <Field
                        type="text"
                        name="gstin"
                        placeholder="Enter GSTIN"
                      />
                      <ErrorMessage
                        name="gstin"
                        component="p"
                        className="error-text"
                      />
                    </div>
                  </fieldset>

                  {/* LOGO UPLOAD */}
                  <fieldset className="name">
                    <div className="body-title">
                      Logo <span className="tf-color-1">*</span>
                    </div>
                    <div className="field-wrapper">
                      <input
                        type="file"
                        name="logo"
                        accept="image/*"
                        onChange={(event) => {
                          setFieldValue("logo", event.currentTarget.files[0]);
                        }}
                      />
                      <ErrorMessage
                        name="logo"
                        component="p"
                        className="error-text"
                      />

                      {/* Preview */}
                      {values.logo && (
                        <img
                          src={
                            typeof values.logo === "object"
                              ? URL.createObjectURL(values.logo) // newly selected file
                              : `http://localhost:8000/storage/${values.logo}` // existing logo from backend
                          }
                          alt="Logo Preview"
                          className="rounded-full object-cover mt-2"
                          style={{ width: "100px", height: "100px" }} // smaller preview
                        />
                      )}
                    </div>
                  </fieldset>

                  {/* SUBMIT */}
                  <div className="bot">
                    <button
                      className="tf-button w208"
                      type="submit"
                      disabled={isSubmitting}
                    >
                      {isSubmitting
                        ? editingData
                          ? "Updating..."
                          : "Creating..."
                        : editingData
                        ? "Update"
                        : "Save"}
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CreateStore;
