const express = require('express');
const router = express.Router();
const caisseController = require('../../../controller/desktop/v1/caisse');
const {
  auth,checkRolePermission,
} = require('../../../middleware');
const { PLATFORM } =  require('../../../constants/authConstant'); 

router.route('/desktop/api/v1/caisse/create').post(auth(PLATFORM.DESKTOP),checkRolePermission,caisseController.addCaisse);
router.route('/desktop/api/v1/caisse/list').post(auth(PLATFORM.DESKTOP),checkRolePermission,caisseController.findAllCaisse);
router.route('/desktop/api/v1/caisse/count').post(auth(PLATFORM.DESKTOP),checkRolePermission,caisseController.getCaisseCount);
router.route('/desktop/api/v1/caisse/:id').get(auth(PLATFORM.DESKTOP),checkRolePermission,caisseController.getCaisseById);
router.route('/desktop/api/v1/caisse/update/:id').put(auth(PLATFORM.DESKTOP),checkRolePermission,caisseController.updateCaisse);   
router.route('/desktop/api/v1/caisse/partial-update/:id').put(auth(PLATFORM.DESKTOP),checkRolePermission,caisseController.partialUpdateCaisse);   
router.route('/desktop/api/v1/caisse/softDelete/:id').put(auth(PLATFORM.DESKTOP),checkRolePermission,caisseController.softDeleteCaisse);
router.route('/desktop/api/v1/caisse/softDeleteMany').put(auth(PLATFORM.DESKTOP),checkRolePermission,caisseController.softDeleteManyCaisse);
router.route('/desktop/api/v1/caisse/addBulk').post(auth(PLATFORM.DESKTOP),checkRolePermission,caisseController.bulkInsertCaisse);
router.route('/desktop/api/v1/caisse/updateBulk').put(auth(PLATFORM.DESKTOP),checkRolePermission,caisseController.bulkUpdateCaisse); 
router.route('/desktop/api/v1/caisse/delete/:id').delete(auth(PLATFORM.DESKTOP),checkRolePermission,caisseController.deleteCaisse);
router.route('/desktop/api/v1/caisse/deleteMany').post(auth(PLATFORM.DESKTOP),checkRolePermission,caisseController.deleteManyCaisse);

module.exports = router;
