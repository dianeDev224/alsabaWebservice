/**
 *partialUpdateColis.js
 */

const response = require('../../utils/response');

/**
 * @description : partially update record with data by id;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {obj} : updated Colis. {status, message, data}
 */
const partialUpdateColis = ({ colisDb }) => async (params,req,res) => {
  const colis = await colisDb.updateOne(params.query,params.dataToUpdate);
  if (!colis){
    return response.recordNotFound();
  }
  return response.success({ data:colis });
};
module.exports = partialUpdateColis;