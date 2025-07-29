import { useEffect, useState } from "react";

const Song = () => {
  const [songData, setSongData] = useState(null);

  useEffect(() => {
    const fetchRecentSong = async () => {
      const apiKey = import.meta.env.VITE_LASTFM_API;
      const userName = import.meta.env.VITE_LASTFM_USERNAME;

      try {
        const response = await fetch(
          `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${userName}&api_key=${apiKey}&format=json`,
        );
        const data = await response.json();
        const trackInfo = data.recenttracks?.track?.[0];

        if (trackInfo) {
          const nowPlaying = trackInfo["@attr"]?.nowplaying === "true";
          setSongData({
            name: trackInfo.name,
            artist: trackInfo.artist["#text"],
            album: trackInfo.album["#text"],
            image: trackInfo.image?.[1]["#text"],
            url: trackInfo.url,
            date: trackInfo.date
              ? new Date(Date.parse(trackInfo.date["#text"] + " UTC"))
              : null,
            nowPlaying,
          });
        }
      } catch (error) {
        console.error("Error fetching track: ", error);
      }
    };

    fetchRecentSong();
  }, []);

  return (
    <>
      {songData && (
        <div className="flex items-center gap-4 bg-neutral-900-50 p-4 rounded-lg shadow-md min-w-[18rem] md:min-w-[22rem]">
          <img
            src={songData.image}
            alt={`${songData.name} album art`}
            className="w-16 h-16 rounded-md shadow"
          />
          <div className="flex flex-col">
            <a
              href={songData.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-black dark:text-white hover:underline"
            >
              {songData.name}
            </a>
            <span className="text-sm text-neutral-600 dark:text-neutral-400">
              {songData.artist}
            </span>
            {songData.nowPlaying && (
              <div className="flex items-center gap-2 mt-1">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-xs text-green-600 dark:text-green-400">
                  Currently playing
                </span>
              </div>
            )}
            {songData.date && (
              <span className="text-xs text-neutral-500 dark:text-neutral-500 mt-1">
                Played at{" "}
                {songData.date.toLocaleTimeString(undefined, {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </span>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Song;
