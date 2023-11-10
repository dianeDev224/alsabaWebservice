/**
 *findAllCaisse.js
 */

const response = require('../../utils/response');

/**
 * @description : find all records from database based on query and options.
 * @param {Object} params : request body including option and query.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : found Caisse(s). {status, message, data}
 */
const findAllCaisse = ({
  caisseDb,filterValidation 
}) => async (params,req,res) => {
  const validateRequest = await filterValidation(params);
  if (!validateRequest.isValid) {
    return response.validationError({ message: `Invalid values in parameters, ${validateRequest.message}` });
  }
  let {
    query, options, isCountOnly 
  } = params;
  if (isCountOnly){
    let totalRecords = await caisseDb.count(query);
    return response.success({ data: { totalRecords } });  
  }
  else {
    let foundCaisse = await caisseDb.paginate(query,options);
    if (!foundCaisse){
      return response.recordNotFound();
    }
    return response.success({ data:foundCaisse });  
  }
        
};
module.exports = findAllCaisse;