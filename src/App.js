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
import CreateStore from "./components/createStore";
import ViewStore from "./components/viewStore";
import Branch from "./components/branch";
import CashierLogin from "./components/cashierLogin";
import Category from "./components/category";
import PurchaseBill from "./components/purchaseBill";
import SupplierBill from "./components/suppllier";
import Brand from "./components/brand";
import CreateEditProduct from "./components/createEditProduct";
import CreateEditBranch from "./components/createEditBranch";
import CreateEditCategory from "./components/createEditCategory";
import CreateEditBrand from "./components/createEditBrand";
import GstRate from "./components/gstRate";

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
          <Route exact path="/create-product" component={CreateEditProduct} />
          <Route path="/product/edit/:id" component={CreateEditProduct} />
          <Route exact path="/store" component={Store} />

          <Route exact path="/store" component={Store} />
          <Route exact path="/stores/view/:id" component={ViewStore} />
          <Route exact path="/create-store" component={CreateStore} />

          <Route exact path="/branch" component={Branch} />
          <Route exact path="/create-branch" component={CreateEditBranch} />
          <Route path="/branch/edit/:id" component={CreateEditBranch} />
          <Route exact path="/category" component={Category} />
          <Route exact path="/create-category" component={CreateEditCategory} />
          <Route path="/category/edit/:id" component={CreateEditCategory} />
          <Route exact path="/purchase-bill" component={PurchaseBill} />
          <Route exact path="/supplier-bill" component={SupplierBill} />
          <Route exact path="/brand" component={Brand} />
          <Route exact path="/create-brand" component={CreateEditBrand} />
          <Route path="/brand/edit/:id" component={CreateEditBrand} />
          <Route exact path="/gst-rates" component={GstRate} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
