const axios = require('axios');

exports.handler = async (event, context) => {
  try {
    const options = {
      headers: {
        'X-Api-Key': process.env.API_KEY, // Set API_KEY in Netlify's environment variables
      },
    };
    const response = await axios.get(
      'https://api.api-ninjas.com/v1/quotes',
      options
    );
    const quote = response.data[0] || { quote: 'No quote available', author: 'Unknown' };
    return {
      statusCode: 200,
      body: JSON.stringify(quote),
    };
  } catch (error) {
    console.error('Error fetching quote:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error fetching quote' }),
    };
  }
};