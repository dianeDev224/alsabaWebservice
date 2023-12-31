const express = require('express');
const router = express.Router();
const routeRoleController = require('../../../controller/desktop/v1/routeRole');
const {
  auth,checkRolePermission,
} = require('../../../middleware');
const { PLATFORM } =  require('../../../constants/authConstant'); 

router.route('/desktop/api/v1/routerole/create').post(auth(PLATFORM.DESKTOP),checkRolePermission,checkRolePermission,routeRoleController.addRouteRole);
router.route('/desktop/api/v1/routerole/addBulk').post(auth(PLATFORM.DESKTOP),checkRolePermission,checkRolePermission,routeRoleController.bulkInsertRouteRole);
router.route('/desktop/api/v1/routerole/list').post(auth(PLATFORM.DESKTOP),checkRolePermission,checkRolePermission,routeRoleController.findAllRouteRole);
router.route('/desktop/api/v1/routerole/count').post(auth(PLATFORM.DESKTOP),checkRolePermission,checkRolePermission,routeRoleController.getRouteRoleCount);
router.route('/desktop/api/v1/routerole/updateBulk').put(auth(PLATFORM.DESKTOP),checkRolePermission,checkRolePermission,routeRoleController.bulkUpdateRouteRole); 
router.route('/desktop/api/v1/routerole/softDeleteMany').put(auth(PLATFORM.DESKTOP),checkRolePermission,checkRolePermission,routeRoleController.softDeleteManyRouteRole);
router.route('/desktop/api/v1/routerole/deleteMany').post(auth(PLATFORM.DESKTOP),checkRolePermission,checkRolePermission,routeRoleController.deleteManyRouteRole);
router.route('/desktop/api/v1/routerole/softDelete/:id').put(auth(PLATFORM.DESKTOP),checkRolePermission,checkRolePermission,routeRoleController.softDeleteRouteRole);
router.route('/desktop/api/v1/routerole/partial-update/:id').put(auth(PLATFORM.DESKTOP),checkRolePermission,checkRolePermission,routeRoleController.partialUpdateRouteRole);   
router.route('/desktop/api/v1/routerole/update/:id').put(auth(PLATFORM.DESKTOP),checkRolePermission,checkRolePermission,routeRoleController.updateRouteRole);   
router.route('/desktop/api/v1/routerole/:id').get(auth(PLATFORM.DESKTOP),checkRolePermission,checkRolePermission,routeRoleController.getRouteRoleById);
router.route('/desktop/api/v1/routerole/delete/:id').delete(auth(PLATFORM.DESKTOP),checkRolePermission,checkRolePermission,routeRoleController.deleteRouteRole);

module.exports = router;
