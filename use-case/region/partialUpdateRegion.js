/**
 *partialUpdateRegion.js
 */

const response = require('../../utils/response');

/**
 * @description : partially update record with data by id;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {obj} : updated Region. {status, message, data}
 */
const partialUpdateRegion = ({ regionDb }) => async (params,req,res) => {
  const region = await regionDb.updateOne(params.query,params.dataToUpdate);
  if (!region){
    return response.recordNotFound();
  }
  return response.success({ data:region });
};
module.exports = partialUpdateRegion;