const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');
const dotenv = require('dotenv');
const path = require('path');
const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');

const quotesFilePath = path.join(__dirname, 'quotes.csv');

dotenv.config();

const app = express();
const port = 5001;

app.use(cors());
app.use(bodyParser.json());

// Serve static files from the root folder (two levels up from backend folder)
app.use(express.static(path.join(__dirname, '../../'))); // This should point to the root directory

// Catch-all route to serve the index.html from the root directory

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.post('/api/contact', (req, res) => {
  const { firstName, lastName, email, subject } = req.body;

  const formattedSubject = `Contact Form Submission from ${firstName} ${lastName}`;
  const formattedBody = `
    Name: ${firstName} ${lastName}
    Email: ${email}
    Subject: ${subject}
  `;

  console.log('Received form data:', req.body);  // Log the incoming form data
  console.log('Email User:', process.env.EMAIL_USER);  // Log the email user for debugging

  const mailoptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: formattedSubject,
    text: formattedBody,
  };

  transporter.sendMail(mailoptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ message: 'Error sending email' });
    }

    console.log('Email sent:', info.response);
    return res.status(200).json({ message: 'Email sent' });
  });
});

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