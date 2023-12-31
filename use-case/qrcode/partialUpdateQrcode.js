/**
 *partialUpdateQrcode.js
 */

const response = require('../../utils/response');

/**
 * @description : partially update record with data by id;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {obj} : updated Qrcode. {status, message, data}
 */
const partialUpdateQrcode = ({ qrcodeDb }) => async (params,req,res) => {
  const qrcode = await qrcodeDb.updateOne(params.query,params.dataToUpdate);
  if (!qrcode){
    return response.recordNotFound();
  }
  return response.success({ data:qrcode });
};
module.exports = partialUpdateQrcode;