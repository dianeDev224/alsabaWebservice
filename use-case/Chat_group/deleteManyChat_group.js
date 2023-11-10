/**
 *deleteManyChat_group.js
 */

const makeGetDependencyCount = require('./deleteDependent').getDependencyCount;
const makeDeleteWithDependency = require('./deleteDependent').deleteWithDependency;
const response = require('../../utils/response');
    
/**
 * @description : delete documents from table by using ids.
 * @param {Object} params : request body including query.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : no of documents deleted. {status, message, data}
 */
const deleteManyChat_group = ({
  Chat_groupDb,Chat_messageDb
}) => async (params,req,res) => {
  let {
    query,isWarning 
  } = params;
  let deletedChat_group;
  if (isWarning){
    const getDependencyCount = makeGetDependencyCount({
      Chat_groupDb,
      Chat_messageDb
    });
    return await getDependencyCount(query);
  } else {
    const deleteWithDependency = makeDeleteWithDependency({
      Chat_groupDb,
      Chat_messageDb
    });
    return await deleteWithDependency(query);
  }
};
module.exports = deleteManyChat_group;