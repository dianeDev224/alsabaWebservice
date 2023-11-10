/**
 *addDepot.js
 */

const  depotEntity = require('../../entities/depot');
const response = require('../../utils/response');
/**
 * @description : create new record of depot in database.
 * @param {Object} dataToCreate : data for create new document.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : response of create. {status, message, data}
 */
const addDepot = ({
  depotDb,createValidation 
}) => async (dataToCreate,req,res) => {
  const validateRequest = await createValidation(dataToCreate);
  if (!validateRequest.isValid) {
    return response.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
  }
  let depot = depotEntity(dataToCreate);
  depot = await depotDb.create(depot);
  return response.success({ data:depot });
};
module.exports = addDepot;