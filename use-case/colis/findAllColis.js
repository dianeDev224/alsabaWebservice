/**
 *findAllColis.js
 */

const response = require('../../utils/response');

/**
 * @description : find all records from database based on query and options.
 * @param {Object} params : request body including option and query.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : found Colis(s). {status, message, data}
 */
const findAllColis = ({
  colisDb,filterValidation 
}) => async (params,req,res) => {
  const validateRequest = await filterValidation(params);
  if (!validateRequest.isValid) {
    return response.validationError({ message: `Invalid values in parameters, ${validateRequest.message}` });
  }
  let {
    query, options, isCountOnly 
  } = params;
  if (isCountOnly){
    let totalRecords = await colisDb.count(query);
    return response.success({ data: { totalRecords } });  
  }
  else {
    let foundColis = await colisDb.paginate(query,options);
    if (!foundColis){
      return response.recordNotFound();
    }
    return response.success({ data:foundColis });  
  }
        
};
module.exports = findAllColis;