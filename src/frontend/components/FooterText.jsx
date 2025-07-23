import { useState, useEffect } from "react";

const FooterText = () => {
  const [lastUpdated, setLastUpdated] = useState("");

  useEffect(() => {
    const cached = localStorage.getItem("lastUpdatedCache");

    if (cached) {
      const { date, timestamp } = JSON.parse(cached);
      const oneDay = 24 * 60 * 60 * 1000;

      if (Date.now() - timestamp < oneDay) {
        setLastUpdated(date);
        return;
      }
    }

    fetch('/last-updated.json')
    .then((res) => res.json())
    .then((data) => {
      if (data?.lastUpdated) {
        setLastUpdated(data.lastUpdated);
        localStorage.setItem(
          "lastUpdatedCache",
          JSON.stringify({ date: data.lastUpdated, timestamp: Date.now() })
        );
      }
    })
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
