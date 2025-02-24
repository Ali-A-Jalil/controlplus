import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faKey,
  faSignOutAlt,
  faImage,
  faCog, // أيقونة الإعدادات
  faBell, // أيقونة الإشعارات
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Header = ({ user, onLogout }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setShowMenu(!showMenu);
  const toggleNotifications = () => setShowNotifications(!showNotifications);

  return (
    <header className="bg-blue-500 text-white p-4 flex justify-between items-center fixed top-0 left-0 w-full z-1">
      <h1 className="text-xl font-bold pl-64">AnwarIstanbul</h1>
      
      <div className="flex items-center gap-4 pr-5">
        {/* أيقونة الإشعارات */}
        <div className="relative">
          <FontAwesomeIcon
            icon={faBell}
            className="text-xl cursor-pointer"
            onClick={toggleNotifications}
          />
          {showNotifications && (
            <div className="absolute right-0 mt-2 bg-white text-black rounded shadow-md w-60 z-50">
              <ul className="p-2">
                <li className="p-2 border-b border-gray-200">📢 إشعار 1</li>
                <li className="p-2 border-b border-gray-200">🔔 إشعار 2</li>
                <li className="p-2">💡 إشعار 3</li>
              </ul>
            </div>
          )}
        </div>

        {/* أيقونة الإعدادات */}
        <FontAwesomeIcon
          icon={faCog}
          className="text-xl cursor-pointer"
          onClick={() => navigate("/settings-management")}
        />

        {/* قائمة المستخدم */}
        <div className="relative">
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={toggleMenu}
          >
            <img
              src={user.avatar || "https://via.placeholder.com/150"} // صورة افتراضية
              alt="User Avatar"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <span className="font-bold">{user.name}</span>
              <p className="text-sm">{user.nickname}</p>
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
                  onClick={onLogout}
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
