/**
 *partialUpdateCaisse.js
 */

const response = require('../../utils/response');

/**
 * @description : partially update record with data by id;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {obj} : updated Caisse. {status, message, data}
 */
const partialUpdateCaisse = ({ caisseDb }) => async (params,req,res) => {
  const caisse = await caisseDb.updateOne(params.query,params.dataToUpdate);
  if (!caisse){
    return response.recordNotFound();
  }
  return response.success({ data:caisse });
};
module.exports = partialUpdateCaisse;