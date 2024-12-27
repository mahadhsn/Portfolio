const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');
const dotenv = require('dotenv');
const path = require('path');

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

app.get('/api/quote', async (req, res) => {
  try {
    const options = {
      headers: {
        'X-Api-Key': process.env.API_KEY,
      },
    };
    const response = await axios.get(
      'https://api.api-ninjas.com/v1/quotes?category=inspirational',
      options
    );
    const quote = response.data[0] || { quote: 'No quote available', author: 'Unknown' };
    res.json(quote);
  } catch (error) {
    console.error('Error fetching quote:', error);
    res.status(500).json({ message: 'Error fetching the quote' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

app.get('*', (req, res) => {
  const indexPath = path.join(__dirname, '../../index.html');  // Correct path to the root index.html
  console.log('Serving index.html from:', indexPath); // Optional: log the path for debugging
  res.sendFile(indexPath);
});