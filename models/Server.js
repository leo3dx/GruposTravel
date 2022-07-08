const express = require('express');
const cors = require('cors');

class Server {

    constructor() {
        this.app  = express();
        this.port = process.env.PORT || 3001;
        this.cnfTipoFactor = '/api/cnfTipoFactor';
        this.cnfMoneda = '/api/cnfMoneda';
        this.cnfFactorCambio = '/api/cnfFactorCambio';

        // Middlewares
        this.middlewares();

        // Rutas de mi aplicación
        this.routes();
    }

    middlewares() {

        // CORS
        this.app.use( cors() );

        // Lectura y parseo del body
        this.app.use( express.json() );

    }

    routes() {
        this.app.use( this.cnfTipoFactor, require('../routes/cnfTipoFactor'));
        this.app.use(this.cnfMoneda, require('../routes/cnfModena'));
        this.app.use(this.cnfFactorCambio, require('../routes/cnfFactorCambio'));
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en http://localhost:'+ this.port );
        });
    }

}


module.exports = Server;
