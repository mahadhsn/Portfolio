import { useState, useEffect } from "react";

const Quotes = () => {
  const API_BASE = (typeof window !== "undefined" ? window.location.origin : (import.meta?.env?.VITE_API_BASE_URL || "")); // auto-detect preview origin, fallback to explicit base

  const normalizeQuote = (data) => {
    // Handle null/undefined
    if (data == null) return { quote: "", author: "" };

    // If it's a string, treat as the quote text
    if (typeof data === "string") {
      return { quote: data, author: "" };
    }

    // If it's an array, use the first item
    if (Array.isArray(data)) {
      return normalizeQuote(data[0]);
    }

    // Unwrap common container
    if (data && typeof data === "object" && data.data) {
      return normalizeQuote(data.data);
    }

    // If object: create a case-insensitive view of keys
    if (data && typeof data === "object") {
      const lc = Object.fromEntries(
        Object.entries(data).map(([k, v]) => [String(k).toLowerCase(), v])
      );

      // If nested quote object exists (case-insensitive)
      if (lc.quote && typeof lc.quote === "object") {
        const q = lc.quote;
        const qlc = Object.fromEntries(
          Object.entries(q).map(([k, v]) => [String(k).toLowerCase(), v])
        );
        const quote = qlc.text || qlc.quote || qlc.content || qlc.message || "";
        const author =
          qlc.author || qlc.source || qlc.by || qlc.speaker || lc.author || lc.source || lc.by || lc.speaker || "";
        return { quote, author };
      }

      // Standard flat shapes (case-insensitive)
      const quote = lc.quote || lc.text || lc.content || lc.message || "";
      const author = lc.author || lc.source || lc.by || lc.speaker || "";
      return { quote, author };
    }

    return { quote: "", author: "" };
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
      if (process?.env?.NODE_ENV !== "production") {
        // eslint-disable-next-line no-console
        console.log("/api/quote payload:", raw, "=>", { quote, author });
      }

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
    <div className="quote-container text-center p-6 mx-auto bg-bglight dark:bg-bgdark text-textlight dark:text-textdark rounded-lg shadow-lg">
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