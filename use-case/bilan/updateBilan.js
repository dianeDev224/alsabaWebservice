/**
 *updateBilan.js
 */

const  bilanEntity = require('../../entities/bilan');
const response = require('../../utils/response');

/**
 * @description : update record with data by id.
 * @param {Object} params : request body including query and data.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : updated Bilan. {status, message, data}
 */
const updateBilan = ({
  bilanDb, updateValidation
}) => async (params,req,res) => {
  let {
    dataToUpdate, query 
  } = params;
  const validateRequest = await updateValidation(dataToUpdate);
  if (!validateRequest.isValid) {
    return response.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
  }
  let bilan = bilanEntity(dataToUpdate);
  bilan = await bilanDb.updateOne(query,bilan);
  if (!bilan){
    return response.recordNotFound();
  }
  return response.success({ data:bilan });
};
module.exports = updateBilan;