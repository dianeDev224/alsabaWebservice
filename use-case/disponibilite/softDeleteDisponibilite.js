/**
 *softDeleteDisponibilite.js
 */

const response = require('../../utils/response');

/**
 * @description : soft delete record from database by id;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response..
 * @return {Object} : deactivated Disponibilite. {status, message, data}
 */
const softDeleteDisponibilite = ({ disponibiliteDb }) => async (params,req,res) => {
  let updatedDisponibilite = await disponibiliteDb.updateOne(params.query, params.dataToUpdate);
  if (!updatedDisponibilite){
    return response.recordNotFound();   
  }
  return response.success({ data:updatedDisponibilite });
};
module.exports = softDeleteDisponibilite;