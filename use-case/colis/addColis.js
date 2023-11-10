/**
 *addColis.js
 */

const  colisEntity = require('../../entities/colis');
const response = require('../../utils/response');
/**
 * @description : create new record of colis in database.
 * @param {Object} dataToCreate : data for create new document.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : response of create. {status, message, data}
 */
const addColis = ({
  colisDb,createValidation 
}) => async (dataToCreate,req,res) => {
  const validateRequest = await createValidation(dataToCreate);
  if (!validateRequest.isValid) {
    return response.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
  }
  let colis = colisEntity(dataToCreate);
  colis = await colisDb.create(colis);
  return response.success({ data:colis });
};
module.exports = addColis;