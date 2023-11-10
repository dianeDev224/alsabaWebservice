
/**
 *deleteDisponibilite.js
 */
 
const response = require('../../utils/response');
/**
 * @description : delete record from database.
 * @param {Object} query : query.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : deleted Disponibilite. {status, message, data}
 */
const deleteDisponibilite = ({ disponibiliteDb }) => async (query,req,res) => {
  let deletedDisponibilite = await disponibiliteDb.deleteOne(query);
  if (!deletedDisponibilite){
    return response.recordNotFound({});
  }
  return response.success({ data: deletedDisponibilite });
};

module.exports = deleteDisponibilite;