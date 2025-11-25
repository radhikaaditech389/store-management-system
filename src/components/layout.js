import Navbar from "./navbar";
import Header from "./header";
const Layout = ({ children }) => {
  return (
    <>
      <div className="layout-wrap">
        <Navbar />
        <div className="section-content-right">
          {/* <!-- header-dashboard --> */}
          <Header />
          { children }
        </div>
      </div>
    </>
  );
};
export default Layout;
