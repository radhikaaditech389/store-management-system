import logo from "./logo.svg";
import "./App.css";
import "../src/assets/css/style.css";
import "../src/assets/font/fonts.css";
import "../src/assets/icon/style.css";
import Home from "./components/home";
import Register from "./components/register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Product from "./components/product";
import Store from "./components/store";
import Branch from "./components/branch";

function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored" // dark / light / colored
        style={{
          fontFamily: "Poppins, sans-serif",
          fontSize: "14px",
        }}
      />

      <Router>
        <Switch>         
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Home} />
           <Route exact path="/product" component={Product} />
           <Route exact path="/store" component={Store} />
            <Route exact path="/branch" component={Branch} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
