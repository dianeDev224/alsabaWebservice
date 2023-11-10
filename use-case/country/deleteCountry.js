
/**
 *deleteCountry.js
 */
 
const makeGetDependencyCount = require('./deleteDependent').getDependencyCount;
const makeDeleteWithDependency = require('./deleteDependent').deleteWithDependency;
const response = require('../../utils/response');
    
/**
 * @description : delete record from database.
 * @param {Object} params : request body including query.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : deleted Country. {status, message, data}
 */
const deleteCountry = ({
  countryDb,colisDb,regionDb
}) => async (params,req,res) => {
  let {
    query,isWarning 
  } = params;
  let deletedCountry = {};
  if (isWarning) {
    const getDependencyCount = makeGetDependencyCount({
      countryDb,
      colisDb,
      regionDb
    });
    return await getDependencyCount(query);
  } else {
    const deleteWithDependency = makeDeleteWithDependency({
      countryDb,
      colisDb,
      regionDb
    });
    return await deleteWithDependency(query);
  }
};

module.exports = deleteCountry;