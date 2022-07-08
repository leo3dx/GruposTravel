const Database = require('./models/Database');
const Server = require('./models/Server');
// const TrmApi = require('trm-api').default;

// const trmApi = new TrmApi('GBgFkFvGMNdD8U8OVHVK0X9fY');
// trmApi.latest()
// .then((data) => console.log(data))
// .catch((error) => console.log(error));


const server = new Server();



server.listen();

    


