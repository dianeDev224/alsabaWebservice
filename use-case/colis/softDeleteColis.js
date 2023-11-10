/**
 *softDeleteColis.js
 */

const response = require('../../utils/response');

/**
 * @description : soft delete record from database by id;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response..
 * @return {Object} : deactivated Colis. {status, message, data}
 */
const softDeleteColis = ({ colisDb }) => async (params,req,res) => {
  let updatedColis = await colisDb.updateOne(params.query, params.dataToUpdate);
  if (!updatedColis){
    return response.recordNotFound();   
  }
  return response.success({ data:updatedColis });
};
module.exports = softDeleteColis;