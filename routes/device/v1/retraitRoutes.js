const express = require('express');
const router = express.Router();
const retraitController = require('../../../controller/device/v1/retrait');
const {
  auth,checkRolePermission,
} = require('../../../middleware');
const { PLATFORM } =  require('../../../constants/authConstant'); 

router.route('/device/api/v1/retrait/create').post(auth(PLATFORM.DEVICE),checkRolePermission,retraitController.addRetrait);
router.route('/device/api/v1/retrait/list').post(auth(PLATFORM.DEVICE),checkRolePermission,retraitController.findAllRetrait);
router.route('/device/api/v1/retrait/count').post(auth(PLATFORM.DEVICE),checkRolePermission,retraitController.getRetraitCount);
router.route('/device/api/v1/retrait/:id').get(auth(PLATFORM.DEVICE),checkRolePermission,retraitController.getRetraitById);
router.route('/device/api/v1/retrait/update/:id').put(auth(PLATFORM.DEVICE),checkRolePermission,retraitController.updateRetrait);   
router.route('/device/api/v1/retrait/partial-update/:id').put(auth(PLATFORM.DEVICE),checkRolePermission,retraitController.partialUpdateRetrait);   
router.route('/device/api/v1/retrait/softDelete/:id').put(auth(PLATFORM.DEVICE),checkRolePermission,retraitController.softDeleteRetrait);
router.route('/device/api/v1/retrait/softDeleteMany').put(auth(PLATFORM.DEVICE),checkRolePermission,retraitController.softDeleteManyRetrait);
router.route('/device/api/v1/retrait/addBulk').post(auth(PLATFORM.DEVICE),checkRolePermission,retraitController.bulkInsertRetrait);
router.route('/device/api/v1/retrait/updateBulk').put(auth(PLATFORM.DEVICE),checkRolePermission,retraitController.bulkUpdateRetrait); 
router.route('/device/api/v1/retrait/delete/:id').delete(auth(PLATFORM.DEVICE),checkRolePermission,retraitController.deleteRetrait);
router.route('/device/api/v1/retrait/deleteMany').post(auth(PLATFORM.DEVICE),checkRolePermission,retraitController.deleteManyRetrait);

module.exports = router;
