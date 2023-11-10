/**
 *updateCaveaux.js
 */

const  caveauxEntity = require('../../entities/caveaux');
const response = require('../../utils/response');

/**
 * @description : update record with data by id.
 * @param {Object} params : request body including query and data.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : updated Caveaux. {status, message, data}
 */
const updateCaveaux = ({
  caveauxDb, updateValidation
}) => async (params,req,res) => {
  let {
    dataToUpdate, query 
  } = params;
  const validateRequest = await updateValidation(dataToUpdate);
  if (!validateRequest.isValid) {
    return response.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
  }
  let caveaux = caveauxEntity(dataToUpdate);
  caveaux = await caveauxDb.updateOne(query,caveaux);
  if (!caveaux){
    return response.recordNotFound();
  }
  return response.success({ data:caveaux });
};
module.exports = updateCaveaux;