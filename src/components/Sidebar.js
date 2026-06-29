import {
  FaBook,
  FaHeart,
  FaHome,
  FaMusic,
  FaPlus,
  FaSearch,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Sidebar.css';


function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src="spotify3.png" alt="Spotify Logo" className="sidebar__logo" />

        <div className="sidebar__nav">
          <Link to="#" className="sidebar__navItem">
            <FaHome className="sidebar__icon" />
            <span>Home</span>
          </Link>
          <Link to="#" className="sidebar__navItem">
            <FaSearch className="sidebar__icon" />
            <span>Search</span>
          </Link>
          <Link to="#" className="sidebar__navItem">
            <FaBook className="sidebar__icon" />
            <span>Your Library</span>
          </Link>
        </div>

        <div className="sidebar__nav">
          <Link to="#" className="sidebar__navItem">
            <FaPlus className="sidebar__icon" />
            <span>Create Playlist</span>
          </Link>
          <Link to="#" className="sidebar__navItem">
            <FaHeart className="sidebar__icon heart" />
            <span>Liked Songs</span>
          </Link>
        </div>

        <hr className="sidebar__divider" />
      </div>

      <div className="sidebar__playlists">
        <Link to="#" className="sidebar__playlistItem"><FaMusic className="sidebar__icon" /> Darshan Raval Hits</Link>
        <Link to="#" className="sidebar__playlistItem"><FaMusic className="sidebar__icon" /> Diljit Dosanjh Tracks</Link>
        <Link to="#" className="sidebar__playlistItem"><FaMusic className="sidebar__icon" /> Workout Mix</Link>
        <Link to="#" className="sidebar__playlistItem"><FaMusic className="sidebar__icon" /> Chill Vibes</Link>
      </div>
    </div>
  );
}

export default Sidebar;
