
/**
 *bulkInsertDisponibilite.js
 */

const  disponibiliteEntity = require('../../entities/disponibilite');
const response = require('../../utils/response');

/**
 * @description : create multiple records  in database.
 * @param {Object} dataToCreate : data for creating documents.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : created Disponibilites. {status, message, data}
 */

const bulkInsertDisponibilite = ({ disponibiliteDb }) => async (dataToCreate,req,res) => {
  let disponibiliteEntities = dataToCreate.map(item => disponibiliteEntity(item));
  let createdDisponibilite = await disponibiliteDb.create(disponibiliteEntities);
  return response.success({ data:{ count:createdDisponibilite.length || 0 } });
};
module.exports = bulkInsertDisponibilite;