
/**
 *bulkInsertPartenaire.js
 */

const  partenaireEntity = require('../../entities/partenaire');
const response = require('../../utils/response');

/**
 * @description : create multiple records  in database.
 * @param {Object} dataToCreate : data for creating documents.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : created Partenaires. {status, message, data}
 */

const bulkInsertPartenaire = ({ partenaireDb }) => async (dataToCreate,req,res) => {
  let partenaireEntities = dataToCreate.map(item => partenaireEntity(item));
  let createdPartenaire = await partenaireDb.create(partenaireEntities);
  return response.success({ data:{ count:createdPartenaire.length || 0 } });
};
module.exports = bulkInsertPartenaire;