/**
 *partialUpdatePartenaire.js
 */

const response = require('../../utils/response');

/**
 * @description : partially update record with data by id;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {obj} : updated Partenaire. {status, message, data}
 */
const partialUpdatePartenaire = ({ partenaireDb }) => async (params,req,res) => {
  const partenaire = await partenaireDb.updateOne(params.query,params.dataToUpdate);
  if (!partenaire){
    return response.recordNotFound();
  }
  return response.success({ data:partenaire });
};
module.exports = partialUpdatePartenaire;