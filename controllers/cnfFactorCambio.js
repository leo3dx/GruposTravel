const CnfFactorCambio = require('../models/CnfFactorCambio');
const TrmApi = require('trm-api').default;

const cnfFactorCambioGet = async (req, res) => {

    const trmApi = new TrmApi('GBgFkFvGMNdD8U8OVHVK0X9fY');

    try {
        
        let trm =  await trmApi.latest();
        await new CnfFactorCambio(
            null, 
            1, 
            1, 
            parseInt(trm.valor), 
            trm.vigenciadesde.replace('T00:00:00.000',''), 
            1
            ).setCnfFactorCambio()
    
    } catch (error) {
            console.log('El registro TRM ya esta actualizado para este día');
    }

    new CnfFactorCambio().getCnfFactorCambio()
        .then((response) => {
            res.status(200).json(response);
        }).catch((err) => {
            res.status(400).json(err);
        })

}

const cnfFactorCambioPost = (req, res) => {

    const {body} = req;
    console.log(body);
    new CnfFactorCambio(null, body.id_moneda, body.id_factor, body.valor_fcambio, body.fecha_fcambio, body.estado_fcambio).setCnfFactorCambio()
    .then((response) => {
        res.status(200).json(response);
    }).catch((err) => {
        res.status(400).json(err);
    })

}

const cnfFactorCambioPut = (req, res) => {

    const {params:{id},body} = req;
    new CnfFactorCambio(id).updateCnfFactorCambio(body)
    .then((response) => {
        res.status(200).json(response);
    }).catch((err) => {
        res.status(400).json(err);
    })

}

const cnfFactorCambioDelete = (req, res) => {

    const {params:{id}} = req;
    new CnfFactorCambio(id).deleteCnfFactorCambio()
    .then((response) => {
        res.status(200).json(response);
    }).catch((err) => {
        res.status(400).json(err);
    })

}

module.exports = {
    cnfFactorCambioGet,
    cnfFactorCambioPost,
    cnfFactorCambioPut,
    cnfFactorCambioDelete
}