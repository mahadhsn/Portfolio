import { useState, useEffect } from "react";

const Quotes = () => {
  const API_BASE = import.meta?.env?.VITE_API_BASE_URL || ""; // e.g., https://your-app.vercel.app

  const normalizeQuote = (data) => {
    if (!data || typeof data !== "object") return { quote: "", author: "" };
    // Support multiple possible response shapes
    const quote = data.quote || data.text || data.content || data.message || "";
    const author = data.author || data.source || data.by || data.speaker || "";
    return { quote, author };
  };
  const [quoteData, setQuoteData] = useState({ quote: "", author: "" });
  const [isLoading, setIsLoading] = useState(true);

  const fetchRandomQuote = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(`${API_BASE}/api/quote`, { cache: "no-store" });

      if (!res.ok) {
        console.error("/api/quote returned status:", res.status);
        setQuoteData({ quote: "Error fetching quote", author: "Unknown" });
        return;
      }

      const raw = await res.json();
      const { quote, author } = normalizeQuote(raw);

      setQuoteData({
        quote: quote && String(quote).trim() ? quote : "No quote available",
        author: author && String(author).trim() ? author : "Unknown",
      });
    } catch (error) {
      console.error("Error fetching the quote:", error);
      setQuoteData({ quote: "Error fetching quote", author: "Unknown" });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchRandomQuote();
  }, []);

  return (
    <div className="quote-container text-center p-6 mx-auto bg-neutral-900 text-textlight dark:text-textdark rounded-lg shadow-lg">
      {isLoading ? (
        <p className="text-lg font-light">Loading...</p>
      ) : (
        <>
          <div className="quote-text">
            <p className="italic text-lg mb-4 font-semibold">
              "{quoteData.quote}"
            </p>
          </div>
          <div className="quote-author">
            <p className="text-xl font-light">- {quoteData.author}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Quotes;