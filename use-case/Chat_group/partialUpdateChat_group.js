/**
 *partialUpdateChat_group.js
 */

const response = require('../../utils/response');

/**
 * @description : partially update record with data by id;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {obj} : updated Chat_group. {status, message, data}
 */
const partialUpdateChat_group = ({ Chat_groupDb }) => async (params,req,res) => {
  const chat_group = await Chat_groupDb.updateOne(params.query,params.dataToUpdate);
  if (!chat_group){
    return response.recordNotFound();
  }
  return response.success({ data:chat_group });
};
module.exports = partialUpdateChat_group;