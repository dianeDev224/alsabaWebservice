/**
 *addCodeMoney.js
 */

const  codeMoneyEntity = require('../../entities/codeMoney');
const response = require('../../utils/response');
/**
 * @description : create new record of codeMoney in database.
 * @param {Object} dataToCreate : data for create new document.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : response of create. {status, message, data}
 */
const addCodeMoney = ({
  codeMoneyDb,createValidation 
}) => async (dataToCreate,req,res) => {
  const validateRequest = await createValidation(dataToCreate);
  if (!validateRequest.isValid) {
    return response.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
  }
  let codeMoney = codeMoneyEntity(dataToCreate);
  codeMoney = await codeMoneyDb.create(codeMoney);
  return response.success({ data:codeMoney });
};
module.exports = addCodeMoney;