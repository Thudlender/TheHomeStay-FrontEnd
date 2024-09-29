import React from "react";
import UserProfile from "./UserProfile";
import LoginButton from "./LoginButton";
import RegisterButton from "./RegisterButton";
import { useAuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { user } = useAuthContext();
  const menus = {
    ROLES_ADMIN: [
      { name: "Add Home Stay", link: "/add" },
      { name: "Search", link: "/search" },
      { name: "Dashboard", link: "/dashboard" },
    ],
    ROLES_USER: [{ name: "Search", link: "/search" }],
    ROLES_MODERATOR: [
      { name: "Add Home Stay", link: "/add" },
      { name: "Search", link: "/" },
    ],
  };

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a href="/" className="btn btn-ghost text-xl">
            The Home Stay
          </a>
        </div>
        <div className="flex-none">
          <div className="navbar-end">
            <a href="/Add" className="btn">
              ADD MENU
            </a>
          </div>

          {user ? (
            <UserProfile />
          ) : (
            <div className="flex space-x-2">
              <LoginButton />
              <RegisterButton />
            </div>
          )}
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
        >
          {user &&
            menus[user.roles[0]].map((menuItem) => (
              <li key={menuItem.name}>
                <a href={menuItem.link}>{menuItem.name}</a>
              </li>
            ))}
        </ul>
        <a className="btn btn-ghost text-xl">Home Stay</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1"></ul>
      </div>{" "}
    </div>
  );
};

export default Navbar;
