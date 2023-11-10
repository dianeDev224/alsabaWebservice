
/**
 *bulkInsertQrcode.js
 */

const  qrcodeEntity = require('../../entities/qrcode');
const response = require('../../utils/response');

/**
 * @description : create multiple records  in database.
 * @param {Object} dataToCreate : data for creating documents.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : created Qrcodes. {status, message, data}
 */

const bulkInsertQrcode = ({ qrcodeDb }) => async (dataToCreate,req,res) => {
  let qrcodeEntities = dataToCreate.map(item => qrcodeEntity(item));
  let createdQrcode = await qrcodeDb.create(qrcodeEntities);
  return response.success({ data:{ count:createdQrcode.length || 0 } });
};
module.exports = bulkInsertQrcode;