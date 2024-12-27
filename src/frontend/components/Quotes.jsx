import React, { useState, useEffect } from 'react';

const Quotes = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  const fetchRandomQuote = async () => {
    try {
      const response = await fetch('/.netlify/functions/contact');
      const data = await response.json();
      setQuote(data.quote || 'No quote available');
      setAuthor(data.author || 'Unknown');
    } catch (error) {
      console.error('Error fetching the quote:', error);
    }
  };
    

  useEffect(() => {
    fetchRandomQuote();
  }, []);

  return (
    <div className="quote-container text-center p-6 mx-auto max-w-2xl bg-neutral-900-50 text-white rounded-lg shadow-lg">
      {quote && (
        <>
          <div className="quote-text">
            <p className="italic text-lg mb-4 font-semibold">"{quote}"</p>
          </div>
          <div className="quote-author">
            <p className="text-xl font-light">- {author}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Quotes;