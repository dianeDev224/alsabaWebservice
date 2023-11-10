const express = require('express');
const router = express.Router();
const caveauxController = require('../../../controller/desktop/v1/caveaux');
const {
  auth,checkRolePermission,
} = require('../../../middleware');
const { PLATFORM } =  require('../../../constants/authConstant'); 

router.route('/desktop/api/v1/caveaux/create').post(auth(PLATFORM.DESKTOP),checkRolePermission,caveauxController.addCaveaux);
router.route('/desktop/api/v1/caveaux/list').post(auth(PLATFORM.DESKTOP),checkRolePermission,caveauxController.findAllCaveaux);
router.route('/desktop/api/v1/caveaux/count').post(auth(PLATFORM.DESKTOP),checkRolePermission,caveauxController.getCaveauxCount);
router.route('/desktop/api/v1/caveaux/:id').get(auth(PLATFORM.DESKTOP),checkRolePermission,caveauxController.getCaveauxById);
router.route('/desktop/api/v1/caveaux/update/:id').put(auth(PLATFORM.DESKTOP),checkRolePermission,caveauxController.updateCaveaux);   
router.route('/desktop/api/v1/caveaux/partial-update/:id').put(auth(PLATFORM.DESKTOP),checkRolePermission,caveauxController.partialUpdateCaveaux);   
router.route('/desktop/api/v1/caveaux/softDelete/:id').put(auth(PLATFORM.DESKTOP),checkRolePermission,caveauxController.softDeleteCaveaux);
router.route('/desktop/api/v1/caveaux/softDeleteMany').put(auth(PLATFORM.DESKTOP),checkRolePermission,caveauxController.softDeleteManyCaveaux);
router.route('/desktop/api/v1/caveaux/addBulk').post(auth(PLATFORM.DESKTOP),checkRolePermission,caveauxController.bulkInsertCaveaux);
router.route('/desktop/api/v1/caveaux/updateBulk').put(auth(PLATFORM.DESKTOP),checkRolePermission,caveauxController.bulkUpdateCaveaux); 
router.route('/desktop/api/v1/caveaux/delete/:id').delete(auth(PLATFORM.DESKTOP),checkRolePermission,caveauxController.deleteCaveaux);
router.route('/desktop/api/v1/caveaux/deleteMany').post(auth(PLATFORM.DESKTOP),checkRolePermission,caveauxController.deleteManyCaveaux);

module.exports = router;
