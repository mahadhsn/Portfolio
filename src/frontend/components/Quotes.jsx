import React, { useState, useEffect } from 'react';

const Quotes = () => {
  const [quoteData, setQuoteData] = useState({ quote: '', author: '' });
  const [isLoading, setIsLoading] = useState(true);

  const fetchRandomQuote = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/.netlify/functions/quote');
      const data = await response.json();
      setQuoteData({
        quote: data.quote || 'No quote available',
        author: data.author || 'Unknown',
      });
    } catch (error) {
      console.error('Error fetching the quote:', error);
      setQuoteData({ quote: 'Error fetching quote', author: 'Unknown' });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchRandomQuote();
  }, []);

  return (
    <div className="quote-container text-center p-6 mx-auto max-w-2xl bg-neutral-900-50 text-white rounded-lg shadow-lg">
      {isLoading ? (
        <p className="text-lg font-light">Loading...</p>
      ) : (
        <>
          <div className="quote-text">
            <p className="italic text-lg mb-4 font-semibold">"{quoteData.quote}"</p>
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