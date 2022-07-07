const Database = require('./Database');


module.exports = class CnfMoneda{

    constructor(id_moneda, nombre_moneda, estado_moneda){
        
        this.id_moneda = id_moneda;
        this.nombre_moneda = nombre_moneda;
        this.estado_moneda = estado_moneda;
        this.db = new Database();

    }

    async getCnfMoneda(){
        try {
            await this.db.connect();
            let result = await this.db.pool.request().query("SELECT * FROM CNF_MONEDA");
            this.db.disconnect();
            return result.recordset;
        } catch (error) {
            throw error;
        }
    }

    async setCnfMoneda(){
        
        try {
            await this.db.connect();
            await this.db.pool.request().query(`INSERT INTO CNF_MONEDA VALUES ('${this.nombre_moneda}',${this.estado_moneda})`);
            this.db.disconnect();
            return 'Registro insertado exitosamente';
        } catch (error) {
            throw error;
        }
        
    }

    async updateCnfMoneda(body){

        try {
            await this.db.connect();
            await this.db.pool.request().query(`UPDATE CNF_MONEDA SET NOMBRE_MONEDA = '${body.nombre_moneda}', ESTADO_MONEDA = ${body.estado_moneda} WHERE ID_MONEDA = ${this.id_moneda}`)
            this.db.disconnect();
            return 'Registro actualizado exitosamente';
        } catch (error) {
            throw error;
        }

    }

    async deleteCnfMoneda(){

        try {
            await this.db.connect();
            await this.db.pool.request().query(`DELETE FROM CNF_MONEDA WHERE ID_MONEDA = ${this.id_moneda}`);
            this.db.disconnect();
            return 'Registro eliminado exitosamente';
        } catch (error) {
            throw error;
        }

    }

}