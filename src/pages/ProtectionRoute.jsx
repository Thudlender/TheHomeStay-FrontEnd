import { Navigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import { Children } from "react";

const ProtectedRoute = () => {
    const {user} = useAuthContext();
    if(!user){
        return <Navigate to="/login"/>
    }
  return Children;
};

export default ProtectedRoute;

