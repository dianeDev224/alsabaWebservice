
/**
 *deleteColis.js
 */
 
const response = require('../../utils/response');
/**
 * @description : delete record from database.
 * @param {Object} query : query.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : deleted Colis. {status, message, data}
 */
const deleteColis = ({ colisDb }) => async (query,req,res) => {
  let deletedColis = await colisDb.deleteOne(query);
  if (!deletedColis){
    return response.recordNotFound({});
  }
  return response.success({ data: deletedColis });
};

module.exports = deleteColis;