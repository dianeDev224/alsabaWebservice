
/**
 *bulkInsertDepot.js
 */

const  depotEntity = require('../../entities/depot');
const response = require('../../utils/response');

/**
 * @description : create multiple records  in database.
 * @param {Object} dataToCreate : data for creating documents.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : created Depots. {status, message, data}
 */

const bulkInsertDepot = ({ depotDb }) => async (dataToCreate,req,res) => {
  let depotEntities = dataToCreate.map(item => depotEntity(item));
  let createdDepot = await depotDb.create(depotEntities);
  return response.success({ data:{ count:createdDepot.length || 0 } });
};
module.exports = bulkInsertDepot;