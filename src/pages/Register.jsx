import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../services/auth.service";
import Swal from "sweetalert2";


const Register = () => {
    const [user, setUser] = useState({
      username: "",
      email: "",
      UserPassword: "",
    });
const navigate = useNavigate();
const handleChange = (e) => {
  const { name, value } = e.target;
    setUser({...user, [name]:value});
};
const handleSubmit = async () => {
    try {
        const register = await AuthService.register(
          user.username, 
          user.email, 
          user.UserPassword
        );
        if(register.status === 200) {
          console.log(hello) //แก้
            Swal.fire({
                title: "User Registration",
                text: register.data.message,
                icon: "success",
            });
            setUser({
                username: "",
                email:"",
                UserPassword:"",
            });
            navigate("/login");
        }
    }catch (error) {
     console.log(error);
     Swal.fire({
        title: "user Registration",
        text: error.response.data.message || error.message,
        icon: "error",
     });
    }
};
const handleCancel = () => {
    setUser({
      username: "",
      email: "",
      UserPassword: "",
    });
    navigate("/");
};

return (
  <div className="container mx-auto max-w-96 my auto">
    <label className="input input-bordered flex items-center gap-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="currentColor"
        className="h-4 w-4 opacity-70"
      >
        <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
        <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
      </svg>
      <input
        type="text"
        className="grow"
        placeholder="Email"
        name="email"
        onChange={handleChange}
        value={user.email}
      />
    </label>
    <label className="input input-bordered flex items-center gap-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="currentColor"
        className="h-4 w-4 opacity-70"
      >
        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
      </svg>
      <input
        type="text"
        className="grow"
        placeholder="Username"
        onChange={handleChange}
        name="username"
        value={user.username}
      />
    </label>
    <label className="input input-bordered flex items-center gap-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="currentColor"
        className="h-4 w-4 opacity-70"
      >
        <path
          fillRule="evenodd"
          d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
          clipRule="evenodd"
        />
      </svg>
      <input
        type="password"
        className="grow"
        placeholder="Password"
        onChange={handleChange}
        name="UserPassword"
        value={user.UserPassword}
      />
    </label>
    <div className="flex mx-16 justify-between">
      {" "}
      <button className="btn btn-success w-20" onClick={handleSubmit}>
        Login
      </button>
      <button className="btn btn-error" onClick={handleCancel}>
        Cancel
      </button>
    </div>
  </div>
);
};


export default Register;
