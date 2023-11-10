
/**
 *bulkInsertColis.js
 */

const  colisEntity = require('../../entities/colis');
const response = require('../../utils/response');

/**
 * @description : create multiple records  in database.
 * @param {Object} dataToCreate : data for creating documents.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : created Coliss. {status, message, data}
 */

const bulkInsertColis = ({ colisDb }) => async (dataToCreate,req,res) => {
  let colisEntities = dataToCreate.map(item => colisEntity(item));
  let createdColis = await colisDb.create(colisEntities);
  return response.success({ data:{ count:createdColis.length || 0 } });
};
module.exports = bulkInsertColis;