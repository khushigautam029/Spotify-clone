import { FaMusic } from 'react-icons/fa';
import './Playlist.css';

const songs = [
    {
      title: "Tera Zikr",
      artist: "Darshan Raval",
      src: "tera_zikr.mp3",
      image: "tera_zikr.jpeg",
    },
    {
      title: "NO LOVE",
      artist: "Shubh",
      src: "no_love.mp3",
      image: "no_love.jpg",
    },
    {
      title: "Water",
      artist: "Diljit Dosanjh",
      src: "water.mp3",
      image: "water.jpg",
    },
    {
      title: "Chaleya",
      artist: "Arijit Singh",
      src: "chaleya.mp3",
      image: "chaleya.jpg",
    },
  ];

function Playlist() {
    return (
        <div className="playlist">
            <h4>Playlist</h4>
            <ul>
                {songs.map((song, index) => (
                    <li key={index}>
                        <FaMusic className="icon" /> {song.title} - {song.artist}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Playlist;
