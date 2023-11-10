/**
 *addRegion.js
 */

const  regionEntity = require('../../entities/region');
const response = require('../../utils/response');
/**
 * @description : create new record of region in database.
 * @param {Object} dataToCreate : data for create new document.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : response of create. {status, message, data}
 */
const addRegion = ({
  regionDb,createValidation 
}) => async (dataToCreate,req,res) => {
  const validateRequest = await createValidation(dataToCreate);
  if (!validateRequest.isValid) {
    return response.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
  }
  let region = regionEntity(dataToCreate);
  region = await regionDb.create(region);
  return response.success({ data:region });
};
module.exports = addRegion;