/**
 *addCaveaux.js
 */

const  caveauxEntity = require('../../entities/caveaux');
const response = require('../../utils/response');
/**
 * @description : create new record of caveaux in database.
 * @param {Object} dataToCreate : data for create new document.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : response of create. {status, message, data}
 */
const addCaveaux = ({
  caveauxDb,createValidation 
}) => async (dataToCreate,req,res) => {
  const validateRequest = await createValidation(dataToCreate);
  if (!validateRequest.isValid) {
    return response.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
  }
  let caveaux = caveauxEntity(dataToCreate);
  caveaux = await caveauxDb.create(caveaux);
  return response.success({ data:caveaux });
};
module.exports = addCaveaux;