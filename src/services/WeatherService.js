import axios from 'axios';

const AUTOCOMPLETE_URL = 'http://dataservice.accuweather.com/locations/v1/cities/autocomplete';
const CURRENTCONDITIONS_URL = 'http://dataservice.accuweather.com/currentconditions/v1/'
const FORECAST_URL = 'http://dataservice.accuweather.com/forecasts/v1/daily/5day/'
const API_KEY = 'e8sAI1AZgli8SA1isI5yRSplfu59wISZ';

export default {
    predictLocation,
    getCurrentConditions,
    getForecast
}

async function predictLocation(text) {
    try {
        const { data } = await axios.get(`${AUTOCOMPLETE_URL}?apikey=${API_KEY}&q=${text}`);
        return data;
    } catch (err) {
        console.log(err);
    }
}

async function getCurrentConditions(cityKey) {
    try {
        const { data } = await axios.get(`${CURRENTCONDITIONS_URL}${cityKey}?apikey=${API_KEY}`);
        return data;
    } catch (err) {
        console.log(err);
    }
}

async function getForecast(cityKey) {
    try {
        const { data } = await axios.get(`${FORECAST_URL}${cityKey}?apikey=${API_KEY}`);
        return data;
    } catch (err) {
        console.log(err);
    }
}