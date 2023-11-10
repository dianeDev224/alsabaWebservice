/**
 *softDeleteCaisse.js
 */

const response = require('../../utils/response');

/**
 * @description : soft delete record from database by id;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response..
 * @return {Object} : deactivated Caisse. {status, message, data}
 */
const softDeleteCaisse = ({ caisseDb }) => async (params,req,res) => {
  let updatedCaisse = await caisseDb.updateOne(params.query, params.dataToUpdate);
  if (!updatedCaisse){
    return response.recordNotFound();   
  }
  return response.success({ data:updatedCaisse });
};
module.exports = softDeleteCaisse;