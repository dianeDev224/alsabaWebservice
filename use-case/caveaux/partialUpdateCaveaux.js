/**
 *partialUpdateCaveaux.js
 */

const response = require('../../utils/response');

/**
 * @description : partially update record with data by id;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {obj} : updated Caveaux. {status, message, data}
 */
const partialUpdateCaveaux = ({ caveauxDb }) => async (params,req,res) => {
  const caveaux = await caveauxDb.updateOne(params.query,params.dataToUpdate);
  if (!caveaux){
    return response.recordNotFound();
  }
  return response.success({ data:caveaux });
};
module.exports = partialUpdateCaveaux;