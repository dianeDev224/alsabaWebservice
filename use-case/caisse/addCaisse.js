/**
 *addCaisse.js
 */

const  caisseEntity = require('../../entities/caisse');
const response = require('../../utils/response');
/**
 * @description : create new record of caisse in database.
 * @param {Object} dataToCreate : data for create new document.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : response of create. {status, message, data}
 */
const addCaisse = ({
  caisseDb,createValidation 
}) => async (dataToCreate,req,res) => {
  const validateRequest = await createValidation(dataToCreate);
  if (!validateRequest.isValid) {
    return response.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
  }
  let caisse = caisseEntity(dataToCreate);
  caisse = await caisseDb.create(caisse);
  return response.success({ data:caisse });
};
module.exports = addCaisse;