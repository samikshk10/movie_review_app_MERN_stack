const dotenv = require("dotenv");
dotenv.config();

const baseUrl = process.env.TMDB_BASE_URL;


console.log(baseUrl);
const key = process.env.TMDB_KEY;

const getUrl = (endpoint, params) => {
    const qs = new URLSearchParams(params);

    return `${baseUrl}${endpoint}?api_key=${key}&${qs}`;
};

module.exports = {
    getUrl
};