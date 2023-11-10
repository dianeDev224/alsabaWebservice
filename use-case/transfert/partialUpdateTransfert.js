/**
 *partialUpdateTransfert.js
 */

const response = require('../../utils/response');

/**
 * @description : partially update record with data by id;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {obj} : updated Transfert. {status, message, data}
 */
const partialUpdateTransfert = ({ transfertDb }) => async (params,req,res) => {
  const transfert = await transfertDb.updateOne(params.query,params.dataToUpdate);
  if (!transfert){
    return response.recordNotFound();
  }
  return response.success({ data:transfert });
};
module.exports = partialUpdateTransfert;