const express = require('express');
const router = express.Router();
const caveauxController = require('../../../controller/device/v1/caveaux');
const {
  auth,checkRolePermission,
} = require('../../../middleware');
const { PLATFORM } =  require('../../../constants/authConstant'); 

router.route('/device/api/v1/caveaux/create').post(auth(PLATFORM.DEVICE),checkRolePermission,caveauxController.addCaveaux);
router.route('/device/api/v1/caveaux/list').post(auth(PLATFORM.DEVICE),checkRolePermission,caveauxController.findAllCaveaux);
router.route('/device/api/v1/caveaux/count').post(auth(PLATFORM.DEVICE),checkRolePermission,caveauxController.getCaveauxCount);
router.route('/device/api/v1/caveaux/:id').get(auth(PLATFORM.DEVICE),checkRolePermission,caveauxController.getCaveauxById);
router.route('/device/api/v1/caveaux/update/:id').put(auth(PLATFORM.DEVICE),checkRolePermission,caveauxController.updateCaveaux);   
router.route('/device/api/v1/caveaux/partial-update/:id').put(auth(PLATFORM.DEVICE),checkRolePermission,caveauxController.partialUpdateCaveaux);   
router.route('/device/api/v1/caveaux/softDelete/:id').put(auth(PLATFORM.DEVICE),checkRolePermission,caveauxController.softDeleteCaveaux);
router.route('/device/api/v1/caveaux/softDeleteMany').put(auth(PLATFORM.DEVICE),checkRolePermission,caveauxController.softDeleteManyCaveaux);
router.route('/device/api/v1/caveaux/addBulk').post(auth(PLATFORM.DEVICE),checkRolePermission,caveauxController.bulkInsertCaveaux);
router.route('/device/api/v1/caveaux/updateBulk').put(auth(PLATFORM.DEVICE),checkRolePermission,caveauxController.bulkUpdateCaveaux); 
router.route('/device/api/v1/caveaux/delete/:id').delete(auth(PLATFORM.DEVICE),checkRolePermission,caveauxController.deleteCaveaux);
router.route('/device/api/v1/caveaux/deleteMany').post(auth(PLATFORM.DEVICE),checkRolePermission,caveauxController.deleteManyCaveaux);

module.exports = router;
