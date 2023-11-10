/**
 *bulkUpdateChat_message.js
 */

const response = require('../../utils/response');

/**
 * @description : update multiple records of Chat_message with data by filter.
 * @param {Object} params : request body including query and data.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : response of bulkUpdate. {status, message, data}
 */
const bulkUpdateChat_message = ({ Chat_messageDb }) => async (params,req,res) => {
  const updatedChat_message = await Chat_messageDb.updateMany(params.query,params.dataToUpdate);
  return response.success({ data:{ count:updatedChat_message } });
};
module.exports = bulkUpdateChat_message;