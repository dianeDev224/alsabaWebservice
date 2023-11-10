const express = require('express');
const router = express.Router();
const regionController = require('../../../controller/desktop/v1/region');
const {
  auth,checkRolePermission,
} = require('../../../middleware');
const { PLATFORM } =  require('../../../constants/authConstant'); 

router.route('/desktop/api/v1/region/create').post(auth(PLATFORM.DESKTOP),checkRolePermission,regionController.addRegion);
router.route('/desktop/api/v1/region/list').post(auth(PLATFORM.DESKTOP),checkRolePermission,regionController.findAllRegion);
router.route('/desktop/api/v1/region/count').post(auth(PLATFORM.DESKTOP),checkRolePermission,regionController.getRegionCount);
router.route('/desktop/api/v1/region/:id').get(auth(PLATFORM.DESKTOP),checkRolePermission,regionController.getRegionById);
router.route('/desktop/api/v1/region/update/:id').put(auth(PLATFORM.DESKTOP),checkRolePermission,regionController.updateRegion);   
router.route('/desktop/api/v1/region/partial-update/:id').put(auth(PLATFORM.DESKTOP),checkRolePermission,regionController.partialUpdateRegion);   
router.route('/desktop/api/v1/region/softDelete/:id').put(auth(PLATFORM.DESKTOP),checkRolePermission,regionController.softDeleteRegion);
router.route('/desktop/api/v1/region/softDeleteMany').put(auth(PLATFORM.DESKTOP),checkRolePermission,regionController.softDeleteManyRegion);
router.route('/desktop/api/v1/region/addBulk').post(auth(PLATFORM.DESKTOP),checkRolePermission,regionController.bulkInsertRegion);
router.route('/desktop/api/v1/region/updateBulk').put(auth(PLATFORM.DESKTOP),checkRolePermission,regionController.bulkUpdateRegion); 
router.route('/desktop/api/v1/region/delete/:id').delete(auth(PLATFORM.DESKTOP),checkRolePermission,regionController.deleteRegion);
router.route('/desktop/api/v1/region/deleteMany').post(auth(PLATFORM.DESKTOP),checkRolePermission,regionController.deleteManyRegion);

module.exports = router;
