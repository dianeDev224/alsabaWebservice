/**
 *addRetrait.js
 */

const  retraitEntity = require('../../entities/retrait');
const response = require('../../utils/response');
/**
 * @description : create new record of retrait in database.
 * @param {Object} dataToCreate : data for create new document.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : response of create. {status, message, data}
 */
const addRetrait = ({
  retraitDb,createValidation 
}) => async (dataToCreate,req,res) => {
  const validateRequest = await createValidation(dataToCreate);
  if (!validateRequest.isValid) {
    return response.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
  }
  let retrait = retraitEntity(dataToCreate);
  retrait = await retraitDb.create(retrait);
  return response.success({ data:retrait });
};
module.exports = addRetrait;