
/**
 *deleteCaisse.js
 */
 
const response = require('../../utils/response');
/**
 * @description : delete record from database.
 * @param {Object} query : query.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : deleted Caisse. {status, message, data}
 */
const deleteCaisse = ({ caisseDb }) => async (query,req,res) => {
  let deletedCaisse = await caisseDb.deleteOne(query);
  if (!deletedCaisse){
    return response.recordNotFound({});
  }
  return response.success({ data: deletedCaisse });
};

module.exports = deleteCaisse;