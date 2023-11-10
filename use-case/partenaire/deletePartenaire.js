
/**
 *deletePartenaire.js
 */
 
const makeGetDependencyCount = require('./deleteDependent').getDependencyCount;
const makeDeleteWithDependency = require('./deleteDependent').deleteWithDependency;
const response = require('../../utils/response');
    
/**
 * @description : delete record from database.
 * @param {Object} params : request body including query.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : deleted Partenaire. {status, message, data}
 */
const deletePartenaire = ({
  partenaireDb,transfertDb
}) => async (params,req,res) => {
  let {
    query,isWarning 
  } = params;
  let deletedPartenaire = {};
  if (isWarning) {
    const getDependencyCount = makeGetDependencyCount({
      partenaireDb,
      transfertDb
    });
    return await getDependencyCount(query);
  } else {
    const deleteWithDependency = makeDeleteWithDependency({
      partenaireDb,
      transfertDb
    });
    return await deleteWithDependency(query);
  }
};

module.exports = deletePartenaire;