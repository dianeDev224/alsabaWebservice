/**
 *partialUpdateAgence.js
 */

const response = require('../../utils/response');

/**
 * @description : partially update record with data by id;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {obj} : updated Agence. {status, message, data}
 */
const partialUpdateAgence = ({ agenceDb }) => async (params,req,res) => {
  const agence = await agenceDb.updateOne(params.query,params.dataToUpdate);
  if (!agence){
    return response.recordNotFound();
  }
  return response.success({ data:agence });
};
module.exports = partialUpdateAgence;