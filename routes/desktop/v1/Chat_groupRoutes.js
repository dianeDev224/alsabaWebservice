const express = require('express');
const router = express.Router();
const Chat_groupController = require('../../../controller/desktop/v1/Chat_group');
const {
  auth,checkRolePermission,
} = require('../../../middleware');
const { PLATFORM } =  require('../../../constants/authConstant'); 

router.route('/desktop/api/v1/chat_group/create').post(auth(PLATFORM.DESKTOP),checkRolePermission,Chat_groupController.addChat_group);
router.route('/desktop/api/v1/chat_group/list').post(auth(PLATFORM.DESKTOP),checkRolePermission,Chat_groupController.findAllChat_group);
router.route('/desktop/api/v1/chat_group/count').post(auth(PLATFORM.DESKTOP),checkRolePermission,Chat_groupController.getChat_groupCount);
router.route('/desktop/api/v1/chat_group/:id').get(auth(PLATFORM.DESKTOP),checkRolePermission,Chat_groupController.getChat_groupById);
router.route('/desktop/api/v1/chat_group/update/:id').put(auth(PLATFORM.DESKTOP),checkRolePermission,Chat_groupController.updateChat_group);   
router.route('/desktop/api/v1/chat_group/partial-update/:id').put(auth(PLATFORM.DESKTOP),checkRolePermission,Chat_groupController.partialUpdateChat_group);   
router.route('/desktop/api/v1/chat_group/softDelete/:id').put(auth(PLATFORM.DESKTOP),checkRolePermission,Chat_groupController.softDeleteChat_group);
router.route('/desktop/api/v1/chat_group/softDeleteMany').put(auth(PLATFORM.DESKTOP),checkRolePermission,Chat_groupController.softDeleteManyChat_group);
router.route('/desktop/api/v1/chat_group/addBulk').post(auth(PLATFORM.DESKTOP),checkRolePermission,Chat_groupController.bulkInsertChat_group);
router.route('/desktop/api/v1/chat_group/updateBulk').put(auth(PLATFORM.DESKTOP),checkRolePermission,Chat_groupController.bulkUpdateChat_group); 
router.route('/desktop/api/v1/chat_group/delete/:id').delete(auth(PLATFORM.DESKTOP),checkRolePermission,Chat_groupController.deleteChat_group);
router.route('/desktop/api/v1/chat_group/deleteMany').post(auth(PLATFORM.DESKTOP),checkRolePermission,Chat_groupController.deleteManyChat_group);

module.exports = router;
