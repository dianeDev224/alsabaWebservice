/**
 *updateCodeMoney.js
 */

const  codeMoneyEntity = require('../../entities/codeMoney');
const response = require('../../utils/response');

/**
 * @description : update record with data by id.
 * @param {Object} params : request body including query and data.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : updated CodeMoney. {status, message, data}
 */
const updateCodeMoney = ({
  codeMoneyDb, updateValidation
}) => async (params,req,res) => {
  let {
    dataToUpdate, query 
  } = params;
  const validateRequest = await updateValidation(dataToUpdate);
  if (!validateRequest.isValid) {
    return response.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
  }
  let codemoney = codeMoneyEntity(dataToUpdate);
  codemoney = await codeMoneyDb.updateOne(query,codemoney);
  if (!codemoney){
    return response.recordNotFound();
  }
  return response.success({ data:codemoney });
};
module.exports = updateCodeMoney;