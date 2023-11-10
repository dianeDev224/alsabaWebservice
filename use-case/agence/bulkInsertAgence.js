
/**
 *bulkInsertAgence.js
 */

const  agenceEntity = require('../../entities/agence');
const response = require('../../utils/response');

/**
 * @description : create multiple records  in database.
 * @param {Object} dataToCreate : data for creating documents.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : created Agences. {status, message, data}
 */

const bulkInsertAgence = ({ agenceDb }) => async (dataToCreate,req,res) => {
  let agenceEntities = dataToCreate.map(item => agenceEntity(item));
  let createdAgence = await agenceDb.create(agenceEntities);
  return response.success({ data:{ count:createdAgence.length || 0 } });
};
module.exports = bulkInsertAgence;