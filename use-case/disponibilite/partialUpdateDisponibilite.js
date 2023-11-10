/**
 *partialUpdateDisponibilite.js
 */

const response = require('../../utils/response');

/**
 * @description : partially update record with data by id;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {obj} : updated Disponibilite. {status, message, data}
 */
const partialUpdateDisponibilite = ({ disponibiliteDb }) => async (params,req,res) => {
  const disponibilite = await disponibiliteDb.updateOne(params.query,params.dataToUpdate);
  if (!disponibilite){
    return response.recordNotFound();
  }
  return response.success({ data:disponibilite });
};
module.exports = partialUpdateDisponibilite;