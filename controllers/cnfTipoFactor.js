const { response, request } = require('express');
const CnfTipoFactor = require('../models/CnfTipoFactor');

const cnfTipoFactorGet = (req = request, res = response) => {

    new CnfTipoFactor().getCnfTipoFactor()
    .then(response => {
        res.status(200).json(response);
    }).catch(err => {
        res.status(500).json(err);
    })
    
    
}

const cnfTipoFactorPost = (req = request, res = response) => {

    const { body } = req;
    new CnfTipoFactor(null, body.nombre_factor, body.estado_factor).setCnfTipoFactor()
    .then(response => {
        res.status(200).json({message: response});
    }).catch(err => {
        res.status(400).json(err);
    })
}

const cnfTipoFactorPut = (req = request, res = response) => {

    const { params: {id}, body } = req;
    new CnfTipoFactor(id).updateCnfTipoFactor(body)
    .then(response => {
        res.status(200).json(response);
    }).catch(err => {
        res.status(400).json(err);
    })

}

const cnfTipoFactorDelete = (req = request, res = response) => {

    const { id } = req.params;
    new CnfTipoFactor(id).dropCnfTipoFactor()
    .then((response) => {
        res.status(200).json({
            message: response
        });
    }).catch((err) => {
        res.status(400).json(err)
    })

}

module.exports = {
    cnfTipoFactorGet,
    cnfTipoFactorPut,
    cnfTipoFactorPost,
    cnfTipoFactorDelete
}