const sql = require('mssql');
require('dotenv').config();

module.exports = class Database{

    constructor(){
        this.dbSettings ={
            user: process.env.USER,
            password: process.env.PASSWORD,
            server: process.env.HOST,
            database: process.env.DATABASE,
            encrypt:false
        }
        this.pool = null;
    }

    connect = async () => {
            this.pool = await sql.connect(this.dbSettings);
        }

    disconnect(){
        this.pool.close();
    }
    

}