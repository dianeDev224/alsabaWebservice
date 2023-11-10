/**
 *softDeleteDepot.js
 */

const response = require('../../utils/response');

/**
 * @description : soft delete record from database by id;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response..
 * @return {Object} : deactivated Depot. {status, message, data}
 */
const softDeleteDepot = ({ depotDb }) => async (params,req,res) => {
  let updatedDepot = await depotDb.updateOne(params.query, params.dataToUpdate);
  if (!updatedDepot){
    return response.recordNotFound();   
  }
  return response.success({ data:updatedDepot });
};
module.exports = softDeleteDepot;