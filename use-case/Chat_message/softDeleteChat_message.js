/**
 *softDeleteChat_message.js
 */

const response = require('../../utils/response');

/**
 * @description : soft delete record from database by id;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response..
 * @return {Object} : deactivated Chat_message. {status, message, data}
 */
const softDeleteChat_message = ({ Chat_messageDb }) => async (params,req,res) => {
  let updatedChat_message = await Chat_messageDb.updateOne(params.query, params.dataToUpdate);
  if (!updatedChat_message){
    return response.recordNotFound();   
  }
  return response.success({ data:updatedChat_message });
};
module.exports = softDeleteChat_message;