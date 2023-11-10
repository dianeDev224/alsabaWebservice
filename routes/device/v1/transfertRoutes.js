const express = require('express');
const router = express.Router();
const transfertController = require('../../../controller/device/v1/transfert');
const {
  auth,checkRolePermission,
} = require('../../../middleware');
const { PLATFORM } =  require('../../../constants/authConstant'); 

router.route('/device/api/v1/transfert/create').post(auth(PLATFORM.DEVICE),checkRolePermission,transfertController.addTransfert);
router.route('/device/api/v1/transfert/list').post(auth(PLATFORM.DEVICE),checkRolePermission,transfertController.findAllTransfert);
router.route('/device/api/v1/transfert/count').post(auth(PLATFORM.DEVICE),checkRolePermission,transfertController.getTransfertCount);
router.route('/device/api/v1/transfert/:id').get(auth(PLATFORM.DEVICE),checkRolePermission,transfertController.getTransfertById);
router.route('/device/api/v1/transfert/update/:id').put(auth(PLATFORM.DEVICE),checkRolePermission,transfertController.updateTransfert);   
router.route('/device/api/v1/transfert/partial-update/:id').put(auth(PLATFORM.DEVICE),checkRolePermission,transfertController.partialUpdateTransfert);   
router.route('/device/api/v1/transfert/softDelete/:id').put(auth(PLATFORM.DEVICE),checkRolePermission,transfertController.softDeleteTransfert);
router.route('/device/api/v1/transfert/softDeleteMany').put(auth(PLATFORM.DEVICE),checkRolePermission,transfertController.softDeleteManyTransfert);
router.route('/device/api/v1/transfert/addBulk').post(auth(PLATFORM.DEVICE),checkRolePermission,transfertController.bulkInsertTransfert);
router.route('/device/api/v1/transfert/updateBulk').put(auth(PLATFORM.DEVICE),checkRolePermission,transfertController.bulkUpdateTransfert); 
router.route('/device/api/v1/transfert/delete/:id').delete(auth(PLATFORM.DEVICE),checkRolePermission,transfertController.deleteTransfert);
router.route('/device/api/v1/transfert/deleteMany').post(auth(PLATFORM.DEVICE),checkRolePermission,transfertController.deleteManyTransfert);

module.exports = router;
