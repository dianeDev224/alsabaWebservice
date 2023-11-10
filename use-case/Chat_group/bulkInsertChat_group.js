
/**
 *bulkInsertChat_group.js
 */

const  Chat_groupEntity = require('../../entities/Chat_group');
const response = require('../../utils/response');

/**
 * @description : create multiple records  in database.
 * @param {Object} dataToCreate : data for creating documents.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : created Chat_groups. {status, message, data}
 */

const bulkInsertChat_group = ({ Chat_groupDb }) => async (dataToCreate,req,res) => {
  let chat_groupEntities = dataToCreate.map(item => Chat_groupEntity(item));
  let createdChat_group = await Chat_groupDb.create(chat_groupEntities);
  return response.success({ data:{ count:createdChat_group.length || 0 } });
};
module.exports = bulkInsertChat_group;