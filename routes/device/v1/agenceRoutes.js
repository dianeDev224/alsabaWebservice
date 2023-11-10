const express = require('express');
const router = express.Router();
const agenceController = require('../../../controller/device/v1/agence');
const {
  auth,checkRolePermission,
} = require('../../../middleware');
const { PLATFORM } =  require('../../../constants/authConstant'); 

router.route('/device/api/v1/agence/create').post(auth(PLATFORM.DEVICE),checkRolePermission,agenceController.addAgence);
router.route('/device/api/v1/agence/list').post(auth(PLATFORM.DEVICE),checkRolePermission,agenceController.findAllAgence);
router.route('/device/api/v1/agence/count').post(auth(PLATFORM.DEVICE),checkRolePermission,agenceController.getAgenceCount);
router.route('/device/api/v1/agence/:id').get(auth(PLATFORM.DEVICE),checkRolePermission,agenceController.getAgenceById);
router.route('/device/api/v1/agence/update/:id').put(auth(PLATFORM.DEVICE),checkRolePermission,agenceController.updateAgence);   
router.route('/device/api/v1/agence/partial-update/:id').put(auth(PLATFORM.DEVICE),checkRolePermission,agenceController.partialUpdateAgence);   
router.route('/device/api/v1/agence/softDelete/:id').put(auth(PLATFORM.DEVICE),checkRolePermission,agenceController.softDeleteAgence);
router.route('/device/api/v1/agence/softDeleteMany').put(auth(PLATFORM.DEVICE),checkRolePermission,agenceController.softDeleteManyAgence);
router.route('/device/api/v1/agence/addBulk').post(auth(PLATFORM.DEVICE),checkRolePermission,agenceController.bulkInsertAgence);
router.route('/device/api/v1/agence/updateBulk').put(auth(PLATFORM.DEVICE),checkRolePermission,agenceController.bulkUpdateAgence); 
router.route('/device/api/v1/agence/delete/:id').delete(auth(PLATFORM.DEVICE),checkRolePermission,agenceController.deleteAgence);
router.route('/device/api/v1/agence/deleteMany').post(auth(PLATFORM.DEVICE),checkRolePermission,agenceController.deleteManyAgence);

module.exports = router;
