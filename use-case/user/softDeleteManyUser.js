/**
 *softDeleteManyUser.js
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
const softDeleteManyUser = ({
  userDb,ToDoDb,Chat_messageDb,Chat_groupDb,colisDb,retraitDb,depotDb,agenceDb,countryDb,userTokensDb,roleDb,projectRouteDb,routeRoleDb,userRoleDb
}) => async (params,req,res) => {
  let {
    query, dataToUpdate,isWarning 
  } = params;
  let updatedUser = {};
  if (isWarning) {
    const getDependencyCount = makeGetDependencyCount({
      userDb,
      ToDoDb,
      Chat_messageDb,
      Chat_groupDb,
      colisDb,
      retraitDb,
      depotDb,
      agenceDb,
      countryDb,
      userTokensDb,
      roleDb,
      projectRouteDb,
      routeRoleDb,
      userRoleDb
    });
    return await getDependencyCount(query);
  } else {
    const softDeleteWithDependency = makeSoftDeleteWithDependency({
      userDb,
      ToDoDb,
      Chat_messageDb,
      Chat_groupDb,
      colisDb,
      retraitDb,
      depotDb,
      agenceDb,
      countryDb,
      userTokensDb,
      roleDb,
      projectRouteDb,
      routeRoleDb,
      userRoleDb
    });
    return await softDeleteWithDependency(query, dataToUpdate);
  }
};
module.exports = softDeleteManyUser;
