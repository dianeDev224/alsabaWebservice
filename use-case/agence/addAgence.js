/**
 *addAgence.js
 */

const  agenceEntity = require('../../entities/agence');
const response = require('../../utils/response');
/**
 * @description : create new record of agence in database.
 * @param {Object} dataToCreate : data for create new document.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : response of create. {status, message, data}
 */
const addAgence = ({
  agenceDb,createValidation 
}) => async (dataToCreate,req,res) => {
  const validateRequest = await createValidation(dataToCreate);
  if (!validateRequest.isValid) {
    return response.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
  }
  let agence = agenceEntity(dataToCreate);
  agence = await agenceDb.create(agence);
  return response.success({ data:agence });
};
module.exports = addAgence;