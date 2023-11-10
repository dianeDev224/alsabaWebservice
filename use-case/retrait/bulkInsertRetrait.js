
/**
 *bulkInsertRetrait.js
 */

const  retraitEntity = require('../../entities/retrait');
const response = require('../../utils/response');

/**
 * @description : create multiple records  in database.
 * @param {Object} dataToCreate : data for creating documents.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : created Retraits. {status, message, data}
 */

const bulkInsertRetrait = ({ retraitDb }) => async (dataToCreate,req,res) => {
  let retraitEntities = dataToCreate.map(item => retraitEntity(item));
  let createdRetrait = await retraitDb.create(retraitEntities);
  return response.success({ data:{ count:createdRetrait.length || 0 } });
};
module.exports = bulkInsertRetrait;