
/**
 *deleteRegion.js
 */
 
const makeGetDependencyCount = require('./deleteDependent').getDependencyCount;
const makeDeleteWithDependency = require('./deleteDependent').deleteWithDependency;
const response = require('../../utils/response');
    
/**
 * @description : delete record from database.
 * @param {Object} params : request body including query.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : deleted Region. {status, message, data}
 */
const deleteRegion = ({
  regionDb,cityDb
}) => async (params,req,res) => {
  let {
    query,isWarning 
  } = params;
  let deletedRegion = {};
  if (isWarning) {
    const getDependencyCount = makeGetDependencyCount({
      regionDb,
      cityDb
    });
    return await getDependencyCount(query);
  } else {
    const deleteWithDependency = makeDeleteWithDependency({
      regionDb,
      cityDb
    });
    return await deleteWithDependency(query);
  }
};

module.exports = deleteRegion;