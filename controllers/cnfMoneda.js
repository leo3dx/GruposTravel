const CnfMoneda = require('../models/CnfMoneda');

const cnfMonedaGet = (req, res) => {
    new CnfMoneda().getCnfMoneda()
    .then((response) => {
        res.status(200).json(response);
    }).catch((err) => {
        res.status(400).json(err);
    })

}

const cnfMonedaPost = (req, res) => {

    const {body} = req;
    console.log(body);
    new CnfMoneda(null, body.nombre_moneda, body.estado_moneda).setCnfMoneda()
    .then((response) => {
        res.status(200).json(response);
    }).catch((err) => {
        res.status(400).json(err);
    })

}

const cnfMonedaPut = (req, res) => {

    const {params:{id},body} = req;
    new CnfMoneda(id).updateCnfMoneda(body)
    .then((response) => {
        res.status(200).json(response);
    }).catch((err) => {
        res.status(400).json(err);
    })

}

const cnfMonedaDelete = (req, res) => {

    const {params:{id}} = req;
    new CnfMoneda(id).deleteCnfMoneda()
    .then((response) => {
        res.status(200).json(response);
    }).catch((err) => {
        res.status(400).json(err);
    })

}

module.exports = {
    cnfMonedaGet,
    cnfMonedaPost,
    cnfMonedaPut,
    cnfMonedaDelete
}