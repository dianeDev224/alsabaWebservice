/**
 *softDeleteRetrait.js
 */

const response = require('../../utils/response');

/**
 * @description : soft delete record from database by id;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response..
 * @return {Object} : deactivated Retrait. {status, message, data}
 */
const softDeleteRetrait = ({ retraitDb }) => async (params,req,res) => {
  let updatedRetrait = await retraitDb.updateOne(params.query, params.dataToUpdate);
  if (!updatedRetrait){
    return response.recordNotFound();   
  }
  return response.success({ data:updatedRetrait });
};
module.exports = softDeleteRetrait;