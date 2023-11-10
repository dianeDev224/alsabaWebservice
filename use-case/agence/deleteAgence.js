
/**
 *deleteAgence.js
 */
 
const makeGetDependencyCount = require('./deleteDependent').getDependencyCount;
const makeDeleteWithDependency = require('./deleteDependent').deleteWithDependency;
const response = require('../../utils/response');
    
/**
 * @description : delete record from database.
 * @param {Object} params : request body including query.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : deleted Agence. {status, message, data}
 */
const deleteAgence = ({
  agenceDb,Chat_messageDb,Chat_groupDb,retraitDb,depotDb,caisseDb,caveauxDb,transfertDb
}) => async (params,req,res) => {
  let {
    query,isWarning 
  } = params;
  let deletedAgence = {};
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
    const deleteWithDependency = makeDeleteWithDependency({
      agenceDb,
      Chat_messageDb,
      Chat_groupDb,
      retraitDb,
      depotDb,
      caisseDb,
      caveauxDb,
      transfertDb
    });
    return await deleteWithDependency(query);
  }
};

module.exports = deleteAgence;