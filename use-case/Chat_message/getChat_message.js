/**
 *getChat_message.js
 */

const response = require('../../utils/response');

/**
 * @description : find record from database by id;
 * @param {Object} params : request body including option and query.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : found Chat_message. {status, message, data}
 */
const getChat_message = ({
  Chat_messageDb, filterValidation 
}) => async (params,req,res) => {
  let {
    query, options  
  } = params;
  const validateRequest = await filterValidation(options);
  if (!validateRequest.isValid) {
    return response.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
  }
  let foundChat_message = await Chat_messageDb.findOne(query, options);
  if (!foundChat_message){
    return response.recordNotFound();
  }
  return response.success({ data:foundChat_message });
};
module.exports = getChat_message;