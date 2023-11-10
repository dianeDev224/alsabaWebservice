const express = require('express');
const router = express.Router();
const ToDoController = require('../../../controller/desktop/v1/ToDo');
const {
  auth,checkRolePermission,
} = require('../../../middleware');
const { PLATFORM } =  require('../../../constants/authConstant'); 

router.route('/desktop/api/v1/todo/create').post(auth(PLATFORM.DESKTOP),checkRolePermission,ToDoController.addToDo);
router.route('/desktop/api/v1/todo/list').post(auth(PLATFORM.DESKTOP),checkRolePermission,ToDoController.findAllToDo);
router.route('/desktop/api/v1/todo/count').post(auth(PLATFORM.DESKTOP),checkRolePermission,ToDoController.getToDoCount);
router.route('/desktop/api/v1/todo/:id').get(auth(PLATFORM.DESKTOP),checkRolePermission,ToDoController.getToDoById);
router.route('/desktop/api/v1/todo/update/:id').put(auth(PLATFORM.DESKTOP),checkRolePermission,ToDoController.updateToDo);   
router.route('/desktop/api/v1/todo/partial-update/:id').put(auth(PLATFORM.DESKTOP),checkRolePermission,ToDoController.partialUpdateToDo);   
router.route('/desktop/api/v1/todo/softDelete/:id').put(auth(PLATFORM.DESKTOP),checkRolePermission,ToDoController.softDeleteToDo);
router.route('/desktop/api/v1/todo/softDeleteMany').put(auth(PLATFORM.DESKTOP),checkRolePermission,ToDoController.softDeleteManyToDo);
router.route('/desktop/api/v1/todo/addBulk').post(auth(PLATFORM.DESKTOP),checkRolePermission,ToDoController.bulkInsertToDo);
router.route('/desktop/api/v1/todo/updateBulk').put(auth(PLATFORM.DESKTOP),checkRolePermission,ToDoController.bulkUpdateToDo); 
router.route('/desktop/api/v1/todo/delete/:id').delete(auth(PLATFORM.DESKTOP),checkRolePermission,ToDoController.deleteToDo);
router.route('/desktop/api/v1/todo/deleteMany').post(auth(PLATFORM.DESKTOP),checkRolePermission,ToDoController.deleteManyToDo);

module.exports = router;
