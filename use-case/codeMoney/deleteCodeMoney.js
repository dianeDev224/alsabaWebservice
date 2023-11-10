
/**
 *deleteCodeMoney.js
 */
 
const response = require('../../utils/response');
/**
 * @description : delete record from database.
 * @param {Object} query : query.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : deleted CodeMoney. {status, message, data}
 */
const deleteCodeMoney = ({ codeMoneyDb }) => async (query,req,res) => {
  let deletedCodeMoney = await codeMoneyDb.deleteOne(query);
  if (!deletedCodeMoney){
    return response.recordNotFound({});
  }
  return response.success({ data: deletedCodeMoney });
};

module.exports = deleteCodeMoney;