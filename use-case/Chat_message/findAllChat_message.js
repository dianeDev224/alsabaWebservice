/**
 *findAllChat_message.js
 */

const response = require('../../utils/response');

/**
 * @description : find all records from database based on query and options.
 * @param {Object} params : request body including option and query.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : found Chat_message(s). {status, message, data}
 */
const findAllChat_message = ({
  Chat_messageDb,filterValidation 
}) => async (params,req,res) => {
  const validateRequest = await filterValidation(params);
  if (!validateRequest.isValid) {
    return response.validationError({ message: `Invalid values in parameters, ${validateRequest.message}` });
  }
  let {
    query, options, isCountOnly 
  } = params;
  if (isCountOnly){
    let totalRecords = await Chat_messageDb.count(query);
    return response.success({ data: { totalRecords } });  
  }
  else {
    let foundChat_message = await Chat_messageDb.paginate(query,options);
    if (!foundChat_message){
      return response.recordNotFound();
    }
    return response.success({ data:foundChat_message });  
  }
        
};
module.exports = findAllChat_message;