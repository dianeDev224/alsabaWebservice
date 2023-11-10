/**
 *bulkUpdateChat_group.js
 */

const response = require('../../utils/response');

/**
 * @description : update multiple records of Chat_group with data by filter.
 * @param {Object} params : request body including query and data.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : response of bulkUpdate. {status, message, data}
 */
const bulkUpdateChat_group = ({ Chat_groupDb }) => async (params,req,res) => {
  const updatedChat_group = await Chat_groupDb.updateMany(params.query,params.dataToUpdate);
  return response.success({ data:{ count:updatedChat_group } });
};
module.exports = bulkUpdateChat_group;