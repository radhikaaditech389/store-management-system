import React,{useState} from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { getCookie } from "../utils/cookies";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.withCredentials = true;

const Login = () => {
  const history = useHistory();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  // validation
const validate = () => {
  let temp = {};

  if (!formData.username) temp.username = "Username is required";
  if (!formData.password) temp.password = "Password is required";

  setErrors(temp);

  return Object.keys(temp).length === 0; // ✅ return true if no errors
};

  // Submit form
 const handleSubmit = async (e) => {
  e.preventDefault();

  if (!validate()) {
    console.log("Validation failed");
    return; // ⛔ Stop here
  }

   try {
    // 1. Get CSRF cookie
    await axios.get("http://localhost:8000/sanctum/csrf-cookie", {
      withCredentials: true,
    });

    // 2. Send login request
    const response = await axios.post(
      "http://localhost:8000/api/login",
      formData,
      {
        headers: {
          accept: "application/json",
          "X-XSRF-TOKEN": getCookie("XSRF-TOKEN"),
        },
        withCredentials: true,
      }
    );    
    const user_detail = response.data;
    localStorage.setItem("user_detail",JSON.stringify(user_detail))
    if(response.data){
      history.push("/");
    }
  } catch (err) {
    console.error("LOGIN ERROR:", err);
  }
};

  return (
    <div className="wrap-login-page">
      <div className="flex-grow flex flex-column justify-center gap30">
        <div className="login-box">
          <h3>Login to account</h3>
          <form
            className="form-login flex flex-column gap24"
            onSubmit={handleSubmit}
          >
            {/* Username */}
            <fieldset className="username">
              <div className="body-title mb-10">
                Username <span className="tf-color-1">*</span>
              </div>
              <input
                type="text"
                placeholder="Enter your username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                // disabled={formData.pin !== ""}
              />
              {errors.username && (
                <small className="text-red">{errors.username}</small>
              )}
            </fieldset>

            {/* Password */}
            <fieldset className="password">
              <div className="body-title mb-10">
                Password <span className="tf-color-1">*</span>
              </div>
              <input
                type="password"
                placeholder="Enter your password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                // disabled={formData.pin !== ""}
              />
              {errors.password && (
                <small className="text-red">{errors.password}</small>
              )}
            </fieldset>

            {/* PIN Login */}
            {/* <fieldset className="pin">
              <div className="body-title mb-10">
                Cashier PIN <span className="tf-color-1">*</span>
              </div>
              <input
                type="text"
                placeholder="Enter your PIN"
                name="pin"
                value={formData.pin}
                onChange={handleChange}
                // disabled={formData.username !== "" || formData.password !== ""}
              />
              {errors.pin && <small className="text-red">{errors.pin}</small>}
            </fieldset> */}

            <button type="submit" className="tf-button w-full">
              Login
            </button>
             <div className="body-text text-center">
                          Already have an register? please Login here
                          <Link to="/register" className="body-text tf-color">
                            {" "}
                            Register Now{" "}
                          </Link>
                          </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
