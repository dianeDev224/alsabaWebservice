/**
 *updateRegion.js
 */

const  regionEntity = require('../../entities/region');
const response = require('../../utils/response');

/**
 * @description : update record with data by id.
 * @param {Object} params : request body including query and data.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : updated Region. {status, message, data}
 */
const updateRegion = ({
  regionDb, updateValidation
}) => async (params,req,res) => {
  let {
    dataToUpdate, query 
  } = params;
  const validateRequest = await updateValidation(dataToUpdate);
  if (!validateRequest.isValid) {
    return response.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
  }
  let region = regionEntity(dataToUpdate);
  region = await regionDb.updateOne(query,region);
  if (!region){
    return response.recordNotFound();
  }
  return response.success({ data:region });
};
module.exports = updateRegion;