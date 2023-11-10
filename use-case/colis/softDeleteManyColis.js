/**
 *softDeleteManyColis.js
 */

const response = require('../../utils/response');

/**
 * @description : soft delete multiple records from database by ids;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : number of deactivated documents. {status, message, data}
 */
const softDeleteManyColis = ({ colisDb }) => async (params, req, res) => {
  let updatedColis = await colisDb.updateMany(params.query, params.dataToUpdate);
  if (!updatedColis){
    return response.recordNotFound();
  }
  return response.success({ data:{ count : updatedColis } });
};
module.exports = softDeleteManyColis;
