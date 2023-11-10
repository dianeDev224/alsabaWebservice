const express = require('express');
const router = express.Router();
const agenceController = require('../../../controller/desktop/v1/agence');
const {
  auth,checkRolePermission,
} = require('../../../middleware');
const { PLATFORM } =  require('../../../constants/authConstant'); 

router.route('/desktop/api/v1/agence/create').post(auth(PLATFORM.DESKTOP),checkRolePermission,agenceController.addAgence);
router.route('/desktop/api/v1/agence/list').post(auth(PLATFORM.DESKTOP),checkRolePermission,agenceController.findAllAgence);
router.route('/desktop/api/v1/agence/count').post(auth(PLATFORM.DESKTOP),checkRolePermission,agenceController.getAgenceCount);
router.route('/desktop/api/v1/agence/:id').get(auth(PLATFORM.DESKTOP),checkRolePermission,agenceController.getAgenceById);
router.route('/desktop/api/v1/agence/update/:id').put(auth(PLATFORM.DESKTOP),checkRolePermission,agenceController.updateAgence);   
router.route('/desktop/api/v1/agence/partial-update/:id').put(auth(PLATFORM.DESKTOP),checkRolePermission,agenceController.partialUpdateAgence);   
router.route('/desktop/api/v1/agence/softDelete/:id').put(auth(PLATFORM.DESKTOP),checkRolePermission,agenceController.softDeleteAgence);
router.route('/desktop/api/v1/agence/softDeleteMany').put(auth(PLATFORM.DESKTOP),checkRolePermission,agenceController.softDeleteManyAgence);
router.route('/desktop/api/v1/agence/addBulk').post(auth(PLATFORM.DESKTOP),checkRolePermission,agenceController.bulkInsertAgence);
router.route('/desktop/api/v1/agence/updateBulk').put(auth(PLATFORM.DESKTOP),checkRolePermission,agenceController.bulkUpdateAgence); 
router.route('/desktop/api/v1/agence/delete/:id').delete(auth(PLATFORM.DESKTOP),checkRolePermission,agenceController.deleteAgence);
router.route('/desktop/api/v1/agence/deleteMany').post(auth(PLATFORM.DESKTOP),checkRolePermission,agenceController.deleteManyAgence);

module.exports = router;
