const express = require('express');
const router = express.Router();
const codeMoneyController = require('../../../controller/desktop/v1/codeMoney');
const {
  auth,checkRolePermission,
} = require('../../../middleware');
const { PLATFORM } =  require('../../../constants/authConstant'); 

router.route('/desktop/api/v1/codemoney/create').post(auth(PLATFORM.DESKTOP),checkRolePermission,codeMoneyController.addCodeMoney);
router.route('/desktop/api/v1/codemoney/list').post(auth(PLATFORM.DESKTOP),checkRolePermission,codeMoneyController.findAllCodeMoney);
router.route('/desktop/api/v1/codemoney/count').post(auth(PLATFORM.DESKTOP),checkRolePermission,codeMoneyController.getCodeMoneyCount);
router.route('/desktop/api/v1/codemoney/:id').get(auth(PLATFORM.DESKTOP),checkRolePermission,codeMoneyController.getCodeMoneyById);
router.route('/desktop/api/v1/codemoney/update/:id').put(auth(PLATFORM.DESKTOP),checkRolePermission,codeMoneyController.updateCodeMoney);   
router.route('/desktop/api/v1/codemoney/partial-update/:id').put(auth(PLATFORM.DESKTOP),checkRolePermission,codeMoneyController.partialUpdateCodeMoney);   
router.route('/desktop/api/v1/codemoney/softDelete/:id').put(auth(PLATFORM.DESKTOP),checkRolePermission,codeMoneyController.softDeleteCodeMoney);
router.route('/desktop/api/v1/codemoney/softDeleteMany').put(auth(PLATFORM.DESKTOP),checkRolePermission,codeMoneyController.softDeleteManyCodeMoney);
router.route('/desktop/api/v1/codemoney/addBulk').post(auth(PLATFORM.DESKTOP),checkRolePermission,codeMoneyController.bulkInsertCodeMoney);
router.route('/desktop/api/v1/codemoney/updateBulk').put(auth(PLATFORM.DESKTOP),checkRolePermission,codeMoneyController.bulkUpdateCodeMoney); 
router.route('/desktop/api/v1/codemoney/delete/:id').delete(auth(PLATFORM.DESKTOP),checkRolePermission,codeMoneyController.deleteCodeMoney);
router.route('/desktop/api/v1/codemoney/deleteMany').post(auth(PLATFORM.DESKTOP),checkRolePermission,codeMoneyController.deleteManyCodeMoney);

module.exports = router;
