/**
 *findAllPartenaire.js
 */

const response = require('../../utils/response');

/**
 * @description : find all records from database based on query and options.
 * @param {Object} params : request body including option and query.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : found Partenaire(s). {status, message, data}
 */
const findAllPartenaire = ({
  partenaireDb,filterValidation 
}) => async (params,req,res) => {
  const validateRequest = await filterValidation(params);
  if (!validateRequest.isValid) {
    return response.validationError({ message: `Invalid values in parameters, ${validateRequest.message}` });
  }
  let {
    query, options, isCountOnly 
  } = params;
  if (isCountOnly){
    let totalRecords = await partenaireDb.count(query);
    return response.success({ data: { totalRecords } });  
  }
  else {
    let foundPartenaire = await partenaireDb.paginate(query,options);
    if (!foundPartenaire){
      return response.recordNotFound();
    }
    return response.success({ data:foundPartenaire });  
  }
        
};
module.exports = findAllPartenaire;