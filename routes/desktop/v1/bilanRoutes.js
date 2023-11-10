const express = require('express');
const router = express.Router();
const bilanController = require('../../../controller/desktop/v1/bilan');
const {
  auth,checkRolePermission,
} = require('../../../middleware');
const { PLATFORM } =  require('../../../constants/authConstant'); 

router.route('/desktop/api/v1/bilan/create').post(auth(PLATFORM.DESKTOP),checkRolePermission,bilanController.addBilan);
router.route('/desktop/api/v1/bilan/list').post(auth(PLATFORM.DESKTOP),checkRolePermission,bilanController.findAllBilan);
router.route('/desktop/api/v1/bilan/count').post(auth(PLATFORM.DESKTOP),checkRolePermission,bilanController.getBilanCount);
router.route('/desktop/api/v1/bilan/:id').get(auth(PLATFORM.DESKTOP),checkRolePermission,bilanController.getBilanById);
router.route('/desktop/api/v1/bilan/update/:id').put(auth(PLATFORM.DESKTOP),checkRolePermission,bilanController.updateBilan);   
router.route('/desktop/api/v1/bilan/partial-update/:id').put(auth(PLATFORM.DESKTOP),checkRolePermission,bilanController.partialUpdateBilan);   
router.route('/desktop/api/v1/bilan/softDelete/:id').put(auth(PLATFORM.DESKTOP),checkRolePermission,bilanController.softDeleteBilan);
router.route('/desktop/api/v1/bilan/softDeleteMany').put(auth(PLATFORM.DESKTOP),checkRolePermission,bilanController.softDeleteManyBilan);
router.route('/desktop/api/v1/bilan/addBulk').post(auth(PLATFORM.DESKTOP),checkRolePermission,bilanController.bulkInsertBilan);
router.route('/desktop/api/v1/bilan/updateBulk').put(auth(PLATFORM.DESKTOP),checkRolePermission,bilanController.bulkUpdateBilan); 
router.route('/desktop/api/v1/bilan/delete/:id').delete(auth(PLATFORM.DESKTOP),checkRolePermission,bilanController.deleteBilan);
router.route('/desktop/api/v1/bilan/deleteMany').post(auth(PLATFORM.DESKTOP),checkRolePermission,bilanController.deleteManyBilan);

module.exports = router;
