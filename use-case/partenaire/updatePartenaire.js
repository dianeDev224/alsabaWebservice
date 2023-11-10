/**
 *updatePartenaire.js
 */

const  partenaireEntity = require('../../entities/partenaire');
const response = require('../../utils/response');

/**
 * @description : update record with data by id.
 * @param {Object} params : request body including query and data.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : updated Partenaire. {status, message, data}
 */
const updatePartenaire = ({
  partenaireDb, updateValidation
}) => async (params,req,res) => {
  let {
    dataToUpdate, query 
  } = params;
  const validateRequest = await updateValidation(dataToUpdate);
  if (!validateRequest.isValid) {
    return response.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
  }
  let partenaire = partenaireEntity(dataToUpdate);
  partenaire = await partenaireDb.updateOne(query,partenaire);
  if (!partenaire){
    return response.recordNotFound();
  }
  return response.success({ data:partenaire });
};
module.exports = updatePartenaire;