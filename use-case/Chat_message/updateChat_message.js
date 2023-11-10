/**
 *updateChat_message.js
 */

const  Chat_messageEntity = require('../../entities/Chat_message');
const response = require('../../utils/response');

/**
 * @description : update record with data by id.
 * @param {Object} params : request body including query and data.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : updated Chat_message. {status, message, data}
 */
const updateChat_message = ({
  Chat_messageDb, updateValidation
}) => async (params,req,res) => {
  let {
    dataToUpdate, query 
  } = params;
  const validateRequest = await updateValidation(dataToUpdate);
  if (!validateRequest.isValid) {
    return response.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
  }
  let chat_message = Chat_messageEntity(dataToUpdate);
  chat_message = await Chat_messageDb.updateOne(query,chat_message);
  if (!chat_message){
    return response.recordNotFound();
  }
  return response.success({ data:chat_message });
};
module.exports = updateChat_message;