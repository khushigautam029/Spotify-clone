import { BrowserRouter } from 'react-router-dom';
import "./App.css";
import Player from "./components/Player";
import PlaylistGrid from "./components/PlaylistGrid";
import Sidebar from "./components/Sidebar";
import { ThemeProvider } from "./components/ThemeContext";
import TopNavbar from './components/TopNavbar';

function App() {
  const song = [
    {
      title: "Tera Zikr",
      artist: "Darshan Raval",
      src:"tera_zikr.mp3",
      image: "tera_zikr.jpeg",
    },
    {
      title: "NO LOVE",
      artist: "Shubh",
      src:"no_love.mp3",
      image: "no_love.jpg",
    },
    {
      title: "Water",
      artist: "Diljit Dosanjh",
      src:"water.mp3",
      image: "water.jpg",
    },
    {
      title: "Chaleya",
      artist: "Arijit Singh",
      src:"chaleya.mp3",
      image: "chaleya.jpg",
    },
  ];

  return (
    <BrowserRouter>
      <ThemeProvider>
        <div className="app">
          <Sidebar />
          <div className="main-content">
            <TopNavbar />
            <PlaylistGrid />
            <Player songs={song} />
          </div>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
