import Navbar from "./navbar";
import Header from "./header";
import Footer from "./footer";
const Layout = ({ children }) => {
  return (
    <>
      <div className="layout-wrap">
        <Navbar />
        <div className="section-content-right">
          {/* <!-- header-dashboard --> */}
          <Header />
           <div className="main-content">
          { children }
          <Footer/>
          </div>
        </div>
      </div>
    </>
  );
};
export default Layout;
