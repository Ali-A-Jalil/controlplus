import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faKey,
  faSignOutAlt,
  faImage,
  faCog,
  faBell,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"; // Import Redux hooks
import { logoutUser } from "../slices/userSlice"; // Import logout action

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Get user from Redux store
  const user = useSelector((state) => state.user.user);

  const toggleMenu = () => setShowMenu(!showMenu);
  const toggleNotifications = () => setShowNotifications(!showNotifications);

  return (
    <header className="bg-blue-500 text-white p-4 flex justify-between items-center fixed top-0 left-0 w-full z-1">
      <h1 className="text-xl font-bold pl-64">AnwarIstanbul</h1>

      <div className="flex items-center gap-4 pr-5">
        {/* Notifications Icon */}
        <div className="relative">
          <FontAwesomeIcon
            icon={faBell}
            className="text-xl cursor-pointer"
            onClick={toggleNotifications}
          />
          {showNotifications && (
            <div className="absolute right-0 mt-2 bg-white text-black rounded shadow-md w-60 z-50">
              <ul className="p-2">
                <li className="p-2 border-b border-gray-200">📢 Notification 1</li>
                <li className="p-2 border-b border-gray-200">🔔 Notification 2</li>
                <li className="p-2">💡 Notification 3</li>
              </ul>
            </div>
          )}
        </div>

        {/* Settings Icon */}
        <FontAwesomeIcon
          icon={faCog}
          className="text-xl cursor-pointer"
          onClick={() => navigate("/settings-management")}
        />

        {/* User Menu */}
        <div className="relative">
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={toggleMenu}
          >
            <img
              src={user?.avatar || "hfile:///C:/Users/DELL/Downloads/2244af71ad0c25f2cb0a8efa167491fb.webphttps://uploads-ssl.webflow.com/6200f5fbbfff19dab55d2228/6201329761c61e45bc873234_61e58a51534066328d04556a_2.jpeg"} // Default image
              alt="User Avatar"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <span className="font-bold">{user?.name || "Guest"}</span>
              <p className="text-sm">{user?.nickname || ""}</p>
            </div>
          </div>

          {showMenu && (
            <div className="absolute right-0 mt-2 bg-white text-black rounded shadow-md w-48 z-50">
              <ul>
                <li
                  className="p-2 hover:bg-gray-200 flex items-center gap-2 cursor-pointer"
                  onClick={() => navigate("/profile")}
                >
                  <FontAwesomeIcon icon={faUser} />
                  View Profile
                </li>
                <li
                  className="p-2 hover:bg-gray-200 flex items-center gap-2 cursor-pointer"
                  onClick={() => alert("Changing password!")}
                >
                  <FontAwesomeIcon icon={faKey} />
                  Change Password
                </li>
                <li
                  className="p-2 hover:bg-gray-200 flex items-center gap-2 cursor-pointer"
                  onClick={() => alert("Changing picture!")}
                >
                  <FontAwesomeIcon icon={faImage} />
                  Change Picture
                </li>
                <li
                  className="p-2 hover:bg-gray-200 flex items-center gap-2 cursor-pointer text-red-500"
                  onClick={() => dispatch(logoutUser())} // Logout via Redux
                >
                  <FontAwesomeIcon icon={faSignOutAlt} />
                  Logout
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
