import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import AddPage from "../pages/AddPage";
import Edit from "../pages/Edit";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Layout from "../Components/Layout";

// const Home = lazy(() => import("../Pages/Home"));
// const AddPage = lazy(() => import("../Pages/AddPage"));
// const Edit = lazy(() => import("../Pages/Edit"));
// const RegisterForm = lazy(() => import("../Pages/RegisterForm"));
// const LoginForm = lazy(() => import("../Pages/LoginForm"));
// const Layout = lazy(() => import("../Components/Layout"));
// const AdminLayout = lazy(() => import("../Components/AdminLayout"));
// const AdminOrMod = lazy(() => import("./AdminOrMod"));
// const NotPermitted = lazy(() => import("../Pages/NotPermitted"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "add",
        element: <AddPage />,
      },
      {
        path: "Edit/:id",
        element: <Edit />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/dashboard/",
  },
]);
export default router;
