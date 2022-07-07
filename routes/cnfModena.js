const {Router} = require('express');
const {
    cnfMonedaGet,
    cnfMonedaPost,
    cnfMonedaPut,
    cnfMonedaDelete
} = require('../controllers/cnfMoneda');

const router = Router();

router.get('/',cnfMonedaGet);
router.post('/',cnfMonedaPost);
router.put('/:id',cnfMonedaPut);
router.delete('/:id',cnfMonedaDelete);

module.exports = router;