import api from "./api";
import TokenService from "./token.service";

const API_URL = import.meta.env.VITE_AUTH_API;

const register = async (username, email, userPassword) => {
    return await api.post(API_URL + "/signup", { username, email, userPassword });
};

const login = async (username, userPassword) =>{
    const response = await api.post(API_URL + "/signin", {username, userPassword});
    if(response.data.accessToken){
        localStorage.getItem("accessToken", JSON.stringify(response.data.accessToken));
        localStorage.setItem(
            "user",
            JSON.stringify(response.data)
        );
        localStorage.setItem("user", JSON.stringify(response));
    }
    return response;
};

const logout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");
  };

const AuthService = {
    register, login, logout,
};

export default AuthService;
