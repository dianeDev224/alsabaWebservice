/**
 *softDeleteQrcode.js
 */

const response = require('../../utils/response');

/**
 * @description : soft delete record from database by id;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response..
 * @return {Object} : deactivated Qrcode. {status, message, data}
 */
const softDeleteQrcode = ({ qrcodeDb }) => async (params,req,res) => {
  let updatedQrcode = await qrcodeDb.updateOne(params.query, params.dataToUpdate);
  if (!updatedQrcode){
    return response.recordNotFound();   
  }
  return response.success({ data:updatedQrcode });
};
module.exports = softDeleteQrcode;