import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { GrHomeRounded } from "react-icons/gr";
import {
  FaBuilding,
  FaUserFriends,
  FaCreditCard,
  FaBoxOpen,
  FaSignOutAlt,
} from "react-icons/fa";

import LAPO from "../assets/LAPO.png";
import VECTOR from "../assets/Vector.png";

const AppSidebar = () => {
  const location = useLocation();
  const [activePath, setActivePath] = useState("");

  // Set Dashboard active by default when on home page
  useEffect(() => {
    setActivePath(location.pathname === "/" ? "/" : location.pathname);
  }, [location.pathname]);

  const menuItems = [
    { name: "Dashboard", icon: <GrHomeRounded />, path: "/dashboard" },
    { name: "Branches", icon: <FaBuilding />, path: "/branches" },
    { name: "Roles", icon: <FaUserFriends />, path: "/roles" },
    { name: "Users", icon: <FaUserFriends />, path: "/users" },
    { name: "Card Scheme", icon: <FaCreditCard />, path: "/card-scheme" },
    { name: "Card Profile", icon: <FaCreditCard />, path: "/card-profile" },
    { name: "Card Request", icon: <FaCreditCard />, path: "/card-request" },
    { name: "Stock", icon: <FaBoxOpen />, path: "/stock" },
    { name: "Cards", icon: <FaCreditCard />, path: "/cards" },
    {
      name: "Authorization List",
      icon: <FaCreditCard />,
      path: "/authorization-list",
    },
    {
      name: "Authorization Queue",
      icon: <FaCreditCard />,
      path: "/authorization-queue",
    },
    { name: "Trail", icon: <FaCreditCard />, path: "/trail" },
    { name: "Account", icon: <FaUserFriends />, path: "/account" },
  ];

  const handleLinkClick = (path) => {
    setActivePath(path);
  };

  return (
    <aside className="app-sidebar">
      <div>
        <div className="sidebar-header">
          <img src={LAPO} alt="LAPO Logo" />
        </div>

        <nav className="sidebar-menu">
          {menuItems.map((item, index) => (
            <Link
              to={item.path}
              key={index}
              className={`menu-item ${
                activePath === item.path ? "active" : ""
              }`}
              onClick={() => handleLinkClick(item.path)}
            >
              <span className="menu-icon">{item.icon}</span>
              <span className="menu-text">{item.name}</span>
            </Link>
          ))}
        </nav>
      </div>

      <div className="sidebar-footer">
        <button className="logout-button">
          <FaSignOutAlt />
          <small>Logout</small>
        </button>

        <div className="powered-by">
          <small>POWERED BY</small>
          <img src={VECTOR} alt="Powered by Cardinfra" />
        </div>
      </div>
    </aside>
  );
};

export default AppSidebar;
