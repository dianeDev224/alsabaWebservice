/**
 *partialUpdateCodeMoney.js
 */

const response = require('../../utils/response');

/**
 * @description : partially update record with data by id;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {obj} : updated CodeMoney. {status, message, data}
 */
const partialUpdateCodeMoney = ({ codeMoneyDb }) => async (params,req,res) => {
  const codemoney = await codeMoneyDb.updateOne(params.query,params.dataToUpdate);
  if (!codemoney){
    return response.recordNotFound();
  }
  return response.success({ data:codemoney });
};
module.exports = partialUpdateCodeMoney;