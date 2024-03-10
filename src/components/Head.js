import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-2 m-2 shadow-lg">
      <div className="flex items-center col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 cursor-pointer"
          src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp"
          alt="menu"
        />
        <a href="/">
          <img
            className="h-12"
            src="https://t3.ftcdn.net/jpg/03/00/38/90/360_F_300389025_b5hgHpjDprTySl8loTqJRMipySb1rO0I.jpg"
            alt="logo"
          />
        </a>
      </div>
      <div className="flex col-span-10 items-center justify-center">
        <input
          className="h-8 w-1/2 border border-gray-400 rounded-l-full p-2"
          type="text"
          placeholder="Search"
        />
        <button className=" border border-gray-400 h-8 w-8 rounded-r-full overflow-hidden">
          <img
            className=""
            src="https://t3.ftcdn.net/jpg/04/99/34/78/360_F_499347841_IXq0bLOPN4MkKAa71nP3WMQq6LVlgeTO.jpg"
            alt="search"
          />
        </button>
      </div>
      <div className="col-span-1 flex items-center">
        <img
          className="h-8"
          src="https://static.vecteezy.com/system/resources/previews/005/005/788/original/user-icon-in-trendy-flat-style-isolated-on-grey-background-user-symbol-for-your-web-site-design-logo-app-ui-illustration-eps10-free-vector.jpg"
          alt="user"
        />
      </div>
    </div>
  );
};

export default Head;
