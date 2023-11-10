const express = require('express');
const router = express.Router();
const transfertController = require('../../../controller/desktop/v1/transfert');
const {
  auth,checkRolePermission,
} = require('../../../middleware');
const { PLATFORM } =  require('../../../constants/authConstant'); 

router.route('/desktop/api/v1/transfert/create').post(auth(PLATFORM.DESKTOP),checkRolePermission,transfertController.addTransfert);
router.route('/desktop/api/v1/transfert/list').post(auth(PLATFORM.DESKTOP),checkRolePermission,transfertController.findAllTransfert);
router.route('/desktop/api/v1/transfert/count').post(auth(PLATFORM.DESKTOP),checkRolePermission,transfertController.getTransfertCount);
router.route('/desktop/api/v1/transfert/:id').get(auth(PLATFORM.DESKTOP),checkRolePermission,transfertController.getTransfertById);
router.route('/desktop/api/v1/transfert/update/:id').put(auth(PLATFORM.DESKTOP),checkRolePermission,transfertController.updateTransfert);   
router.route('/desktop/api/v1/transfert/partial-update/:id').put(auth(PLATFORM.DESKTOP),checkRolePermission,transfertController.partialUpdateTransfert);   
router.route('/desktop/api/v1/transfert/softDelete/:id').put(auth(PLATFORM.DESKTOP),checkRolePermission,transfertController.softDeleteTransfert);
router.route('/desktop/api/v1/transfert/softDeleteMany').put(auth(PLATFORM.DESKTOP),checkRolePermission,transfertController.softDeleteManyTransfert);
router.route('/desktop/api/v1/transfert/addBulk').post(auth(PLATFORM.DESKTOP),checkRolePermission,transfertController.bulkInsertTransfert);
router.route('/desktop/api/v1/transfert/updateBulk').put(auth(PLATFORM.DESKTOP),checkRolePermission,transfertController.bulkUpdateTransfert); 
router.route('/desktop/api/v1/transfert/delete/:id').delete(auth(PLATFORM.DESKTOP),checkRolePermission,transfertController.deleteTransfert);
router.route('/desktop/api/v1/transfert/deleteMany').post(auth(PLATFORM.DESKTOP),checkRolePermission,transfertController.deleteManyTransfert);

module.exports = router;
