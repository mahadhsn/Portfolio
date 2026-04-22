import { useEffect, useState } from "react";
import { Note } from "./Icons";

const NowPlaying = () => {
  const [songData, setSongData] = useState(null);

  useEffect(() => {
    const fetchRecentSong = async () => {
      const apiKey = import.meta.env.VITE_LASTFM_API;
      const userName = import.meta.env.VITE_LASTFM_USERNAME;
      if (!apiKey || !userName) return;

      try {
        const response = await fetch(
          `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${userName}&api_key=${apiKey}&format=json`,
        );
        const data = await response.json();
        const trackInfo = data.recenttracks?.track?.[0];
        if (trackInfo) {
          setSongData({
            name: trackInfo.name,
            artist: trackInfo.artist["#text"],
            image: trackInfo.image?.[1]["#text"],
            url: trackInfo.url,
            nowPlaying: trackInfo["@attr"]?.nowplaying === "true",
          });
        }
      } catch (error) {
        console.error("Error fetching track:", error);
      }
    };

    fetchRecentSong();
  }, []);

  if (!songData) return null;

  return (
    <a
      href={songData.url}
      target="_blank"
      rel="noopener noreferrer"
      className="now-playing"
    >
      <div
        className="np-cover"
        style={
          songData.image ? { backgroundImage: `url(${songData.image})` } : {}
        }
      >
        {!songData.image && <Note size={16} />}
      </div>
      <div className="np-text">
        <span className="np-title">{songData.name}</span>
        <span className="np-artist">{songData.artist}</span>
      </div>
      {songData.nowPlaying && (
        <div className="np-wave">
          <span />
          <span />
          <span />
          <span />
        </div>
      )}
    </a>
  );
};

export default NowPlaying;
