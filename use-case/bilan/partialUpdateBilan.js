/**
 *partialUpdateBilan.js
 */

const response = require('../../utils/response');

/**
 * @description : partially update record with data by id;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {obj} : updated Bilan. {status, message, data}
 */
const partialUpdateBilan = ({ bilanDb }) => async (params,req,res) => {
  const bilan = await bilanDb.updateOne(params.query,params.dataToUpdate);
  if (!bilan){
    return response.recordNotFound();
  }
  return response.success({ data:bilan });
};
module.exports = partialUpdateBilan;