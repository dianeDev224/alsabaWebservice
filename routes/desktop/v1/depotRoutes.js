const express = require('express');
const router = express.Router();
const depotController = require('../../../controller/desktop/v1/depot');
const {
  auth,checkRolePermission,
} = require('../../../middleware');
const { PLATFORM } =  require('../../../constants/authConstant'); 

router.route('/desktop/api/v1/depot/create').post(auth(PLATFORM.DESKTOP),checkRolePermission,depotController.addDepot);
router.route('/desktop/api/v1/depot/list').post(auth(PLATFORM.DESKTOP),checkRolePermission,depotController.findAllDepot);
router.route('/desktop/api/v1/depot/count').post(auth(PLATFORM.DESKTOP),checkRolePermission,depotController.getDepotCount);
router.route('/desktop/api/v1/depot/:id').get(auth(PLATFORM.DESKTOP),checkRolePermission,depotController.getDepotById);
router.route('/desktop/api/v1/depot/update/:id').put(auth(PLATFORM.DESKTOP),checkRolePermission,depotController.updateDepot);   
router.route('/desktop/api/v1/depot/partial-update/:id').put(auth(PLATFORM.DESKTOP),checkRolePermission,depotController.partialUpdateDepot);   
router.route('/desktop/api/v1/depot/softDelete/:id').put(auth(PLATFORM.DESKTOP),checkRolePermission,depotController.softDeleteDepot);
router.route('/desktop/api/v1/depot/softDeleteMany').put(auth(PLATFORM.DESKTOP),checkRolePermission,depotController.softDeleteManyDepot);
router.route('/desktop/api/v1/depot/addBulk').post(auth(PLATFORM.DESKTOP),checkRolePermission,depotController.bulkInsertDepot);
router.route('/desktop/api/v1/depot/updateBulk').put(auth(PLATFORM.DESKTOP),checkRolePermission,depotController.bulkUpdateDepot); 
router.route('/desktop/api/v1/depot/delete/:id').delete(auth(PLATFORM.DESKTOP),checkRolePermission,depotController.deleteDepot);
router.route('/desktop/api/v1/depot/deleteMany').post(auth(PLATFORM.DESKTOP),checkRolePermission,depotController.deleteManyDepot);

module.exports = router;
