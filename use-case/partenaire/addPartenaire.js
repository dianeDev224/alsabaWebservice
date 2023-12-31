/**
 *addPartenaire.js
 */

const  partenaireEntity = require('../../entities/partenaire');
const response = require('../../utils/response');
/**
 * @description : create new record of partenaire in database.
 * @param {Object} dataToCreate : data for create new document.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : response of create. {status, message, data}
 */
const addPartenaire = ({
  partenaireDb,createValidation 
}) => async (dataToCreate,req,res) => {
  const validateRequest = await createValidation(dataToCreate);
  if (!validateRequest.isValid) {
    return response.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
  }
  let partenaire = partenaireEntity(dataToCreate);
  partenaire = await partenaireDb.create(partenaire);
  return response.success({ data:partenaire });
};
module.exports = addPartenaire;