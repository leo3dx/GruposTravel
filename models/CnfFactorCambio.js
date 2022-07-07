const Database = require('./Database');


module.exports = class CnfFactorCambio{

    constructor(id_fcambio, id_moneda, id_factor, valor_fcambio, fecha_fcambio, estado_fcambio) {
        
        this.id_fcambio = id_fcambio;
        this.id_moneda = id_moneda;
        this.id_factor = id_factor;
        this.valor_fcambio = valor_fcambio;
        this.fecha_fcambio = fecha_fcambio;
        this.estado_fcambio = estado_fcambio;
        this.db = new Database();

    }

    async getCnfFactorCambio(){
        try {
            await this.db.connect();
            let result = await this.db.pool.request().query("SELECT * FROM CNF_FACTOR_CAMBIO");
            this.db.disconnect();
            return result.recordset;
        } catch (error) {
            throw error;
        }
    }

    async setCnfFactorCambio(){
        
        try {
            await this.db.connect();
            await this.db.pool.request().query(`INSERT INTO CNF_FACTOR_CAMBIO VALUES (${this.id_moneda}, ${this.id_factor}, ${this.valor_fcambio}, '${this.fecha_fcambio}', ${this.estado_fcambio})`);
            this.db.disconnect();
            return 'Registro insertado exitosamente';
        } catch (error) {
            throw error;
        }
        
    }

    async updateCnfFactorCambio(body){

        try {
            await this.db.connect();
            await this.db.pool.request().query(`UPDATE CNF_FACTOR_CAMBIO 
                SET ID_MONEDA = '${body.id_moneda}', 
                ID_FACTOR = ${body.id_factor}, 
                VALOR_FCAMBIO = ${body.valor_fcambio},
                FECHA_FCAMBIO = '${body.fecha_fcambio}',
                ESTADO_FCAMBIO = ${body.estado_fcambio}
                WHERE ID_FCAMBIO = ${this.id_fcambio}`)
            this.db.disconnect();
            return 'Registro actualizado exitosamente';
        } catch (error) {
            throw error;
        }

    }

    async deleteCnfFactorCambio(){

        try {
            await this.db.connect();
            await this.db.pool.request().query(`DELETE FROM CNF_FACTOR_CAMBIO WHERE ID_FCAMBIO = ${this.id_fcambio}`);
            this.db.disconnect();
            return 'Registro eliminado exitosamente';
        } catch (error) {
            throw error;
        }

    }

}