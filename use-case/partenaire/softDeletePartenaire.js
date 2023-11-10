/**
 *softDeletePartenaire.js
 */

const makeGetDependencyCount = require('./deleteDependent').getDependencyCount;
const makeSoftDeleteWithDependency = require('./deleteDependent').softDeleteWithDependency;
const response = require('../../utils/response');

/**
 * @description : soft delete record from database by id;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response..
 * @return {Object} : deactivated Partenaire. {status, message, data}
 */
const softDeletePartenaire = ({
  partenaireDb,transfertDb
}) => async (params,req,res) => {
  let {
    query, dataToUpdate,isWarning 
  } = params;
  let updatedPartenaire = {};
  if (isWarning) {
    const getDependencyCount = makeGetDependencyCount({
      partenaireDb,
      transfertDb
    });
    return await getDependencyCount(query);
  } else {
    const softDeleteWithDependency = makeSoftDeleteWithDependency({
      partenaireDb,
      transfertDb
    });
    return await softDeleteWithDependency(query, dataToUpdate);
  }
};
module.exports = softDeletePartenaire;