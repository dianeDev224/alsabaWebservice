const express = require('express');
const router = express.Router();
const caisseController = require('../../../controller/device/v1/caisse');
const {
  auth,checkRolePermission,
} = require('../../../middleware');
const { PLATFORM } =  require('../../../constants/authConstant'); 

router.route('/device/api/v1/caisse/create').post(auth(PLATFORM.DEVICE),checkRolePermission,caisseController.addCaisse);
router.route('/device/api/v1/caisse/list').post(auth(PLATFORM.DEVICE),checkRolePermission,caisseController.findAllCaisse);
router.route('/device/api/v1/caisse/count').post(auth(PLATFORM.DEVICE),checkRolePermission,caisseController.getCaisseCount);
router.route('/device/api/v1/caisse/:id').get(auth(PLATFORM.DEVICE),checkRolePermission,caisseController.getCaisseById);
router.route('/device/api/v1/caisse/update/:id').put(auth(PLATFORM.DEVICE),checkRolePermission,caisseController.updateCaisse);   
router.route('/device/api/v1/caisse/partial-update/:id').put(auth(PLATFORM.DEVICE),checkRolePermission,caisseController.partialUpdateCaisse);   
router.route('/device/api/v1/caisse/softDelete/:id').put(auth(PLATFORM.DEVICE),checkRolePermission,caisseController.softDeleteCaisse);
router.route('/device/api/v1/caisse/softDeleteMany').put(auth(PLATFORM.DEVICE),checkRolePermission,caisseController.softDeleteManyCaisse);
router.route('/device/api/v1/caisse/addBulk').post(auth(PLATFORM.DEVICE),checkRolePermission,caisseController.bulkInsertCaisse);
router.route('/device/api/v1/caisse/updateBulk').put(auth(PLATFORM.DEVICE),checkRolePermission,caisseController.bulkUpdateCaisse); 
router.route('/device/api/v1/caisse/delete/:id').delete(auth(PLATFORM.DEVICE),checkRolePermission,caisseController.deleteCaisse);
router.route('/device/api/v1/caisse/deleteMany').post(auth(PLATFORM.DEVICE),checkRolePermission,caisseController.deleteManyCaisse);

module.exports = router;
