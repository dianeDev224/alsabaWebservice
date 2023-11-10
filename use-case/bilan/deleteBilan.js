
/**
 *deleteBilan.js
 */
 
const response = require('../../utils/response');
/**
 * @description : delete record from database.
 * @param {Object} query : query.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : deleted Bilan. {status, message, data}
 */
const deleteBilan = ({ bilanDb }) => async (query,req,res) => {
  let deletedBilan = await bilanDb.deleteOne(query);
  if (!deletedBilan){
    return response.recordNotFound({});
  }
  return response.success({ data: deletedBilan });
};

module.exports = deleteBilan;