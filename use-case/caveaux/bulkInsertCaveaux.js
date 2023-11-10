
/**
 *bulkInsertCaveaux.js
 */

const  caveauxEntity = require('../../entities/caveaux');
const response = require('../../utils/response');

/**
 * @description : create multiple records  in database.
 * @param {Object} dataToCreate : data for creating documents.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : created Caveauxs. {status, message, data}
 */

const bulkInsertCaveaux = ({ caveauxDb }) => async (dataToCreate,req,res) => {
  let caveauxEntities = dataToCreate.map(item => caveauxEntity(item));
  let createdCaveaux = await caveauxDb.create(caveauxEntities);
  return response.success({ data:{ count:createdCaveaux.length || 0 } });
};
module.exports = bulkInsertCaveaux;