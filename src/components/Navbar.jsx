import React from "react";
import logo from "../assets/studio.svg";
import menu from "../assets/menu.svg";
import search from "../assets/search.svg";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "./AuthContext";
import person from "../assets/person.svg";
import { useParams } from "react-router-dom";

const Navbar = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();
  // console.log(user)
  useParams();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="font-roboto sticky top-0 z-[100] flex items-center justify-between bg-[#282828] ">

      {/* Menu */}
      <div className="flex items-center mx-3 sm:mx-5">
        <svg
          width="64"
          className="w-7 text-[#909090]"
          height="64"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 8h24M4 16h24M4 24h24"
          />
        </svg>

        {/* Logo */}
        <Link to="/" className="">
          <img src={logo} alt="" className="ml-4 w-24 sm:ml-6" />
        </Link>
      </div>
      {/* Search Bar */}
      <div className="mx-3 flex shrink rounded-md  bg-[#262626] text-white ring-1 ring-[#383838] sm:w-[50%] ">
        <img
          src={search}
          alt=""
          className="pointer-events-none mx-2 w-7 sm:mx-2 "
        />{" "}
        <input
          type="text"
          placeholder="Search"
          className="   w-full rounded-md bg-[#262626] py-[0.4rem] pl-3   placeholder:text-zinc-500"
        ></input>
      </div>

      {/* Log In & Sign in */}
      {user?.email ? (
        <div className="flex shrink-0 items-center pr-3">
          <button className="mr-3 h-10 w-10 rounded-full bg-[#ff0000] text-xl font-[500] text-white hover:bg-[#ff0000]/90">
            {user.displayName.charAt(0).toUpperCase()}
          </button>
          <button
            onClick={handleLogout}
            className="flex cursor-pointer items-center justify-center rounded-full border border-[#37a6ff] bg-[#272727] px-3 py-2 text-[#37a6ff]"
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="flex shrink-0 items-center pr-3">
          {/* <Link to="/login">
          <button className="pr-4 text-white">Sign In</button>{" "}
        </Link> */}
          <Link to="/signup">
            <button className=" flex cursor-pointer items-center justify-center rounded-full border border-[#37a6ff] bg-[#272727] px-3 py-2 text-[#37a6ff] hover:bg-[#263850]">
              <img src={person} alt="" className="w-5 " />
              <p className="pl-1.5 text-sm">Sign Up</p>
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
