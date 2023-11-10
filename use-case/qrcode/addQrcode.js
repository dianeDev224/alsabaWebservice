/**
 *addQrcode.js
 */

const  qrcodeEntity = require('../../entities/qrcode');
const response = require('../../utils/response');
/**
 * @description : create new record of qrcode in database.
 * @param {Object} dataToCreate : data for create new document.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : response of create. {status, message, data}
 */
const addQrcode = ({
  qrcodeDb,createValidation 
}) => async (dataToCreate,req,res) => {
  const validateRequest = await createValidation(dataToCreate);
  if (!validateRequest.isValid) {
    return response.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
  }
  let qrcode = qrcodeEntity(dataToCreate);
  qrcode = await qrcodeDb.create(qrcode);
  return response.success({ data:qrcode });
};
module.exports = addQrcode;