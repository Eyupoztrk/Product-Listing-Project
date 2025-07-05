const axios = require('axios');

const API_KEY = process.env.GOLD_API_KEY; 
const API_URL = 'https://www.goldapi.io/api/XAU/USD';

async function getGoldPriceUSDPerGram() {
    try {
        const response = await axios.get(API_URL, {
            headers: {
                'x-access-token': API_KEY,
                'Content-Type': 'application/json'
            }
        });

        const pricePerGram = response.data.price_gram_24k;
        return pricePerGram;
    } catch (error) {
        console.error('Could not get gold price: ', error.message);
        return null;
    }
}


module.exports = { getGoldPriceUSDPerGram };
