const express = require('express');
const router = express.Router();
const bilanController = require('../../../controller/device/v1/bilan');
const {
  auth,checkRolePermission,
} = require('../../../middleware');
const { PLATFORM } =  require('../../../constants/authConstant'); 

router.route('/device/api/v1/bilan/create').post(auth(PLATFORM.DEVICE),checkRolePermission,bilanController.addBilan);
router.route('/device/api/v1/bilan/list').post(auth(PLATFORM.DEVICE),checkRolePermission,bilanController.findAllBilan);
router.route('/device/api/v1/bilan/count').post(auth(PLATFORM.DEVICE),checkRolePermission,bilanController.getBilanCount);
router.route('/device/api/v1/bilan/:id').get(auth(PLATFORM.DEVICE),checkRolePermission,bilanController.getBilanById);
router.route('/device/api/v1/bilan/update/:id').put(auth(PLATFORM.DEVICE),checkRolePermission,bilanController.updateBilan);   
router.route('/device/api/v1/bilan/partial-update/:id').put(auth(PLATFORM.DEVICE),checkRolePermission,bilanController.partialUpdateBilan);   
router.route('/device/api/v1/bilan/softDelete/:id').put(auth(PLATFORM.DEVICE),checkRolePermission,bilanController.softDeleteBilan);
router.route('/device/api/v1/bilan/softDeleteMany').put(auth(PLATFORM.DEVICE),checkRolePermission,bilanController.softDeleteManyBilan);
router.route('/device/api/v1/bilan/addBulk').post(auth(PLATFORM.DEVICE),checkRolePermission,bilanController.bulkInsertBilan);
router.route('/device/api/v1/bilan/updateBulk').put(auth(PLATFORM.DEVICE),checkRolePermission,bilanController.bulkUpdateBilan); 
router.route('/device/api/v1/bilan/delete/:id').delete(auth(PLATFORM.DEVICE),checkRolePermission,bilanController.deleteBilan);
router.route('/device/api/v1/bilan/deleteMany').post(auth(PLATFORM.DEVICE),checkRolePermission,bilanController.deleteManyBilan);

module.exports = router;
