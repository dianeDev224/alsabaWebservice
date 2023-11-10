/**
 *updateCaisse.js
 */

const  caisseEntity = require('../../entities/caisse');
const response = require('../../utils/response');

/**
 * @description : update record with data by id.
 * @param {Object} params : request body including query and data.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : updated Caisse. {status, message, data}
 */
const updateCaisse = ({
  caisseDb, updateValidation
}) => async (params,req,res) => {
  let {
    dataToUpdate, query 
  } = params;
  const validateRequest = await updateValidation(dataToUpdate);
  if (!validateRequest.isValid) {
    return response.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
  }
  let caisse = caisseEntity(dataToUpdate);
  caisse = await caisseDb.updateOne(query,caisse);
  if (!caisse){
    return response.recordNotFound();
  }
  return response.success({ data:caisse });
};
module.exports = updateCaisse;