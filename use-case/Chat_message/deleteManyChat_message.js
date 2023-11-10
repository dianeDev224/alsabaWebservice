/**
 *deleteManyChat_message.js
 */

const response = require('../../utils/response');
/**
 * @description : delete records from database by using ids.
 * @param {Object} query : query.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : no of documents deleted. {status, message, data}
 */
const deleteManyChat_message = ({ Chat_messageDb }) => async (query,req,res) => {
  let deletedChat_message = await Chat_messageDb.deleteMany(query);
  return response.success({ data: { count : deletedChat_message } });
};
module.exports = deleteManyChat_message;