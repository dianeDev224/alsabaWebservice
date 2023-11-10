/**
 *softDeleteBilan.js
 */

const response = require('../../utils/response');

/**
 * @description : soft delete record from database by id;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response..
 * @return {Object} : deactivated Bilan. {status, message, data}
 */
const softDeleteBilan = ({ bilanDb }) => async (params,req,res) => {
  let updatedBilan = await bilanDb.updateOne(params.query, params.dataToUpdate);
  if (!updatedBilan){
    return response.recordNotFound();   
  }
  return response.success({ data:updatedBilan });
};
module.exports = softDeleteBilan;