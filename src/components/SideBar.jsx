import React from "react";
import SideBarContent from "./SideBarContent";
import { UserAuth } from "./AuthContext";
import { useLocation } from "react-router-dom";

const SideBar = ({ open }) => {
  const { user } = UserAuth();
  let Ids = useLocation();

  return (
    <div
      className={`flex flex-col  bg-neutral-800 ${Ids.pathname == "/signup" || Ids.pathname == "/login" ? "hidden" : null} shadow-lg transition-all duration-200  ${open ? "w-64" : "w-20"} border-r  border-r-neutral-700 `}
    >
      <div className="flex flex-col items-center justify-center py-3">
        {user.displayName &&
          (user.photoURL ? (
            <img
              src={user ? user?.photoURL : null}
              alt=""
              className={`rounded-full transition-all duration-200 ${open ? "h-24 w-24 mb-2" : "h-8 w-8 mb-0"}`}
            />
          ) : (
            <button className={` transition-all duration-200 ${open ? "h-24 w-24 mb-2" : "h-8 w-8 mb-0 "}  bg-[#ff0000] text-xl font-[500] text-white hover:bg-[#ff0000]/90`}>
              {user.displayName ? user?.displayName?.charAt(0).toUpperCase() : ''}
            </button>
          ))
          }    
            <p className={`text-white text-sm font-[500] transition-all duration-50 tracking-wide  ${open ? "" : "hidden"}`}>
                Your Channel</p>
            <p className={`text-[#909090] transition-all duration-50 text-xs ${open ? "" : "hidden"}`}>{user.displayName && user.displayName}</p>

      </div>


      <SideBarContent open={open} />
    </div>
  );
};

export default SideBar;
