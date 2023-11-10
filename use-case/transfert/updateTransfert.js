/**
 *updateTransfert.js
 */

const  transfertEntity = require('../../entities/transfert');
const response = require('../../utils/response');

/**
 * @description : update record with data by id.
 * @param {Object} params : request body including query and data.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : updated Transfert. {status, message, data}
 */
const updateTransfert = ({
  transfertDb, updateValidation
}) => async (params,req,res) => {
  let {
    dataToUpdate, query 
  } = params;
  const validateRequest = await updateValidation(dataToUpdate);
  if (!validateRequest.isValid) {
    return response.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
  }
  let transfert = transfertEntity(dataToUpdate);
  transfert = await transfertDb.updateOne(query,transfert);
  if (!transfert){
    return response.recordNotFound();
  }
  return response.success({ data:transfert });
};
module.exports = updateTransfert;