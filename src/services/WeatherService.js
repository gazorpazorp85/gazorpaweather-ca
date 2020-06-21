import axios from 'axios';

const AUTOCOMPLETE_URL = 'http://dataservice.accuweather.com/locations/v1/cities/autocomplete';
const CURRENTCONDITIONS_URL = 'http://dataservice.accuweather.com/currentconditions/v1/'
const API_KEY = 'cfi0euyENUX7GLWQoWN5reyFdb0jqxvZ';

export default {
    predictLocation,
    getCurrentConditions
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