/**
 * authConstant.js
 * @description :: constants used in authentication
 */

const JWT = {
  DEVICE_SECRET:'myjwtdevicesecret',
  DESKTOP_SECRET:'myjwtdesktopsecret',
  EXPIRES_IN: 10000
};

const USER_TYPES = {
  Admin:1,
  AdminSenior:2,
  SuperAdmin:3,
  AgenceAdmin:4,
  Client:5,
};

const PLATFORM = {
  DEVICE:1,
  DESKTOP:2,
};

let LOGIN_ACCESS = {
  [USER_TYPES.AdminSenior]:[PLATFORM.DEVICE,PLATFORM.DESKTOP],           
  [USER_TYPES.SuperAdmin]:[PLATFORM.DESKTOP,PLATFORM.DEVICE],           
  [USER_TYPES.Admin]:[PLATFORM.DESKTOP,PLATFORM.DEVICE],           
  [USER_TYPES.AgenceAdmin]:[PLATFORM.DESKTOP,PLATFORM.DEVICE],           
  [USER_TYPES.Client]:[PLATFORM.DEVICE],           
};

const MAX_LOGIN_RETRY_LIMIT = 4;
const LOGIN_REACTIVE_TIME = 1;

const SEND_LOGIN_OTP = { EMAIL:1, };
const DEFAULT_SEND_LOGIN_OTP = SEND_LOGIN_OTP.EMAIL;
    
const FORGOT_PASSWORD_WITH = {
  LINK: {
    email: true,
    sms: false
  },
  EXPIRE_TIME: 5
};

module.exports = {
  JWT,
  USER_TYPES,
  PLATFORM,
  MAX_LOGIN_RETRY_LIMIT,
  LOGIN_REACTIVE_TIME,
  SEND_LOGIN_OTP,
  DEFAULT_SEND_LOGIN_OTP,
  FORGOT_PASSWORD_WITH,
  LOGIN_ACCESS,
};