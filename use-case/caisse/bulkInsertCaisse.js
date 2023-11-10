
/**
 *bulkInsertCaisse.js
 */

const  caisseEntity = require('../../entities/caisse');
const response = require('../../utils/response');

/**
 * @description : create multiple records  in database.
 * @param {Object} dataToCreate : data for creating documents.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : created Caisses. {status, message, data}
 */

const bulkInsertCaisse = ({ caisseDb }) => async (dataToCreate,req,res) => {
  let caisseEntities = dataToCreate.map(item => caisseEntity(item));
  let createdCaisse = await caisseDb.create(caisseEntities);
  return response.success({ data:{ count:createdCaisse.length || 0 } });
};
module.exports = bulkInsertCaisse;