
/**
 *bulkInsertCodeMoney.js
 */

const  codeMoneyEntity = require('../../entities/codeMoney');
const response = require('../../utils/response');

/**
 * @description : create multiple records  in database.
 * @param {Object} dataToCreate : data for creating documents.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : created CodeMoneys. {status, message, data}
 */

const bulkInsertCodeMoney = ({ codeMoneyDb }) => async (dataToCreate,req,res) => {
  let codemoneyEntities = dataToCreate.map(item => codeMoneyEntity(item));
  let createdCodeMoney = await codeMoneyDb.create(codemoneyEntities);
  return response.success({ data:{ count:createdCodeMoney.length || 0 } });
};
module.exports = bulkInsertCodeMoney;