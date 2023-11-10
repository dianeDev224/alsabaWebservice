/**
 *addChat_message.js
 */

const  Chat_messageEntity = require('../../entities/Chat_message');
const response = require('../../utils/response');
/**
 * @description : create new record of Chat_message in database.
 * @param {Object} dataToCreate : data for create new document.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : response of create. {status, message, data}
 */
const addChat_message = ({
  Chat_messageDb,createValidation 
}) => async (dataToCreate,req,res) => {
  const validateRequest = await createValidation(dataToCreate);
  if (!validateRequest.isValid) {
    return response.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
  }
  let Chat_message = Chat_messageEntity(dataToCreate);
  Chat_message = await Chat_messageDb.create(Chat_message);
  return response.success({ data:Chat_message });
};
module.exports = addChat_message;