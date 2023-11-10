/**
 *partialUpdateDepot.js
 */

const response = require('../../utils/response');

/**
 * @description : partially update record with data by id;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {obj} : updated Depot. {status, message, data}
 */
const partialUpdateDepot = ({ depotDb }) => async (params,req,res) => {
  const depot = await depotDb.updateOne(params.query,params.dataToUpdate);
  if (!depot){
    return response.recordNotFound();
  }
  return response.success({ data:depot });
};
module.exports = partialUpdateDepot;