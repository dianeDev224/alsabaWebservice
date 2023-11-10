const express = require('express');
const router = express.Router();
const depotController = require('../../../controller/device/v1/depot');
const {
  auth,checkRolePermission,
} = require('../../../middleware');
const { PLATFORM } =  require('../../../constants/authConstant'); 

router.route('/device/api/v1/depot/create').post(auth(PLATFORM.DEVICE),checkRolePermission,depotController.addDepot);
router.route('/device/api/v1/depot/list').post(auth(PLATFORM.DEVICE),checkRolePermission,depotController.findAllDepot);
router.route('/device/api/v1/depot/count').post(auth(PLATFORM.DEVICE),checkRolePermission,depotController.getDepotCount);
router.route('/device/api/v1/depot/:id').get(auth(PLATFORM.DEVICE),checkRolePermission,depotController.getDepotById);
router.route('/device/api/v1/depot/update/:id').put(auth(PLATFORM.DEVICE),checkRolePermission,depotController.updateDepot);   
router.route('/device/api/v1/depot/partial-update/:id').put(auth(PLATFORM.DEVICE),checkRolePermission,depotController.partialUpdateDepot);   
router.route('/device/api/v1/depot/softDelete/:id').put(auth(PLATFORM.DEVICE),checkRolePermission,depotController.softDeleteDepot);
router.route('/device/api/v1/depot/softDeleteMany').put(auth(PLATFORM.DEVICE),checkRolePermission,depotController.softDeleteManyDepot);
router.route('/device/api/v1/depot/addBulk').post(auth(PLATFORM.DEVICE),checkRolePermission,depotController.bulkInsertDepot);
router.route('/device/api/v1/depot/updateBulk').put(auth(PLATFORM.DEVICE),checkRolePermission,depotController.bulkUpdateDepot); 
router.route('/device/api/v1/depot/delete/:id').delete(auth(PLATFORM.DEVICE),checkRolePermission,depotController.deleteDepot);
router.route('/device/api/v1/depot/deleteMany').post(auth(PLATFORM.DEVICE),checkRolePermission,depotController.deleteManyDepot);

module.exports = router;
