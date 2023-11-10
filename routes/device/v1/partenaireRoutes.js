const express = require('express');
const router = express.Router();
const partenaireController = require('../../../controller/device/v1/partenaire');
const {
  auth,checkRolePermission,
} = require('../../../middleware');
const { PLATFORM } =  require('../../../constants/authConstant'); 

router.route('/device/api/v1/partenaire/create').post(auth(PLATFORM.DEVICE),checkRolePermission,partenaireController.addPartenaire);
router.route('/device/api/v1/partenaire/list').post(auth(PLATFORM.DEVICE),checkRolePermission,partenaireController.findAllPartenaire);
router.route('/device/api/v1/partenaire/count').post(auth(PLATFORM.DEVICE),checkRolePermission,partenaireController.getPartenaireCount);
router.route('/device/api/v1/partenaire/:id').get(auth(PLATFORM.DEVICE),checkRolePermission,partenaireController.getPartenaireById);
router.route('/device/api/v1/partenaire/update/:id').put(auth(PLATFORM.DEVICE),checkRolePermission,partenaireController.updatePartenaire);   
router.route('/device/api/v1/partenaire/partial-update/:id').put(auth(PLATFORM.DEVICE),checkRolePermission,partenaireController.partialUpdatePartenaire);   
router.route('/device/api/v1/partenaire/softDelete/:id').put(auth(PLATFORM.DEVICE),checkRolePermission,partenaireController.softDeletePartenaire);
router.route('/device/api/v1/partenaire/softDeleteMany').put(auth(PLATFORM.DEVICE),checkRolePermission,partenaireController.softDeleteManyPartenaire);
router.route('/device/api/v1/partenaire/addBulk').post(auth(PLATFORM.DEVICE),checkRolePermission,partenaireController.bulkInsertPartenaire);
router.route('/device/api/v1/partenaire/updateBulk').put(auth(PLATFORM.DEVICE),checkRolePermission,partenaireController.bulkUpdatePartenaire); 
router.route('/device/api/v1/partenaire/delete/:id').delete(auth(PLATFORM.DEVICE),checkRolePermission,partenaireController.deletePartenaire);
router.route('/device/api/v1/partenaire/deleteMany').post(auth(PLATFORM.DEVICE),checkRolePermission,partenaireController.deleteManyPartenaire);

module.exports = router;
