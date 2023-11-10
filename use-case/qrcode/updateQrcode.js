/**
 *updateQrcode.js
 */

const  qrcodeEntity = require('../../entities/qrcode');
const response = require('../../utils/response');

/**
 * @description : update record with data by id.
 * @param {Object} params : request body including query and data.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : updated Qrcode. {status, message, data}
 */
const updateQrcode = ({
  qrcodeDb, updateValidation
}) => async (params,req,res) => {
  let {
    dataToUpdate, query 
  } = params;
  const validateRequest = await updateValidation(dataToUpdate);
  if (!validateRequest.isValid) {
    return response.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
  }
  let qrcode = qrcodeEntity(dataToUpdate);
  qrcode = await qrcodeDb.updateOne(query,qrcode);
  if (!qrcode){
    return response.recordNotFound();
  }
  return response.success({ data:qrcode });
};
module.exports = updateQrcode;