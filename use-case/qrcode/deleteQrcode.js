
/**
 *deleteQrcode.js
 */
 
const response = require('../../utils/response');
/**
 * @description : delete record from database.
 * @param {Object} query : query.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : deleted Qrcode. {status, message, data}
 */
const deleteQrcode = ({ qrcodeDb }) => async (query,req,res) => {
  let deletedQrcode = await qrcodeDb.deleteOne(query);
  if (!deletedQrcode){
    return response.recordNotFound({});
  }
  return response.success({ data: deletedQrcode });
};

module.exports = deleteQrcode;