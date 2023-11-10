const express = require('express');
const router = express.Router();
const userController = require('../../../controller/desktop/v1/user');
const { auth, } = require('../../../middleware');
const { PLATFORM } =  require('../../../constants/authConstant'); 

router.route('/desktop/api/v1/user/me').get(auth(PLATFORM.DESKTOP),userController.getLoggedInUserInfo);
router.route('/desktop/api/v1/user/change-password').put(auth(PLATFORM.DESKTOP),userController.changePassword);
router.route('/desktop/api/v1/user/update-profile').put(auth(PLATFORM.DESKTOP),userController.updateProfile);

module.exports = router;
