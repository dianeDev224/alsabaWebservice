/**
 *updateDepot.js
 */

const  depotEntity = require('../../entities/depot');
const response = require('../../utils/response');

/**
 * @description : update record with data by id.
 * @param {Object} params : request body including query and data.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : updated Depot. {status, message, data}
 */
const updateDepot = ({
  depotDb, updateValidation
}) => async (params,req,res) => {
  let {
    dataToUpdate, query 
  } = params;
  const validateRequest = await updateValidation(dataToUpdate);
  if (!validateRequest.isValid) {
    return response.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
  }
  let depot = depotEntity(dataToUpdate);
  depot = await depotDb.updateOne(query,depot);
  if (!depot){
    return response.recordNotFound();
  }
  return response.success({ data:depot });
};
module.exports = updateDepot;