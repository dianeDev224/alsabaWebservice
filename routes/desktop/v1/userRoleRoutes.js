const express = require('express');
const router = express.Router();
const userRoleController = require('../../../controller/desktop/v1/userRole');
const {
  auth,checkRolePermission,
} = require('../../../middleware');
const { PLATFORM } =  require('../../../constants/authConstant'); 

router.route('/desktop/api/v1/userrole/create').post(auth(PLATFORM.DESKTOP),checkRolePermission,checkRolePermission,userRoleController.addUserRole);
router.route('/desktop/api/v1/userrole/addBulk').post(auth(PLATFORM.DESKTOP),checkRolePermission,checkRolePermission,userRoleController.bulkInsertUserRole);
router.route('/desktop/api/v1/userrole/list').post(auth(PLATFORM.DESKTOP),checkRolePermission,checkRolePermission,userRoleController.findAllUserRole);
router.route('/desktop/api/v1/userrole/count').post(auth(PLATFORM.DESKTOP),checkRolePermission,checkRolePermission,userRoleController.getUserRoleCount);
router.route('/desktop/api/v1/userrole/updateBulk').put(auth(PLATFORM.DESKTOP),checkRolePermission,checkRolePermission,userRoleController.bulkUpdateUserRole); 
router.route('/desktop/api/v1/userrole/softDeleteMany').put(auth(PLATFORM.DESKTOP),checkRolePermission,checkRolePermission,userRoleController.softDeleteManyUserRole);
router.route('/desktop/api/v1/userrole/deleteMany').post(auth(PLATFORM.DESKTOP),checkRolePermission,checkRolePermission,userRoleController.deleteManyUserRole);
router.route('/desktop/api/v1/userrole/softDelete/:id').put(auth(PLATFORM.DESKTOP),checkRolePermission,checkRolePermission,userRoleController.softDeleteUserRole);
router.route('/desktop/api/v1/userrole/partial-update/:id').put(auth(PLATFORM.DESKTOP),checkRolePermission,checkRolePermission,userRoleController.partialUpdateUserRole);   
router.route('/desktop/api/v1/userrole/update/:id').put(auth(PLATFORM.DESKTOP),checkRolePermission,checkRolePermission,userRoleController.updateUserRole);   
router.route('/desktop/api/v1/userrole/:id').get(auth(PLATFORM.DESKTOP),checkRolePermission,checkRolePermission,userRoleController.getUserRoleById);
router.route('/desktop/api/v1/userrole/delete/:id').delete(auth(PLATFORM.DESKTOP),checkRolePermission,checkRolePermission,userRoleController.deleteUserRole);

module.exports = router;
