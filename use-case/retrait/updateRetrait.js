/**
 *updateRetrait.js
 */

const  retraitEntity = require('../../entities/retrait');
const response = require('../../utils/response');

/**
 * @description : update record with data by id.
 * @param {Object} params : request body including query and data.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : updated Retrait. {status, message, data}
 */
const updateRetrait = ({
  retraitDb, updateValidation
}) => async (params,req,res) => {
  let {
    dataToUpdate, query 
  } = params;
  const validateRequest = await updateValidation(dataToUpdate);
  if (!validateRequest.isValid) {
    return response.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
  }
  let retrait = retraitEntity(dataToUpdate);
  retrait = await retraitDb.updateOne(query,retrait);
  if (!retrait){
    return response.recordNotFound();
  }
  return response.success({ data:retrait });
};
module.exports = updateRetrait;