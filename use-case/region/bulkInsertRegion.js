
/**
 *bulkInsertRegion.js
 */

const  regionEntity = require('../../entities/region');
const response = require('../../utils/response');

/**
 * @description : create multiple records  in database.
 * @param {Object} dataToCreate : data for creating documents.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : created Regions. {status, message, data}
 */

const bulkInsertRegion = ({ regionDb }) => async (dataToCreate,req,res) => {
  let regionEntities = dataToCreate.map(item => regionEntity(item));
  let createdRegion = await regionDb.create(regionEntities);
  return response.success({ data:{ count:createdRegion.length || 0 } });
};
module.exports = bulkInsertRegion;