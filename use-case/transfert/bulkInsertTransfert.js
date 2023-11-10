
/**
 *bulkInsertTransfert.js
 */

const  transfertEntity = require('../../entities/transfert');
const response = require('../../utils/response');

/**
 * @description : create multiple records  in database.
 * @param {Object} dataToCreate : data for creating documents.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : created Transferts. {status, message, data}
 */

const bulkInsertTransfert = ({ transfertDb }) => async (dataToCreate,req,res) => {
  let transfertEntities = dataToCreate.map(item => transfertEntity(item));
  let createdTransfert = await transfertDb.create(transfertEntities);
  return response.success({ data:{ count:createdTransfert.length || 0 } });
};
module.exports = bulkInsertTransfert;