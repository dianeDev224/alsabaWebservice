/**
 *addDisponibilite.js
 */

const  disponibiliteEntity = require('../../entities/disponibilite');
const response = require('../../utils/response');
/**
 * @description : create new record of disponibilite in database.
 * @param {Object} dataToCreate : data for create new document.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : response of create. {status, message, data}
 */
const addDisponibilite = ({
  disponibiliteDb,createValidation 
}) => async (dataToCreate,req,res) => {
  const validateRequest = await createValidation(dataToCreate);
  if (!validateRequest.isValid) {
    return response.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
  }
  let disponibilite = disponibiliteEntity(dataToCreate);
  disponibilite = await disponibiliteDb.create(disponibilite);
  return response.success({ data:disponibilite });
};
module.exports = addDisponibilite;