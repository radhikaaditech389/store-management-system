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
import Staff from "./components/staff";
import CreateEditStaff from "./components/createEditStaff";
import ProtectedRoute from "./routes/ProtectedRoute";
import CreateEditPurchaseBill from "./components/createEditPurchaseBill";
import SaleBill from "./components/saleBill";
import CreateEditSaleBill from "./components/createEditSaleBill";
import POS from "./components/POS";
import CreateEditSupplier from "./components/createEditSupplier";
import CreateEditGstRates from "./components/createEditGstRate";
import PurchaseReturn from "./components/purchaseReturn";
import CreateEditPurchaseReturn from "./components/createEditPurchaseReturn";

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
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/casier_login" component={CashierLogin} />

          <ProtectedRoute exact path="/pos" component={POS} />
          <ProtectedRoute exact path="/dashboard" component={Home} />
          <ProtectedRoute exact path="/product" component={Product} />
          <ProtectedRoute
            exact
            path="/create-product"
            component={CreateEditProduct}
          />
          <ProtectedRoute
            path="/product/edit/:id"
            component={CreateEditProduct}
          />
          <ProtectedRoute exact path="/store" component={Store} />
          <ProtectedRoute exact path="/stores/view/:id" component={ViewStore} />
          <ProtectedRoute exact path="/create-store" component={CreateStore} />
          <ProtectedRoute exact path="/branch" component={Branch} />
          <ProtectedRoute
            exact
            path="/create-branch"
            component={CreateEditBranch}
          />
          <ProtectedRoute
            path="/branch/edit/:id"
            component={CreateEditBranch}
          />
          <ProtectedRoute exact path="/category" component={Category} />
          <ProtectedRoute
            exact
            path="/create-category"
            component={CreateEditCategory}
          />
          <ProtectedRoute
            path="/category/edit/:id"
            component={CreateEditCategory}
          />
            <ProtectedRoute
            exact
            path="/purchase-return-bill"
            component={PurchaseReturn}
          />
          <ProtectedRoute
            exact
            path="/create-purchase-return-bill"
            component={CreateEditPurchaseReturn}
          />
            <ProtectedRoute
            exact
            path="/purchase-return-bill/edit/:id"
            component={CreateEditPurchaseReturn}
          />
          <ProtectedRoute
            exact
            path="/purchase-bill"
            component={PurchaseBill}
          />
          <ProtectedRoute
            exact
            path="/create-purchase-bill"
            component={CreateEditPurchaseBill}
          />
          <ProtectedRoute
            path="/purchase-bill/edit/:id"
            component={CreateEditPurchaseBill}
          />
          <ProtectedRoute exact path="/sale-bill" component={SaleBill} />
          <ProtectedRoute
            exact
            path="/create-sale-bill"
            component={CreateEditSaleBill}
          />
          <ProtectedRoute exact path="/suppliers" component={SupplierBill} />
          <ProtectedRoute
            exact
            path="/create-suppliers"
            component={CreateEditSupplier}
          />
          <ProtectedRoute
            exact
            path="/suppliers/edit/:id"
            component={CreateEditSupplier}
          />
          <ProtectedRoute exact path="/brand" component={Brand} />
          <ProtectedRoute
            exact
            path="/create-brand"
            component={CreateEditBrand}
          />
          <ProtectedRoute path="/brand/edit/:id" component={CreateEditBrand} />
          <ProtectedRoute
            exact
            path="/create-staff"
            component={CreateEditStaff}
          />
          <ProtectedRoute path="/staff/edit/:id" component={CreateEditStaff} />

          <ProtectedRoute exact path="/gst-rates" component={GstRate} />
          <ProtectedRoute exact path="/staff" component={Staff} />
          <ProtectedRoute
            exact
            path="/create-gst-rates"
            component={CreateEditGstRates}
          />
          <ProtectedRoute
            path="/gst-rates/edit/:id"
            component={CreateEditGstRates}
          />
          <Route path="*" component={Login} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
