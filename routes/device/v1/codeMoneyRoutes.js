const express = require('express');
const router = express.Router();
const codeMoneyController = require('../../../controller/device/v1/codeMoney');
const {
  auth,checkRolePermission,
} = require('../../../middleware');
const { PLATFORM } =  require('../../../constants/authConstant'); 

router.route('/device/api/v1/codemoney/create').post(auth(PLATFORM.DEVICE),checkRolePermission,codeMoneyController.addCodeMoney);
router.route('/device/api/v1/codemoney/list').post(auth(PLATFORM.DEVICE),checkRolePermission,codeMoneyController.findAllCodeMoney);
router.route('/device/api/v1/codemoney/count').post(auth(PLATFORM.DEVICE),checkRolePermission,codeMoneyController.getCodeMoneyCount);
router.route('/device/api/v1/codemoney/:id').get(auth(PLATFORM.DEVICE),checkRolePermission,codeMoneyController.getCodeMoneyById);
router.route('/device/api/v1/codemoney/update/:id').put(auth(PLATFORM.DEVICE),checkRolePermission,codeMoneyController.updateCodeMoney);   
router.route('/device/api/v1/codemoney/partial-update/:id').put(auth(PLATFORM.DEVICE),checkRolePermission,codeMoneyController.partialUpdateCodeMoney);   
router.route('/device/api/v1/codemoney/softDelete/:id').put(auth(PLATFORM.DEVICE),checkRolePermission,codeMoneyController.softDeleteCodeMoney);
router.route('/device/api/v1/codemoney/softDeleteMany').put(auth(PLATFORM.DEVICE),checkRolePermission,codeMoneyController.softDeleteManyCodeMoney);
router.route('/device/api/v1/codemoney/addBulk').post(auth(PLATFORM.DEVICE),checkRolePermission,codeMoneyController.bulkInsertCodeMoney);
router.route('/device/api/v1/codemoney/updateBulk').put(auth(PLATFORM.DEVICE),checkRolePermission,codeMoneyController.bulkUpdateCodeMoney); 
router.route('/device/api/v1/codemoney/delete/:id').delete(auth(PLATFORM.DEVICE),checkRolePermission,codeMoneyController.deleteCodeMoney);
router.route('/device/api/v1/codemoney/deleteMany').post(auth(PLATFORM.DEVICE),checkRolePermission,codeMoneyController.deleteManyCodeMoney);

module.exports = router;
