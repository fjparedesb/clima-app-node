const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const { getLugarLatLong } = require('./lugar/lugar');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad',
        demand: true
    }
}).argv;

// lugar.getLugarLatLong(argv.direccion)
//     .then(console.log);

// clima.getClima(40.750000, -74.000000)
//     .then(console.log);

const getInfo = async(direccion) => {


    try {
        const coord = await lugar.getLugarLatLong(direccion);
        const temp = await clima.getClima(coord.lat, coord.lng);
        return `El clima de ${coord.direccion} es de ${temp}.`;
    } catch (e) {
        return `No se pudo determinar el clima de ${ direccion }`;
    }

}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);