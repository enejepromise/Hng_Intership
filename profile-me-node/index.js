require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());  // Allow cross-origin requests

const PORT = process.env.PORT || 3000;

app.get('/me', async (req, res) => {
  const timestamp = new Date().toISOString();
  let fact = 'Could not fetch a cat fact at the moment.';

  try {
    const response = await axios.get('https://catfact.ninja/fact', { timeout: 2000 });
    if (response.status === 200 && response.data.fact) {
      fact = response.data.fact;
    }
  } catch (error) {
    console.error('Error fetching cat fact:', error.message);
  }

  res.json({
    status: 'success',
    user: {
      email: process.env.USER_EMAIL,
      name: process.env.USER_NAME,
      stack: process.env.USER_STACK
    },
    timestamp,
    fact
  });
});


app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
