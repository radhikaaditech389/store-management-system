import React,{useState} from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.withCredentials = true;

const Login = () => {
  const history = useHistory();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    pin: "",
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

    // If PIN login → no username/password required
    // if (formData.pin) {
    //   if (formData.pin.length < 4) temp.pin = "PIN must be at least 4 digits";
    // }

    // If username/password login → no PIN required
    // else {
      if (!formData.username) temp.username = "Username is required";
      if (!formData.password) temp.password = "Password is required";
    // }

    setErrors(temp);
    // return Object.keys(temp).length === 0;
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
  await axios.get("/sanctum/csrf-cookie");
    // if (!validate()) {
    //   toast.error("Please fix the errors");
    //   return;
    // }
    try {
      // console.log({formData});
      const res = await axios.post("http://localhost:8000/api/login", formData);

      toast.success("Login Successful!");

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      setTimeout(() => {
        history.push("/");
      }, 1000);
    } catch (err) {
      toast.error(err.response?.data?.message || "Login failed");
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
