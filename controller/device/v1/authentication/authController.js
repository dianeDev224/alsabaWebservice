const authConstant = require('../../../../constants/authConstant');
const response = require('../../../../utils/response');  
const responseHandler = require('../../../../utils/response/responseHandler'); 

const register = (registerUsecase) => async (req,res) => {
  try {
    req.body.userType = authConstant.USER_TYPES.AdminSenior;
    let result = await registerUsecase(req.body);
    return responseHandler(res,result);
  } catch (error) {
    return responseHandler(res,response.internalServerError({ message:error.message }));
  }
};

const sendOtpForLogin = (sendOtpForLoginUsecase) => async (req,res)=>{
  try {
    let result = await sendOtpForLoginUsecase(req.body);
    return responseHandler(res,result);
  } catch (error) {
    return responseHandler(res,response.internalServerError({ message:error.message }));
  }
};

const loginWithOTP = (loginWithOTPUsecase) => async (req,res) => {
  try {
    let result = await loginWithOTPUsecase(req.body,authConstant.PLATFORM.DEVICE);
    return responseHandler(res,result);
  } catch (error) {
    return responseHandler(res,response.internalServerError({ message:error.message }));
  }
};

const logout = (logoutUsecase) => async (req,res) => {
  try {
    let user = req.user;
    let token = req.headers.authorization.replace('Bearer ', '');
    let result = await logoutUsecase(user, token,req,res);
    return responseHandler(res,result);
  } catch (error) {
    return responseHandler(res,response.internalServerError({ message:error.message }));
  }
};

const addPlayerId = (addPlayerIdUsecase) => async (req,res) =>{
  try {
    let result = await addPlayerIdUsecase(req.body);
    return responseHandler(res,result);
  } catch (error){
    return responseHandler(res,response.internalServerError({ message:error.message }));
  }
}; 

const removePlayerId = (removePlayerIdUsecase) => async (req,res) =>{
  try {
    let result = await removePlayerIdUsecase(req.body);
    return responseHandler(res,result);
  } catch (error){
    return responseHandler(res,response.internalServerError({ message:error.message }));
  }
};

module.exports = {
  register,
  sendOtpForLogin,
  loginWithOTP,
  logout,
  addPlayerId,
  removePlayerId
};