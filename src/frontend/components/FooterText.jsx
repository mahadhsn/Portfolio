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

    fetch("https://api.github.com/repos/mahadhsn/Portfolio/commits?per_page=1")
      .then((res) => res.json())
      .then((data) => {
        if (data && data.length > 0) {
          const date = new Date(
            data[0].commit.committer.date,
          ).toLocaleDateString("en-GB");
          setLastUpdated(date);
          localStorage.setItem(
            "lastUpdatedCache",
            JSON.stringify({
              date,
              timestamp: Date.now(),
            }),
          );
        }
      })
      .catch(() => {
        if (cached) {
          const { date } = JSON.parse(cached);
          setLastUpdated(date);
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
