import { useState, useEffect } from "react";

const FooterText = () => {
  const [lastUpdated, setLastUpdated] = useState("");

  useEffect(() => {
    fetch(`/last-updated.json?ts=${Date.now()}`)
      .then((res) => res.json())
      .then((data) => {
        if (data?.lastUpdated) {
          setLastUpdated(data.lastUpdated);
          console.log("Fetched lastUpdated:", data.lastUpdated);
          // localStorage.setItem(
          //   "lastUpdatedCache",
          //   JSON.stringify({ date: data.lastUpdated, timestamp: Date.now() })
          // );
        }
      });
  }, []);

  return (
    <div className="text-center text-accentlight dark:text-accentdark">
      <p>
        mahadhssn &copy; {new Date().getFullYear()} | Updated:{" "}
        {lastUpdated || "Loading..."}
      </p>
    </div>
  );
};

export default FooterText;
