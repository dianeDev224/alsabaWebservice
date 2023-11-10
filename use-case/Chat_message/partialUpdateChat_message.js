/**
 *partialUpdateChat_message.js
 */

const response = require('../../utils/response');

/**
 * @description : partially update record with data by id;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {obj} : updated Chat_message. {status, message, data}
 */
const partialUpdateChat_message = ({ Chat_messageDb }) => async (params,req,res) => {
  const chat_message = await Chat_messageDb.updateOne(params.query,params.dataToUpdate);
  if (!chat_message){
    return response.recordNotFound();
  }
  return response.success({ data:chat_message });
};
module.exports = partialUpdateChat_message;