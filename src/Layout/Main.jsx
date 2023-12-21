import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../Pages/Shared/NavBar/NavBar";
import Footer from "../Pages/Shared/Footer/Footer";
import AuthProvider from "../AuthProvider/AuthProvider";

const Main = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";
  const isRegisterPage = location.pathname === "/register";

  return (
    <div>
      <AuthProvider>
        {!isLoginPage && !isRegisterPage && <NavBar></NavBar>}
        <Outlet></Outlet>
        {!isLoginPage && !isRegisterPage && <Footer></Footer>}
      </AuthProvider>
    </div>
  );
};

export default Main;
