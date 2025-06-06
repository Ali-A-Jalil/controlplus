import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faChartPie,
  faCalendarAlt,
  faChartLine,
  faCog,
  faBell,
  faChartBar,
  faUsers,
  faUserTie,
  faCalculator,
  faBullhorn,
  faTachometerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const navigate = useNavigate();

  return (
    <aside
      className={`bg-gray-800 text-white h-screen transition-all duration-300 fixed top-0 left-0 z-40 ${
        isOpen ? "w-64" : "w-16"
      }`}
    >
      {/* Sidebar Header */}
      <div className="bg-gray-800 text-white flex items-center px-4 py-3">
        <h1 className={`text-lg font-bold ${!isOpen && "hidden"}`}>AnwarIstanbul</h1>
        <FontAwesomeIcon
          icon={faBars}
          className="text-xl cursor-pointer ml-auto"
          onClick={toggleSidebar}
        />
      </div>

      {/* Navigation Links */}
      <nav className="mt-4">
        <ul>
        <li
            className="p-4 flex items-center gap-4 hover:bg-gray-700 cursor-pointer"
            onClick={() => navigate("/dashboard")}
          >
            <FontAwesomeIcon icon={faTachometerAlt} />
            {isOpen && <span>Dashboard</span>}
          </li>
          <li
            className="p-4 flex items-center gap-4 hover:bg-gray-700 cursor-pointer"
            onClick={() => navigate("/overview")}
          >
            <FontAwesomeIcon icon={faChartPie} />
            {isOpen && <span>Overview</span>}
          </li>
          <li
            className="p-4 flex items-center gap-4 hover:bg-gray-700 cursor-pointer"
            onClick={() => navigate("/reservations-management")}
          >
            <FontAwesomeIcon icon={faCalendarAlt} />
            {isOpen && <span>Reservations Management</span>}
          </li>
          <li
            className="p-4 flex items-center gap-2 hover:bg-gray-700 cursor-pointer"
            onClick={() => navigate("/customer-management")}
          >
            <FontAwesomeIcon icon={faUsers} />
            {isOpen && "Customers Management"}
          </li>

          <li
            className="p-4 flex items-center gap-2 hover:bg-gray-700 cursor-pointer"
            onClick={() => navigate("/leads-management")}
          >
            <FontAwesomeIcon icon={faUsers} />
            {isOpen && "Leads Management"}
          </li>

            <li
              className="p-4 flex items-center gap-4 hover:bg-gray-700 cursor-pointer"
              onClick={() => navigate("/reports-management")}
            >
              <FontAwesomeIcon icon={faChartLine} />
              {isOpen && "Reports Management"}
            </li>
            <li
              className="p-4 flex items-center gap-4 hover:bg-gray-700 cursor-pointer"
              onClick={() => navigate("/analytics-management")}
            >
              <FontAwesomeIcon icon={faChartBar} />
              {isOpen && <span>Analytics Management</span>}
            </li>
            <li
              className="p-4 flex items-center gap-4 hover:bg-gray-700 cursor-pointer"
              onClick={() => navigate("/notifications")}
            >
              <FontAwesomeIcon icon={faBell} />
              {isOpen && <span>Notifications</span>}
            </li>
            <li
              className="p-4 flex items-center gap-4 hover:bg-gray-700 cursor-pointer"
              onClick={() => navigate("/settings-management")}
            >
              <FontAwesomeIcon icon={faCog} />
              {isOpen && <span>Settings Management</span>}
            </li>
            {/* HR Section */}
            <li
              className="p-4 flex items-center gap-2 hover:bg-gray-700 cursor-pointer"
              onClick={() => navigate("/hr")}
            >
              <FontAwesomeIcon icon={faUserTie} />
              {isOpen && "HR Management"}
            </li>
          {/* User Management Section */}
            <li
              className="p-4 flex items-center gap-2 hover:bg-gray-700 cursor-pointer"
              onClick={() => navigate("/users")}
            >
              <FontAwesomeIcon icon={faUsers} />
              {isOpen && "User Management"}
            </li>
            <li
              className="p-4 flex items-center gap-4 hover:bg-gray-700 cursor-pointer"
              onClick={() => navigate("/accounting")}
            >
              <FontAwesomeIcon icon={faCalculator} />
              {isOpen && <span>Accounting</span>}
            </li>
            {/* Add Marketing Management */}
            <li
              className="p-4 flex items-center gap-4 hover:bg-gray-700 cursor-pointer"
              onClick={() => navigate("/marketing")}
            >
              <FontAwesomeIcon icon={faBullhorn} />
              {isOpen && <span>Marketing Management</span>}
            </li>

          </ul>
        </nav>
      </aside>



  );

};

export default Sidebar;
