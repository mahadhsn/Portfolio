const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');

const quotesFilePath = path.join(__dirname, 'quotes.csv');

exports.handler = async (event, context) => {
  try {
    const quotes = await loadQuotesFromCSV();
    if (quotes.length === 0) {
      throw new Error('No quotes available in the CSV file');
    }

    // Select a random quote
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const selectedQuote = quotes[randomIndex];

    return {
      statusCode: 200,
      body: JSON.stringify(selectedQuote),
    };
  } catch (error) {
    console.error('Error fetching quote:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error fetching quote' }),
    };
  }
};

const loadQuotesFromCSV = () => {
  return new Promise((resolve, reject) => {
    const quotes = [];
    fs.createReadStream(quotesFilePath)
      .pipe(csv(['author', 'quote']))
      .on('data', (row) => {
        quotes.push(row);
      })
      .on('end', () => {
        resolve(quotes);
      })
      .on('error', (error) => {
        reject(error);
      });
  });
};