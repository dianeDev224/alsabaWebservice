/**
 *findAllCaveaux.js
 */

const response = require('../../utils/response');

/**
 * @description : find all records from database based on query and options.
 * @param {Object} params : request body including option and query.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : found Caveaux(s). {status, message, data}
 */
const findAllCaveaux = ({
  caveauxDb,filterValidation 
}) => async (params,req,res) => {
  const validateRequest = await filterValidation(params);
  if (!validateRequest.isValid) {
    return response.validationError({ message: `Invalid values in parameters, ${validateRequest.message}` });
  }
  let {
    query, options, isCountOnly 
  } = params;
  if (isCountOnly){
    let totalRecords = await caveauxDb.count(query);
    return response.success({ data: { totalRecords } });  
  }
  else {
    let foundCaveaux = await caveauxDb.paginate(query,options);
    if (!foundCaveaux){
      return response.recordNotFound();
    }
    return response.success({ data:foundCaveaux });  
  }
        
};
module.exports = findAllCaveaux;