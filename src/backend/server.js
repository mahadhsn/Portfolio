const express = require('express');
const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = 5001;


const cors = require('cors');
app.use(cors());


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