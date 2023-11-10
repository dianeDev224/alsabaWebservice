const express = require('express');
const router = express.Router();
const colisController = require('../../../controller/desktop/v1/colis');
const {
  auth,checkRolePermission,
} = require('../../../middleware');
const { PLATFORM } =  require('../../../constants/authConstant'); 

router.route('/desktop/api/v1/colis/create').post(auth(PLATFORM.DESKTOP),checkRolePermission,colisController.addColis);
router.route('/desktop/api/v1/colis/list').post(auth(PLATFORM.DESKTOP),checkRolePermission,colisController.findAllColis);
router.route('/desktop/api/v1/colis/count').post(auth(PLATFORM.DESKTOP),checkRolePermission,colisController.getColisCount);
router.route('/desktop/api/v1/colis/:id').get(auth(PLATFORM.DESKTOP),checkRolePermission,colisController.getColisById);
router.route('/desktop/api/v1/colis/update/:id').put(auth(PLATFORM.DESKTOP),checkRolePermission,colisController.updateColis);   
router.route('/desktop/api/v1/colis/partial-update/:id').put(auth(PLATFORM.DESKTOP),checkRolePermission,colisController.partialUpdateColis);   
router.route('/desktop/api/v1/colis/softDelete/:id').put(auth(PLATFORM.DESKTOP),checkRolePermission,colisController.softDeleteColis);
router.route('/desktop/api/v1/colis/softDeleteMany').put(auth(PLATFORM.DESKTOP),checkRolePermission,colisController.softDeleteManyColis);
router.route('/desktop/api/v1/colis/addBulk').post(auth(PLATFORM.DESKTOP),checkRolePermission,colisController.bulkInsertColis);
router.route('/desktop/api/v1/colis/updateBulk').put(auth(PLATFORM.DESKTOP),checkRolePermission,colisController.bulkUpdateColis); 
router.route('/desktop/api/v1/colis/delete/:id').delete(auth(PLATFORM.DESKTOP),checkRolePermission,colisController.deleteColis);
router.route('/desktop/api/v1/colis/deleteMany').post(auth(PLATFORM.DESKTOP),checkRolePermission,colisController.deleteManyColis);

module.exports = router;
