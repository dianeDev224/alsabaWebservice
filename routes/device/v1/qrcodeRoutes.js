const express = require('express');
const router = express.Router();
const qrcodeController = require('../../../controller/device/v1/qrcode');
const {
  auth,checkRolePermission,
} = require('../../../middleware');
const { PLATFORM } =  require('../../../constants/authConstant'); 

router.route('/device/api/v1/qrcode/create').post(auth(PLATFORM.DEVICE),checkRolePermission,qrcodeController.addQrcode);
router.route('/device/api/v1/qrcode/list').post(auth(PLATFORM.DEVICE),checkRolePermission,qrcodeController.findAllQrcode);
router.route('/device/api/v1/qrcode/count').post(auth(PLATFORM.DEVICE),checkRolePermission,qrcodeController.getQrcodeCount);
router.route('/device/api/v1/qrcode/:id').get(auth(PLATFORM.DEVICE),checkRolePermission,qrcodeController.getQrcodeById);
router.route('/device/api/v1/qrcode/update/:id').put(auth(PLATFORM.DEVICE),checkRolePermission,qrcodeController.updateQrcode);   
router.route('/device/api/v1/qrcode/partial-update/:id').put(auth(PLATFORM.DEVICE),checkRolePermission,qrcodeController.partialUpdateQrcode);   
router.route('/device/api/v1/qrcode/softDelete/:id').put(auth(PLATFORM.DEVICE),checkRolePermission,qrcodeController.softDeleteQrcode);
router.route('/device/api/v1/qrcode/softDeleteMany').put(auth(PLATFORM.DEVICE),checkRolePermission,qrcodeController.softDeleteManyQrcode);
router.route('/device/api/v1/qrcode/addBulk').post(auth(PLATFORM.DEVICE),checkRolePermission,qrcodeController.bulkInsertQrcode);
router.route('/device/api/v1/qrcode/updateBulk').put(auth(PLATFORM.DEVICE),checkRolePermission,qrcodeController.bulkUpdateQrcode); 
router.route('/device/api/v1/qrcode/delete/:id').delete(auth(PLATFORM.DEVICE),checkRolePermission,qrcodeController.deleteQrcode);
router.route('/device/api/v1/qrcode/deleteMany').post(auth(PLATFORM.DEVICE),checkRolePermission,qrcodeController.deleteManyQrcode);

module.exports = router;
