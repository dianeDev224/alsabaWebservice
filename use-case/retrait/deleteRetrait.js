
/**
 *deleteRetrait.js
 */
 
const response = require('../../utils/response');
/**
 * @description : delete record from database.
 * @param {Object} query : query.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : deleted Retrait. {status, message, data}
 */
const deleteRetrait = ({ retraitDb }) => async (query,req,res) => {
  let deletedRetrait = await retraitDb.deleteOne(query);
  if (!deletedRetrait){
    return response.recordNotFound({});
  }
  return response.success({ data: deletedRetrait });
};

module.exports = deleteRetrait;