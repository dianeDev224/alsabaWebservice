/**
 *addBilan.js
 */

const  bilanEntity = require('../../entities/bilan');
const response = require('../../utils/response');
/**
 * @description : create new record of bilan in database.
 * @param {Object} dataToCreate : data for create new document.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : response of create. {status, message, data}
 */
const addBilan = ({
  bilanDb,createValidation 
}) => async (dataToCreate,req,res) => {
  const validateRequest = await createValidation(dataToCreate);
  if (!validateRequest.isValid) {
    return response.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
  }
  let bilan = bilanEntity(dataToCreate);
  bilan = await bilanDb.create(bilan);
  return response.success({ data:bilan });
};
module.exports = addBilan;