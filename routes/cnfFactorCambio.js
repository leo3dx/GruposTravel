const {Router} = require('express');
const {
    cnfFactorCambioGet,
    cnfFactorCambioPost,
    cnfFactorCambioPut,
    cnfFactorCambioDelete
} = require('../controllers/cnfFactorCambio');

const router = Router();

router.get('/',cnfFactorCambioGet);
router.post('/',cnfFactorCambioPost);
router.put('/:id',cnfFactorCambioPut);
router.delete('/:id',cnfFactorCambioDelete);

module.exports = router;