import { Outlet, useLocation } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
// import AuthHeader from "../header/authHeader/AuthHeader";

const Layout = () => {
  const pathname = useLocation().pathname;

  return (
    <div className="wrapper">
      {pathname !== "/auth" && <Header /> }

      <main>
        <Outlet />
      </main>
      {pathname !== "/auth" && <Footer />}
    </div>
  );
};

export default Layout;
