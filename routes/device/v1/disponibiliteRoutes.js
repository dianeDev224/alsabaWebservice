const express = require('express');
const router = express.Router();
const disponibiliteController = require('../../../controller/device/v1/disponibilite');
const {
  auth,checkRolePermission,
} = require('../../../middleware');
const { PLATFORM } =  require('../../../constants/authConstant'); 

router.route('/device/api/v1/disponibilite/create').post(auth(PLATFORM.DEVICE),checkRolePermission,disponibiliteController.addDisponibilite);
router.route('/device/api/v1/disponibilite/list').post(auth(PLATFORM.DEVICE),checkRolePermission,disponibiliteController.findAllDisponibilite);
router.route('/device/api/v1/disponibilite/count').post(auth(PLATFORM.DEVICE),checkRolePermission,disponibiliteController.getDisponibiliteCount);
router.route('/device/api/v1/disponibilite/:id').get(auth(PLATFORM.DEVICE),checkRolePermission,disponibiliteController.getDisponibiliteById);
router.route('/device/api/v1/disponibilite/update/:id').put(auth(PLATFORM.DEVICE),checkRolePermission,disponibiliteController.updateDisponibilite);   
router.route('/device/api/v1/disponibilite/partial-update/:id').put(auth(PLATFORM.DEVICE),checkRolePermission,disponibiliteController.partialUpdateDisponibilite);   
router.route('/device/api/v1/disponibilite/softDelete/:id').put(auth(PLATFORM.DEVICE),checkRolePermission,disponibiliteController.softDeleteDisponibilite);
router.route('/device/api/v1/disponibilite/softDeleteMany').put(auth(PLATFORM.DEVICE),checkRolePermission,disponibiliteController.softDeleteManyDisponibilite);
router.route('/device/api/v1/disponibilite/addBulk').post(auth(PLATFORM.DEVICE),checkRolePermission,disponibiliteController.bulkInsertDisponibilite);
router.route('/device/api/v1/disponibilite/updateBulk').put(auth(PLATFORM.DEVICE),checkRolePermission,disponibiliteController.bulkUpdateDisponibilite); 
router.route('/device/api/v1/disponibilite/delete/:id').delete(auth(PLATFORM.DEVICE),checkRolePermission,disponibiliteController.deleteDisponibilite);
router.route('/device/api/v1/disponibilite/deleteMany').post(auth(PLATFORM.DEVICE),checkRolePermission,disponibiliteController.deleteManyDisponibilite);

module.exports = router;
