const express = require('express');
const router = express.Router();
const colisController = require('../../../controller/device/v1/colis');
const {
  auth,checkRolePermission,
} = require('../../../middleware');
const { PLATFORM } =  require('../../../constants/authConstant'); 

router.route('/device/api/v1/colis/create').post(auth(PLATFORM.DEVICE),checkRolePermission,colisController.addColis);
router.route('/device/api/v1/colis/list').post(auth(PLATFORM.DEVICE),checkRolePermission,colisController.findAllColis);
router.route('/device/api/v1/colis/count').post(auth(PLATFORM.DEVICE),checkRolePermission,colisController.getColisCount);
router.route('/device/api/v1/colis/:id').get(auth(PLATFORM.DEVICE),checkRolePermission,colisController.getColisById);
router.route('/device/api/v1/colis/update/:id').put(auth(PLATFORM.DEVICE),checkRolePermission,colisController.updateColis);   
router.route('/device/api/v1/colis/partial-update/:id').put(auth(PLATFORM.DEVICE),checkRolePermission,colisController.partialUpdateColis);   
router.route('/device/api/v1/colis/softDelete/:id').put(auth(PLATFORM.DEVICE),checkRolePermission,colisController.softDeleteColis);
router.route('/device/api/v1/colis/softDeleteMany').put(auth(PLATFORM.DEVICE),checkRolePermission,colisController.softDeleteManyColis);
router.route('/device/api/v1/colis/addBulk').post(auth(PLATFORM.DEVICE),checkRolePermission,colisController.bulkInsertColis);
router.route('/device/api/v1/colis/updateBulk').put(auth(PLATFORM.DEVICE),checkRolePermission,colisController.bulkUpdateColis); 
router.route('/device/api/v1/colis/delete/:id').delete(auth(PLATFORM.DEVICE),checkRolePermission,colisController.deleteColis);
router.route('/device/api/v1/colis/deleteMany').post(auth(PLATFORM.DEVICE),checkRolePermission,colisController.deleteManyColis);

module.exports = router;
