
const { Router } = require('express');

const { cnfTipoFactorGet,
        cnfTipoFactorPut,
        cnfTipoFactorPost,
        cnfTipoFactorDelete} = require('../controllers/cnfTipoFactor');

const router = Router();


router.get('/', cnfTipoFactorGet );

router.put('/:id', cnfTipoFactorPut );

router.post('/', cnfTipoFactorPost );

router.delete('/:id', cnfTipoFactorDelete );


module.exports = router;