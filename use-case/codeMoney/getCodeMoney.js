/**
 *getCodeMoney.js
 */

const response = require('../../utils/response');

/**
 * @description : find record from database by id;
 * @param {Object} params : request body including option and query.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : found CodeMoney. {status, message, data}
 */
const getCodeMoney = ({
  codeMoneyDb, filterValidation 
}) => async (params,req,res) => {
  let {
    query, options  
  } = params;
  const validateRequest = await filterValidation(options);
  if (!validateRequest.isValid) {
    return response.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
  }
  let foundCodeMoney = await codeMoneyDb.findOne(query, options);
  if (!foundCodeMoney){
    return response.recordNotFound();
  }
  return response.success({ data:foundCodeMoney });
};
module.exports = getCodeMoney;