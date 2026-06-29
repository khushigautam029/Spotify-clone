import { FaBell, FaChevronLeft, FaChevronRight, FaUsers } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import "./TopNavbar.css";

function TopNavbar() {
  return (
    <div className="top-navbar">
      <div className="nav-left">
        <FaChevronLeft className="bi bi-chevron-left"/>
        <FaChevronRight className="bi bi-chevron-right"/>
        <div className="search-bar">
          <FiSearch className="search-icon" />
          <input type="text" placeholder="What do you want to play?" />
        </div>
      </div>
      <div className="nav-right">
        <button className="premium-btn">Explore Premium</button>
        <FaBell className="bi bi-bell-fill"/>
        <FaUsers className="bi bi-people-fill"/>
        <div className="user-circle">K</div>
      </div>
    </div>
  );
}

export default TopNavbar;
