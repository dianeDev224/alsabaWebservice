const express = require('express');
const router = express.Router();
const qrcodeController = require('../../../controller/desktop/v1/qrcode');
const {
  auth,checkRolePermission,
} = require('../../../middleware');
const { PLATFORM } =  require('../../../constants/authConstant'); 

router.route('/desktop/api/v1/qrcode/create').post(auth(PLATFORM.DESKTOP),checkRolePermission,qrcodeController.addQrcode);
router.route('/desktop/api/v1/qrcode/list').post(auth(PLATFORM.DESKTOP),checkRolePermission,qrcodeController.findAllQrcode);
router.route('/desktop/api/v1/qrcode/count').post(auth(PLATFORM.DESKTOP),checkRolePermission,qrcodeController.getQrcodeCount);
router.route('/desktop/api/v1/qrcode/:id').get(auth(PLATFORM.DESKTOP),checkRolePermission,qrcodeController.getQrcodeById);
router.route('/desktop/api/v1/qrcode/update/:id').put(auth(PLATFORM.DESKTOP),checkRolePermission,qrcodeController.updateQrcode);   
router.route('/desktop/api/v1/qrcode/partial-update/:id').put(auth(PLATFORM.DESKTOP),checkRolePermission,qrcodeController.partialUpdateQrcode);   
router.route('/desktop/api/v1/qrcode/softDelete/:id').put(auth(PLATFORM.DESKTOP),checkRolePermission,qrcodeController.softDeleteQrcode);
router.route('/desktop/api/v1/qrcode/softDeleteMany').put(auth(PLATFORM.DESKTOP),checkRolePermission,qrcodeController.softDeleteManyQrcode);
router.route('/desktop/api/v1/qrcode/addBulk').post(auth(PLATFORM.DESKTOP),checkRolePermission,qrcodeController.bulkInsertQrcode);
router.route('/desktop/api/v1/qrcode/updateBulk').put(auth(PLATFORM.DESKTOP),checkRolePermission,qrcodeController.bulkUpdateQrcode); 
router.route('/desktop/api/v1/qrcode/delete/:id').delete(auth(PLATFORM.DESKTOP),checkRolePermission,qrcodeController.deleteQrcode);
router.route('/desktop/api/v1/qrcode/deleteMany').post(auth(PLATFORM.DESKTOP),checkRolePermission,qrcodeController.deleteManyQrcode);

module.exports = router;
