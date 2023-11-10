const express = require('express');
const router = express.Router();
const partenaireController = require('../../../controller/desktop/v1/partenaire');
const {
  auth,checkRolePermission,
} = require('../../../middleware');
const { PLATFORM } =  require('../../../constants/authConstant'); 

router.route('/desktop/api/v1/partenaire/create').post(auth(PLATFORM.DESKTOP),checkRolePermission,partenaireController.addPartenaire);
router.route('/desktop/api/v1/partenaire/list').post(auth(PLATFORM.DESKTOP),checkRolePermission,partenaireController.findAllPartenaire);
router.route('/desktop/api/v1/partenaire/count').post(auth(PLATFORM.DESKTOP),checkRolePermission,partenaireController.getPartenaireCount);
router.route('/desktop/api/v1/partenaire/:id').get(auth(PLATFORM.DESKTOP),checkRolePermission,partenaireController.getPartenaireById);
router.route('/desktop/api/v1/partenaire/update/:id').put(auth(PLATFORM.DESKTOP),checkRolePermission,partenaireController.updatePartenaire);   
router.route('/desktop/api/v1/partenaire/partial-update/:id').put(auth(PLATFORM.DESKTOP),checkRolePermission,partenaireController.partialUpdatePartenaire);   
router.route('/desktop/api/v1/partenaire/softDelete/:id').put(auth(PLATFORM.DESKTOP),checkRolePermission,partenaireController.softDeletePartenaire);
router.route('/desktop/api/v1/partenaire/softDeleteMany').put(auth(PLATFORM.DESKTOP),checkRolePermission,partenaireController.softDeleteManyPartenaire);
router.route('/desktop/api/v1/partenaire/addBulk').post(auth(PLATFORM.DESKTOP),checkRolePermission,partenaireController.bulkInsertPartenaire);
router.route('/desktop/api/v1/partenaire/updateBulk').put(auth(PLATFORM.DESKTOP),checkRolePermission,partenaireController.bulkUpdatePartenaire); 
router.route('/desktop/api/v1/partenaire/delete/:id').delete(auth(PLATFORM.DESKTOP),checkRolePermission,partenaireController.deletePartenaire);
router.route('/desktop/api/v1/partenaire/deleteMany').post(auth(PLATFORM.DESKTOP),checkRolePermission,partenaireController.deleteManyPartenaire);

module.exports = router;
