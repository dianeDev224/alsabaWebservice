/**
 *getChat_group.js
 */

const response = require('../../utils/response');

/**
 * @description : find record from database by id;
 * @param {Object} params : request body including option and query.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : found Chat_group. {status, message, data}
 */
const getChat_group = ({
  Chat_groupDb, filterValidation 
}) => async (params,req,res) => {
  let {
    query, options  
  } = params;
  const validateRequest = await filterValidation(options);
  if (!validateRequest.isValid) {
    return response.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
  }
  let foundChat_group = await Chat_groupDb.findOne(query, options);
  if (!foundChat_group){
    return response.recordNotFound();
  }
  return response.success({ data:foundChat_group });
};
module.exports = getChat_group;