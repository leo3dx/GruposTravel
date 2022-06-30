const Database = require('./Database');

module.exports = class CnfTipoFactor{

    constructor(id_factor = null, nombre_factor = null, estado_factor = 0){
        
        this.id_factor = id_factor;
        this.nombre_factor = nombre_factor;
        this.estado_factor = estado_factor;
        this.db = new Database();
    
    }

    async getCnfTipoFactor(){

        try {
            await this.db.connect();
            let result = await this.db.pool.request().query("SELECT * FROM CNF_TIPO_FACTOR");
            this.db.disconnect()
            return result.recordset;            
        } catch (error) {
            throw error;
        }

    }

    async setCnfTipoFactor(){

        try {
            await this.db.connect();
            await this.db.pool.request().query(`INSERT INTO CNF_TIPO_FACTOR VALUES ('${this.nombre_factor}', ${this.estado_factor})`);
            this.db.disconnect()
            return 'Registro insertado exitosamente';
        } catch (error) {
            throw error;
        }
        

    }

    async dropCnfTipoFactor(){

        try {
            await this.db.connect();
            await this.db.pool.request().query(`DELETE FROM CNF_TIPO_FACTOR WHERE ID_FACTOR = ${this.id_factor}`);
            this.db.disconnect()
            return 'Registro eliminado exitosamente'
        } catch (error) {
            throw error;
        }

    }

    async updateCnfTipoFactor(body){

        try {
            await this.db.connect();
            await this.db.pool.request().query(`UPDATE CNF_TIPO_FACTOR SET NOMBRE_FACTOR = '${body.nombre_factor}', ESTADO_FACTOR = ${body.estado_factor} WHERE ID_FACTOR = ${this.id_factor}`);
            this.db.disconnect()
            return 'Registro actualizado';
        } catch (error) {
            throw error;
        }

    }

}