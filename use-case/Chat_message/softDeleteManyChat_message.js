/**
 *softDeleteManyChat_message.js
 */

const response = require('../../utils/response');

/**
 * @description : soft delete multiple records from database by ids;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : number of deactivated documents. {status, message, data}
 */
const softDeleteManyChat_message = ({ Chat_messageDb }) => async (params, req, res) => {
  let updatedChat_message = await Chat_messageDb.updateMany(params.query, params.dataToUpdate);
  if (!updatedChat_message){
    return response.recordNotFound();
  }
  return response.success({ data:{ count : updatedChat_message } });
};
module.exports = softDeleteManyChat_message;
