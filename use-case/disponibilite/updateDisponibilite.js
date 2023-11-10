/**
 *updateDisponibilite.js
 */

const  disponibiliteEntity = require('../../entities/disponibilite');
const response = require('../../utils/response');

/**
 * @description : update record with data by id.
 * @param {Object} params : request body including query and data.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : updated Disponibilite. {status, message, data}
 */
const updateDisponibilite = ({
  disponibiliteDb, updateValidation
}) => async (params,req,res) => {
  let {
    dataToUpdate, query 
  } = params;
  const validateRequest = await updateValidation(dataToUpdate);
  if (!validateRequest.isValid) {
    return response.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
  }
  let disponibilite = disponibiliteEntity(dataToUpdate);
  disponibilite = await disponibiliteDb.updateOne(query,disponibilite);
  if (!disponibilite){
    return response.recordNotFound();
  }
  return response.success({ data:disponibilite });
};
module.exports = updateDisponibilite;