const express = require('express');
const router = express.Router();
const roleController = require('../../../controller/desktop/v1/role');
const {
  auth,checkRolePermission,
} = require('../../../middleware');
const { PLATFORM } =  require('../../../constants/authConstant'); 

router.route('/desktop/api/v1/role/create').post(auth(PLATFORM.DESKTOP),checkRolePermission,checkRolePermission,roleController.addRole);
router.route('/desktop/api/v1/role/addBulk').post(auth(PLATFORM.DESKTOP),checkRolePermission,checkRolePermission,roleController.bulkInsertRole);
router.route('/desktop/api/v1/role/list').post(auth(PLATFORM.DESKTOP),checkRolePermission,checkRolePermission,roleController.findAllRole);
router.route('/desktop/api/v1/role/count').post(auth(PLATFORM.DESKTOP),checkRolePermission,checkRolePermission,roleController.getRoleCount);
router.route('/desktop/api/v1/role/updateBulk').put(auth(PLATFORM.DESKTOP),checkRolePermission,checkRolePermission,roleController.bulkUpdateRole); 
router.route('/desktop/api/v1/role/softDeleteMany').put(auth(PLATFORM.DESKTOP),checkRolePermission,checkRolePermission,roleController.softDeleteManyRole);
router.route('/desktop/api/v1/role/deleteMany').post(auth(PLATFORM.DESKTOP),checkRolePermission,checkRolePermission,roleController.deleteManyRole);
router.route('/desktop/api/v1/role/softDelete/:id').put(auth(PLATFORM.DESKTOP),checkRolePermission,checkRolePermission,roleController.softDeleteRole);
router.route('/desktop/api/v1/role/partial-update/:id').put(auth(PLATFORM.DESKTOP),checkRolePermission,checkRolePermission,roleController.partialUpdateRole);   
router.route('/desktop/api/v1/role/update/:id').put(auth(PLATFORM.DESKTOP),checkRolePermission,checkRolePermission,roleController.updateRole);   
router.route('/desktop/api/v1/role/:id').get(auth(PLATFORM.DESKTOP),checkRolePermission,checkRolePermission,roleController.getRoleById);
router.route('/desktop/api/v1/role/delete/:id').delete(auth(PLATFORM.DESKTOP),checkRolePermission,checkRolePermission,roleController.deleteRole);

module.exports = router;
