import { useState } from "react";
import "./PlaylistGrid.css";

const playlists = [
  {
    id: 1,
    title: "Today's Top Hits",
    image: "darshan.jpeg",
    description: "Darshan on top of the Hottest 50!",
  },
  {
    id: 2,
    title: "Viral Hits",
    image: "arijit.jpeg",
    description: "Viral, trending and taking off.",
  },
  {
    id: 3,
    title: "This is Taylor Swift",
    image: "taylor_swift.jpg",
    description: "The essential tracks, all in one playlist.",
  },
  {
    id: 4,
    title: "Songs to Sing in the Shower",
    image: "old.jpeg",
    description: "Old is GOLD.",
  },
  {
    id: 5,
    title: "Songs to Sing in the Shower",
    image: "punjab.jpeg",
    description: "Splash and sing-along.",
  },
];

const recentlyPlayed = [
  {
    id: 101,
    title: "Kesariya",
    image: "kesariya.jpeg",
    description: "Love anthem from Brahmāstra.",
  },
  {
    id: 102,
    title: "Pasoori",
    image: "pasoori.jpeg",
    description: "Hit Coke Studio track.",
  },
  {
    id: 103,
    title: "Tum Mile",
    image: "tum_mile.jpeg",
    description: "Romantic classic.",
  },
  {
    id: 104,
    title: "Apna Bana Le",
    image: "apnabanale.jpeg",
    description: "Emotional and beautiful melody.",
  },
  {
    id: 105,
    title: "Lutt Putt Gaya",
    image: "lutt_putt.jpeg",
    description: "Energetic Bollywood hit.",
  },
];

const genres = [
  {
    id: 201,
    title: "Pop",
    image: "pop.jpeg",
  },
  {
    id: 202,
    title: "Hip-Hop",
    image: "hipHop.jpeg",
  },
  {
    id: 203,
    title: "Indie",
    image: "indie.jpeg",
  },
  {
    id: 204,
    title: "Old Classics",
    image: "old_song.jpeg",
  },
  {
    id: 205,
    title: "International",
    image: "intern.jpeg",
  },
];

function PlaylistGrid() {
  const [liked, setLiked] = useState([]);

  const toggleLike = (id) => {
    setLiked((prevLiked) =>
      prevLiked.includes(id)
        ? prevLiked.filter((likedId) => likedId !== id)
        : [...prevLiked, id]
    );
  };

  return (
    <div className="playlist-grid">
      <h2>More Songs You Will Like</h2>
      <div className="playlist-cards">
        {playlists.map((playlist) => (
          <div className="playlist-card" key={playlist.id}>
            <img src={playlist.image} alt={playlist.title} />
            <div className="card-content">
              <h3>{playlist.title}</h3>
              <p>{playlist.description}</p>
            </div>
            <button
              className={`like-button ${liked.includes(playlist.id) ? "liked" : ""}`}
              onClick={() => toggleLike(playlist.id)}
            >
              ❤️
            </button>
          </div>
        ))}
      </div>

      <h2>Recently Played</h2>
      <div className="playlist-cards">
        {
          recentlyPlayed.map((track) => (
            <div className="playlist-card" key={track.id}>
              <img src={track.image} alt={track.title} />
              <div className="card-content">
                <h3>{track.title}</h3>
                <p>{track.description}</p>
              </div>
            </div>
          ))
        }
      </div>

      <h2>Genre Categories</h2>
      <div className="playlist-cards">
        {genres.map((genre) => (
          <div className="playlist-card" key={genre.id}>
            <img src={genre.image} alt={genre.title} />
            <div className="card-content">
              <h3>{genre.title}</h3>
              <p>Explore the best of {genre.title} hits.</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlaylistGrid;
