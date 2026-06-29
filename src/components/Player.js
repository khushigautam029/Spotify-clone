import { useEffect, useRef, useState } from "react";
import { FaPause, FaPlay, FaStepBackward, FaStepForward } from "react-icons/fa";
import "./Player.css";

function Player({ songs }) {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const audioRef = useRef(null);

useEffect(() => {
  if (audioRef.current) {
    audioRef.current.load();
    if (isPlaying) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.log("Autoplay error:", error);
        });
      }
    }
  }
}, [currentSongIndex, isPlaying]);

  if (!songs || songs.length === 0) {
    return <div className="player">No songs available</div>;
  }

  const currentSong = songs[currentSongIndex];

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };

  const handleSeek = (e) => {
    const newTime = e.target.value;
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const formatTime = (time) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
  };

  const playNext = () => {
    const nextIndex = (currentSongIndex + 1) % songs.length;
    setCurrentSongIndex(nextIndex);
    setIsPlaying(true);
  };

  const playPrev = () => {
    const prevIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    setCurrentSongIndex(prevIndex);
    setIsPlaying(true);
  };

  return (
    <div className="player">
      <audio
        ref={audioRef}
        src={currentSong.src}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={playNext}
      />

      <div className="player__left">
        <img
          src={currentSong.image}
          alt="Current Song"
          className="player__albumArt"
        />
        <div className="player__songInfo">
          <h4>{currentSong.title}</h4>
          <p>{currentSong.artist}</p>
        </div>
      </div>

      <div className="player__center">
        <FaStepBackward className="player__icon" onClick={playPrev} />
        {isPlaying ? (
          <FaPause className="player__icon play" onClick={togglePlay} />
        ) : (
          <FaPlay className="player__icon play" onClick={togglePlay} />
        )}
        <FaStepForward className="player__icon" onClick={playNext} />
      </div>

      <div className="player__right">
        <span>{formatTime(currentTime)}</span>
        <input
          type="range"
          min={0}
          max={duration}
          value={currentTime}
          step="0.01"
          onChange={handleSeek}
          className="player__progressBar"
        />
        <span>{formatTime(duration)}</span>
      </div>
    </div>
  );
}

export default Player;
