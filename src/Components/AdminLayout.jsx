import { Outlet } from "react-router-dom";
import { AuthProvider } from "../context/AuthContext";
import NavbarTwo from "./NavbarTwo";
import Footer from "./Footer";

const AdminLayout = () => {
  return (
    <AuthProvider>
      <NavbarTwo />
      <Outlet />
      <Footer />
    </AuthProvider>
  );
};

export default AdminLayout;