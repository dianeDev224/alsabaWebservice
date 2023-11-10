/**
 *softDeleteTransfert.js
 */

const response = require('../../utils/response');

/**
 * @description : soft delete record from database by id;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response..
 * @return {Object} : deactivated Transfert. {status, message, data}
 */
const softDeleteTransfert = ({ transfertDb }) => async (params,req,res) => {
  let updatedTransfert = await transfertDb.updateOne(params.query, params.dataToUpdate);
  if (!updatedTransfert){
    return response.recordNotFound();   
  }
  return response.success({ data:updatedTransfert });
};
module.exports = softDeleteTransfert;