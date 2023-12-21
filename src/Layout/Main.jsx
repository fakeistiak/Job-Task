import { Outlet } from "react-router-dom";
import NavBar from "../Pages/Shared/NavBar/NavBar";
import Footer from "../Pages/Shared/Footer/Footer";
import AuthProvider from "../AuthProvider/AuthProvider";

const Main = () => {
    return (
      <div>
        <AuthProvider>
          <NavBar></NavBar>
          <Outlet></Outlet>
          <Footer></Footer>
        </AuthProvider>
      </div>
    );
};

export default Main;