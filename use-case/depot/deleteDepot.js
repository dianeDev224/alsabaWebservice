
/**
 *deleteDepot.js
 */
 
const response = require('../../utils/response');
/**
 * @description : delete record from database.
 * @param {Object} query : query.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : deleted Depot. {status, message, data}
 */
const deleteDepot = ({ depotDb }) => async (query,req,res) => {
  let deletedDepot = await depotDb.deleteOne(query);
  if (!deletedDepot){
    return response.recordNotFound({});
  }
  return response.success({ data: deletedDepot });
};

module.exports = deleteDepot;