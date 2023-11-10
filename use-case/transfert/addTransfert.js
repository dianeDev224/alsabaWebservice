/**
 *addTransfert.js
 */

const  transfertEntity = require('../../entities/transfert');
const response = require('../../utils/response');
/**
 * @description : create new record of transfert in database.
 * @param {Object} dataToCreate : data for create new document.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : response of create. {status, message, data}
 */
const addTransfert = ({
  transfertDb,createValidation 
}) => async (dataToCreate,req,res) => {
  const validateRequest = await createValidation(dataToCreate);
  if (!validateRequest.isValid) {
    return response.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
  }
  let transfert = transfertEntity(dataToCreate);
  transfert = await transfertDb.create(transfert);
  return response.success({ data:transfert });
};
module.exports = addTransfert;