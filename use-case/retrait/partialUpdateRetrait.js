/**
 *partialUpdateRetrait.js
 */

const response = require('../../utils/response');

/**
 * @description : partially update record with data by id;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {obj} : updated Retrait. {status, message, data}
 */
const partialUpdateRetrait = ({ retraitDb }) => async (params,req,res) => {
  const retrait = await retraitDb.updateOne(params.query,params.dataToUpdate);
  if (!retrait){
    return response.recordNotFound();
  }
  return response.success({ data:retrait });
};
module.exports = partialUpdateRetrait;