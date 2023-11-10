const express = require('express');
const router = express.Router();
const Chat_messageController = require('../../../controller/desktop/v1/Chat_message');
const {
  auth,checkRolePermission,
} = require('../../../middleware');
const { PLATFORM } =  require('../../../constants/authConstant'); 

router.route('/desktop/api/v1/chat_message/create').post(auth(PLATFORM.DESKTOP),checkRolePermission,Chat_messageController.addChat_message);
router.route('/desktop/api/v1/chat_message/list').post(auth(PLATFORM.DESKTOP),checkRolePermission,Chat_messageController.findAllChat_message);
router.route('/desktop/api/v1/chat_message/count').post(auth(PLATFORM.DESKTOP),checkRolePermission,Chat_messageController.getChat_messageCount);
router.route('/desktop/api/v1/chat_message/:id').get(auth(PLATFORM.DESKTOP),checkRolePermission,Chat_messageController.getChat_messageById);
router.route('/desktop/api/v1/chat_message/update/:id').put(auth(PLATFORM.DESKTOP),checkRolePermission,Chat_messageController.updateChat_message);   
router.route('/desktop/api/v1/chat_message/partial-update/:id').put(auth(PLATFORM.DESKTOP),checkRolePermission,Chat_messageController.partialUpdateChat_message);   
router.route('/desktop/api/v1/chat_message/softDelete/:id').put(auth(PLATFORM.DESKTOP),checkRolePermission,Chat_messageController.softDeleteChat_message);
router.route('/desktop/api/v1/chat_message/softDeleteMany').put(auth(PLATFORM.DESKTOP),checkRolePermission,Chat_messageController.softDeleteManyChat_message);
router.route('/desktop/api/v1/chat_message/addBulk').post(auth(PLATFORM.DESKTOP),checkRolePermission,Chat_messageController.bulkInsertChat_message);
router.route('/desktop/api/v1/chat_message/updateBulk').put(auth(PLATFORM.DESKTOP),checkRolePermission,Chat_messageController.bulkUpdateChat_message); 
router.route('/desktop/api/v1/chat_message/delete/:id').delete(auth(PLATFORM.DESKTOP),checkRolePermission,Chat_messageController.deleteChat_message);
router.route('/desktop/api/v1/chat_message/deleteMany').post(auth(PLATFORM.DESKTOP),checkRolePermission,Chat_messageController.deleteManyChat_message);

module.exports = router;
