/**
 *deleteManyBilan.js
 */

const response = require('../../utils/response');
/**
 * @description : delete records from database by using ids.
 * @param {Object} query : query.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : no of documents deleted. {status, message, data}
 */
const deleteManyBilan = ({ bilanDb }) => async (query,req,res) => {
  let deletedBilan = await bilanDb.deleteMany(query);
  return response.success({ data: { count : deletedBilan } });
};
module.exports = deleteManyBilan;