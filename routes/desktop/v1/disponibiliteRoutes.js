const express = require('express');
const router = express.Router();
const disponibiliteController = require('../../../controller/desktop/v1/disponibilite');
const {
  auth,checkRolePermission,
} = require('../../../middleware');
const { PLATFORM } =  require('../../../constants/authConstant'); 

router.route('/desktop/api/v1/disponibilite/create').post(auth(PLATFORM.DESKTOP),checkRolePermission,disponibiliteController.addDisponibilite);
router.route('/desktop/api/v1/disponibilite/list').post(auth(PLATFORM.DESKTOP),checkRolePermission,disponibiliteController.findAllDisponibilite);
router.route('/desktop/api/v1/disponibilite/count').post(auth(PLATFORM.DESKTOP),checkRolePermission,disponibiliteController.getDisponibiliteCount);
router.route('/desktop/api/v1/disponibilite/:id').get(auth(PLATFORM.DESKTOP),checkRolePermission,disponibiliteController.getDisponibiliteById);
router.route('/desktop/api/v1/disponibilite/update/:id').put(auth(PLATFORM.DESKTOP),checkRolePermission,disponibiliteController.updateDisponibilite);   
router.route('/desktop/api/v1/disponibilite/partial-update/:id').put(auth(PLATFORM.DESKTOP),checkRolePermission,disponibiliteController.partialUpdateDisponibilite);   
router.route('/desktop/api/v1/disponibilite/softDelete/:id').put(auth(PLATFORM.DESKTOP),checkRolePermission,disponibiliteController.softDeleteDisponibilite);
router.route('/desktop/api/v1/disponibilite/softDeleteMany').put(auth(PLATFORM.DESKTOP),checkRolePermission,disponibiliteController.softDeleteManyDisponibilite);
router.route('/desktop/api/v1/disponibilite/addBulk').post(auth(PLATFORM.DESKTOP),checkRolePermission,disponibiliteController.bulkInsertDisponibilite);
router.route('/desktop/api/v1/disponibilite/updateBulk').put(auth(PLATFORM.DESKTOP),checkRolePermission,disponibiliteController.bulkUpdateDisponibilite); 
router.route('/desktop/api/v1/disponibilite/delete/:id').delete(auth(PLATFORM.DESKTOP),checkRolePermission,disponibiliteController.deleteDisponibilite);
router.route('/desktop/api/v1/disponibilite/deleteMany').post(auth(PLATFORM.DESKTOP),checkRolePermission,disponibiliteController.deleteManyDisponibilite);

module.exports = router;
