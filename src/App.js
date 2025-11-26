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
import CashierLogin from "./components/cashierLogin";
import Category from "./components/category";
import PurchaseBill from "./components/purchaseBill";
import SupplierBill from "./components/suppllier";

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
           <Route exact path="/casier_login" component={CashierLogin} />
          <Route exact path="/" component={Home} />
           <Route exact path="/product" component={Product} />
           <Route exact path="/store" component={Store} />
            <Route exact path="/branch" component={Branch} />
             <Route exact path="/category" component={Category} />
              <Route exact path="/purchase-bill" component={PurchaseBill} />
              <Route exact path="/supplier-bill" component={SupplierBill} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
