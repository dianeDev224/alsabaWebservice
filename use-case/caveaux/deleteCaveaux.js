
/**
 *deleteCaveaux.js
 */
 
const response = require('../../utils/response');
/**
 * @description : delete record from database.
 * @param {Object} query : query.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : deleted Caveaux. {status, message, data}
 */
const deleteCaveaux = ({ caveauxDb }) => async (query,req,res) => {
  let deletedCaveaux = await caveauxDb.deleteOne(query);
  if (!deletedCaveaux){
    return response.recordNotFound({});
  }
  return response.success({ data: deletedCaveaux });
};

module.exports = deleteCaveaux;