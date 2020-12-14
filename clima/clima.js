const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=085e05abf9a28bfa54d71d4ddb5b8aeb&units=metric`);

    return resp.data.main.temp;

}

module.exports = {
    getClima
}