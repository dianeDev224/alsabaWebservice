
/**
 *bulkInsertBilan.js
 */

const  bilanEntity = require('../../entities/bilan');
const response = require('../../utils/response');

/**
 * @description : create multiple records  in database.
 * @param {Object} dataToCreate : data for creating documents.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : created Bilans. {status, message, data}
 */

const bulkInsertBilan = ({ bilanDb }) => async (dataToCreate,req,res) => {
  let bilanEntities = dataToCreate.map(item => bilanEntity(item));
  let createdBilan = await bilanDb.create(bilanEntities);
  return response.success({ data:{ count:createdBilan.length || 0 } });
};
module.exports = bulkInsertBilan;