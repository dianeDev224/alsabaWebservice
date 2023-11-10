const userDb = require('../../../../data-access/userDb');
const ToDoDb = require('../../../../data-access/ToDoDb');
const Chat_messageDb = require('../../../../data-access/Chat_messageDb');
const Chat_groupDb = require('../../../../data-access/Chat_groupDb');
const colisDb = require('../../../../data-access/colisDb');
const retraitDb = require('../../../../data-access/retraitDb');
const depotDb = require('../../../../data-access/depotDb');
const agenceDb = require('../../../../data-access/agenceDb');
const countryDb = require('../../../../data-access/countryDb');
const userTokensDb = require('../../../../data-access/userTokensDb');
const roleDb = require('../../../../data-access/roleDb');
const projectRouteDb = require('../../../../data-access/projectRouteDb');
const routeRoleDb = require('../../../../data-access/routeRoleDb');
const userRoleDb = require('../../../../data-access/userRoleDb');

const userSchema = require('../../../../validation/schema/user');

const createValidation = require('../../../../validation')(userSchema.createSchema);
const updateValidation = require('../../../../validation')(userSchema.updateSchema);
const filterValidation = require('../../../../validation')(userSchema.filterValidationSchema);
const changePasswordUsecase = require('../../../../use-case/user/changePassword')({ userDb });
const updateProfileUsecase = require('../../../../use-case/user/updateProfile')({
  userDb,
  updateValidation
});
const getUserUsecase = require('../../../../use-case/user/getUser')({
  userDb,
  filterValidation
});

const userController = require('./user');

const changePassword = userController.changePassword(changePasswordUsecase);
const updateProfile = userController.updateProfile(updateProfileUsecase);
const getLoggedInUserInfo = userController.getLoggedInUserInfo(getUserUsecase);

module.exports = {
  changePassword,
  updateProfile,
  getLoggedInUserInfo,
};