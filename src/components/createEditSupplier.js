import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Layout from "./layout";
import { toast } from "react-toastify";

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

const CreateEditSupplier = () => {
  const { id } = useParams(); // if id exists -> Edit Mode
  const history = useHistory();

  const user_data = JSON.parse(localStorage.getItem("user_detail"));
  const store_supplier = localStorage.getItem("supplier_detail");

  const incomingSupplier = store_supplier && JSON.parse(store_supplier);
  const isEdit = Boolean(id);

  const [initialValues, setInitialValues] = useState({
    store_id: "",
    name: "",
    gstin: "",
    contact: "",
    address: "",
    state: "",
  });

  // If editing → set initial values
  const loadSupplierData = () => {
    if (incomingSupplier) {
      setInitialValues({
        store_id: incomingSupplier.store_id,
        name: incomingSupplier.name,
        gstin: incomingSupplier.gstin,
        contact: incomingSupplier.contact,
        address: incomingSupplier.address,
        state: incomingSupplier.state,
      });
    }
  };

  useEffect(() => {
    loadSupplierData();
  }, []);

  // Validation Schema
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    gstin: Yup.string().required("GstIn is required"),
    contact: Yup.string().required("contact is required"),
    address: Yup.string().required("address is required"),
    state: Yup.string().required("state is required"),
  });

  // Submit (Create + Update)
  const handleSubmit = async (values) => {
    try {

      let url = "";
      let method = "";

      if (isEdit) {
        // UPDATE PRODUCT
        url = `${BASE_URL}/api/suppliers/${id}`;
        method = "put";
      } else {
        // CREATE PRODUCT
        url = `${BASE_URL}/api/suppliers`;
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
      toast.success(isEdit ? "Suppliers Updated!" : "Suppliers Created!");
      history.push("/suppliers");
    } catch (error) {
      console.error("Error saving product:", error);
    }
  };

  return (
    <Layout>
      <div className="main-content-inner">
        <div className="main-content-wrap">
          <h3 className="mb-20">
            {isEdit ? "Edit Supplier" : "Create Supplier"}
          </h3>

          <div className="wg-box wg-content">
            <Formik
              enableReinitialize
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {() => (
                <Form className="wg-form" >
                  <div className="row mb-12">
                  <fieldset className="col-md-6">
                    <div className="body-title">Name *</div>
                    <div className="body-content mb-15">
                      <Field type="text" name="name" className="mb-5" />
                      <ErrorMessage
                        name="name"
                        className="error-text"
                        component="div"
                      />
                    </div>
                  </fieldset>
                  <fieldset className="col-md-6">
                    <div className="body-title">GstIn *</div>
                    <div className="body-content">
                      <Field type="text" name="gstin" className="mb-5" />
                      <ErrorMessage
                        name="gstin"
                        className="error-text"
                        component="div"
                      />
                    </div>
                  </fieldset>
                  </div>
                  <div className="row mb-12">
                  <fieldset className="col-md-6">
                    <div className="body-title">Contact *</div>
                    <div className="body-content mb-15">
                      <Field
                        type="text"
                        name="contact"
                        maxLength={10}
                        className="mb-5"
                      />
                      <ErrorMessage
                        name="contact"
                        className="error-text"
                        component="div"
                      />
                    </div>
                  </fieldset>
                  <fieldset className="col-md-6">
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
                  </div>
                  <fieldset className="col-md-6 mb-12">
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
                  {/* SUBMIT BUTTON */}
                  <button className="tf-button w208" type="submit">
                    {isEdit ? "Update Supplier" : "Create Supplier"}
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

export default CreateEditSupplier;
