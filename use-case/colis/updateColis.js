/**
 *updateColis.js
 */

const  colisEntity = require('../../entities/colis');
const response = require('../../utils/response');

/**
 * @description : update record with data by id.
 * @param {Object} params : request body including query and data.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : updated Colis. {status, message, data}
 */
const updateColis = ({
  colisDb, updateValidation
}) => async (params,req,res) => {
  let {
    dataToUpdate, query 
  } = params;
  const validateRequest = await updateValidation(dataToUpdate);
  if (!validateRequest.isValid) {
    return response.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
  }
  let colis = colisEntity(dataToUpdate);
  colis = await colisDb.updateOne(query,colis);
  if (!colis){
    return response.recordNotFound();
  }
  return response.success({ data:colis });
};
module.exports = updateColis;