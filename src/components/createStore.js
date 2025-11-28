import React, { useState } from "react";
import Layout from "./layout";
import { Link, useLocation, useHistory } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const CreateStore = () => {
  const location = useLocation();
  const history = useHistory();
  const editingData = location.state?.storeData || null;

  const [formData, setFormData] = useState({
    name: editingData?.name || "",
    address: editingData?.address || "",
    state: editingData?.state || "",
    phone: editingData?.phone || "",
  });

  const BASE_URL = process.env.REACT_APP_API_BASE_URL;

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    let temp = {};

    if (!formData.name.trim()) temp.name = "Store Name is required";
    if (!formData.address.trim()) temp.address = "Address is required";

    if (!formData.state.trim()) temp.state = "State is required";

    if (!formData.phone) temp.phone = "Phone is required";
    else if (formData.phone.length !== 10)
      temp.phone = "Phone must be exactly 10 digits";

    setErrors(temp);

    return Object.keys(temp).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    const user_data = JSON.parse(localStorage.getItem("user_detail"));

    setLoading(true);
    try {
      if (editingData) {
        // Edit existing store
        const response = await axios.put(
          `${BASE_URL}/stores/${editingData.id}`,
          formData,
          {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              Authorization: `Bearer ${user_data.token}`,
            },
            withCredentials: true,
          }
        );
        toast.success(response.data?.message || "Store updated successfully!");
      } else {
        // Create new store
        const response = await axios.post(`${BASE_URL}/stores`, formData);
        toast.success(response.data?.message || "Store created successfully!");
      }

      history.push("/store");
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <div className="main-content-inner">
        <div className="main-content-wrap">
          <div className="flex items-center flex-wrap justify-between gap20 mb-27">
            <h3>Store Information</h3>
            <ul className="breadcrumbs flex items-center flex-wrap justify-start gap10">
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
            <form
              className="form-new-product form-style-1"
              onSubmit={handleSubmit}
            >
              {/* NAME */}
              <fieldset className="name">
                <div className="body-title">
                  Store Name <span className="tf-color-1">*</span>
                </div>
                <div className="field-wrapper">
                  <input
                    className="flex-grow"
                    type="text"
                    placeholder="Enter name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    readOnly={!!editingData}
                  />
                  {errors.name && <p className="error-text">{errors.name}</p>}
                </div>
              </fieldset>

              {/* ADDRESS */}
              <fieldset className="name">
                <div className="body-title">
                  Address <span className="tf-color-1">*</span>
                </div>
                <div className="field-wrapper">
                  <input
                    className="flex-grow"
                    type="text"
                    placeholder="Enter address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                  />
                  {errors.address && (
                    <p className="error-text">{errors.address}</p>
                  )}
                </div>
              </fieldset>

              {/* STATE */}
              <fieldset className="state">
                <div className="body-title">
                  State<span className="tf-color-1">*</span>
                </div>
                <div className="field-wrapper">
                  <div className="select flex-grow">
                    <select
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                    >
                      <option value="">Select state</option>
                      <option value="Gujarat">Gujarat</option>
                      <option value="Maharashtra">Maharashtra</option>
                      <option value="Rajasthan">Rajasthan</option>
                      <option value="Delhi">Delhi</option>
                      <option value="MP">Madhya Pradesh</option>
                    </select>
                  </div>
                  {errors.state && <p className="error-text">{errors.state}</p>}
                </div>
              </fieldset>

              {/* PHONE */}
              <fieldset className="name">
                <div className="body-title">
                  Phone <span className="tf-color-1">*</span>
                </div>
                <div className="field-wrapper">
                  <input
                    className="flex-grow"
                    type="text"
                    placeholder="Enter phone number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  {errors.phone && <p className="error-text">{errors.phone}</p>}
                </div>
              </fieldset>

              {/* SUBMIT */}
              <div className="bot">
                <div></div>
                <button
                  className="tf-button w208"
                  type="submit"
                  disabled={loading}
                >
                  {loading
                    ? editingData
                      ? "Updating..."
                      : "Creating..."
                    : editingData
                    ? "Update"
                    : "Save"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CreateStore;
