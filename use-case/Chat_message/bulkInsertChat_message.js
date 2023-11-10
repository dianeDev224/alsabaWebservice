
/**
 *bulkInsertChat_message.js
 */

const  Chat_messageEntity = require('../../entities/Chat_message');
const response = require('../../utils/response');

/**
 * @description : create multiple records  in database.
 * @param {Object} dataToCreate : data for creating documents.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : created Chat_messages. {status, message, data}
 */

const bulkInsertChat_message = ({ Chat_messageDb }) => async (dataToCreate,req,res) => {
  let chat_messageEntities = dataToCreate.map(item => Chat_messageEntity(item));
  let createdChat_message = await Chat_messageDb.create(chat_messageEntities);
  return response.success({ data:{ count:createdChat_message.length || 0 } });
};
module.exports = bulkInsertChat_message;