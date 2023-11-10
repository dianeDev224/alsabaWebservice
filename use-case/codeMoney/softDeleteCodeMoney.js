/**
 *softDeleteCodeMoney.js
 */

const response = require('../../utils/response');

/**
 * @description : soft delete record from database by id;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response..
 * @return {Object} : deactivated CodeMoney. {status, message, data}
 */
const softDeleteCodeMoney = ({ codeMoneyDb }) => async (params,req,res) => {
  let updatedCodeMoney = await codeMoneyDb.updateOne(params.query, params.dataToUpdate);
  if (!updatedCodeMoney){
    return response.recordNotFound();   
  }
  return response.success({ data:updatedCodeMoney });
};
module.exports = softDeleteCodeMoney;