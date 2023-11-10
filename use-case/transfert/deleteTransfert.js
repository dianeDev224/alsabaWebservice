
/**
 *deleteTransfert.js
 */
 
const response = require('../../utils/response');
/**
 * @description : delete record from database.
 * @param {Object} query : query.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : deleted Transfert. {status, message, data}
 */
const deleteTransfert = ({ transfertDb }) => async (query,req,res) => {
  let deletedTransfert = await transfertDb.deleteOne(query);
  if (!deletedTransfert){
    return response.recordNotFound({});
  }
  return response.success({ data: deletedTransfert });
};

module.exports = deleteTransfert;