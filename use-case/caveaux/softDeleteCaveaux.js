/**
 *softDeleteCaveaux.js
 */

const response = require('../../utils/response');

/**
 * @description : soft delete record from database by id;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response..
 * @return {Object} : deactivated Caveaux. {status, message, data}
 */
const softDeleteCaveaux = ({ caveauxDb }) => async (params,req,res) => {
  let updatedCaveaux = await caveauxDb.updateOne(params.query, params.dataToUpdate);
  if (!updatedCaveaux){
    return response.recordNotFound();   
  }
  return response.success({ data:updatedCaveaux });
};
module.exports = softDeleteCaveaux;