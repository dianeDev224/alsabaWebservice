const express = require('express');
const router = express.Router();
const retraitController = require('../../../controller/desktop/v1/retrait');
const {
  auth,checkRolePermission,
} = require('../../../middleware');
const { PLATFORM } =  require('../../../constants/authConstant'); 

router.route('/desktop/api/v1/retrait/create').post(auth(PLATFORM.DESKTOP),checkRolePermission,retraitController.addRetrait);
router.route('/desktop/api/v1/retrait/list').post(auth(PLATFORM.DESKTOP),checkRolePermission,retraitController.findAllRetrait);
router.route('/desktop/api/v1/retrait/count').post(auth(PLATFORM.DESKTOP),checkRolePermission,retraitController.getRetraitCount);
router.route('/desktop/api/v1/retrait/:id').get(auth(PLATFORM.DESKTOP),checkRolePermission,retraitController.getRetraitById);
router.route('/desktop/api/v1/retrait/update/:id').put(auth(PLATFORM.DESKTOP),checkRolePermission,retraitController.updateRetrait);   
router.route('/desktop/api/v1/retrait/partial-update/:id').put(auth(PLATFORM.DESKTOP),checkRolePermission,retraitController.partialUpdateRetrait);   
router.route('/desktop/api/v1/retrait/softDelete/:id').put(auth(PLATFORM.DESKTOP),checkRolePermission,retraitController.softDeleteRetrait);
router.route('/desktop/api/v1/retrait/softDeleteMany').put(auth(PLATFORM.DESKTOP),checkRolePermission,retraitController.softDeleteManyRetrait);
router.route('/desktop/api/v1/retrait/addBulk').post(auth(PLATFORM.DESKTOP),checkRolePermission,retraitController.bulkInsertRetrait);
router.route('/desktop/api/v1/retrait/updateBulk').put(auth(PLATFORM.DESKTOP),checkRolePermission,retraitController.bulkUpdateRetrait); 
router.route('/desktop/api/v1/retrait/delete/:id').delete(auth(PLATFORM.DESKTOP),checkRolePermission,retraitController.deleteRetrait);
router.route('/desktop/api/v1/retrait/deleteMany').post(auth(PLATFORM.DESKTOP),checkRolePermission,retraitController.deleteManyRetrait);

module.exports = router;
