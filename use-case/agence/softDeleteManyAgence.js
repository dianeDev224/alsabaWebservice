/**
 *softDeleteManyAgence.js
 */

const makeGetDependencyCount = require('./deleteDependent').getDependencyCount;
const makeSoftDeleteWithDependency = require('./deleteDependent').softDeleteWithDependency;
const response = require('../../utils/response');

/**
 * @description : soft delete multiple records from database by ids;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : number of deactivated documents. {status, message, data}
 */
const softDeleteManyAgence = ({
  agenceDb,Chat_messageDb,Chat_groupDb,retraitDb,depotDb,caisseDb,caveauxDb,transfertDb
}) => async (params,req,res) => {
  let {
    query, dataToUpdate,isWarning 
  } = params;
  let updatedAgence = {};
  if (isWarning) {
    const getDependencyCount = makeGetDependencyCount({
      agenceDb,
      Chat_messageDb,
      Chat_groupDb,
      retraitDb,
      depotDb,
      caisseDb,
      caveauxDb,
      transfertDb
    });
    return await getDependencyCount(query);
  } else {
    const softDeleteWithDependency = makeSoftDeleteWithDependency({
      agenceDb,
      Chat_messageDb,
      Chat_groupDb,
      retraitDb,
      depotDb,
      caisseDb,
      caveauxDb,
      transfertDb
    });
    return await softDeleteWithDependency(query, dataToUpdate);
  }
};
module.exports = softDeleteManyAgence;
