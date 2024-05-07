// api.js

const axios = require('axios');

const fetchTrainLiveStatusById = async (trainId, date) => {
  const options = {
    method: 'GET',
    url: 'https://indian-railway-irctc.p.rapidapi.com/getTrainLiveStatusById',
    params: {
      id: trainId,
      date: date
    },
    headers: {
      'x-rapid-api': 'rapid-api-database',
      'X-RapidAPI-Key': '54876352d9msh061caaa3f246d69p103249jsnc00a4ef732d6',
      'X-RapidAPI-Host': 'indian-railway-irctc.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

module.exports = { fetchTrainLiveStatusById };
