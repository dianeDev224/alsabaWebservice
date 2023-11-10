const response = require('../../utils/response');

const getDependencyCount = ({
  userDb,ToDoDb,Chat_messageDb,Chat_groupDb,colisDb,retraitDb,depotDb,agenceDb,countryDb,userTokensDb,roleDb,projectRouteDb,routeRoleDb,userRoleDb
})=> async (filter) =>{
  let user = await userDb.findMany(filter);
  if (user.length){
    let userIds = user.map((obj) => obj.id);

    const ToDoFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const ToDoCnt =  await ToDoDb.count(ToDoFilter);

    const Chat_messageFilter = { '$or': [{ updatedBy : { '$in' : userIds } },{ addedBy : { '$in' : userIds } }] };
    const Chat_messageCnt =  await Chat_messageDb.count(Chat_messageFilter);

    const Chat_groupFilter = { '$or': [{ updatedBy : { '$in' : userIds } },{ addedBy : { '$in' : userIds } }] };
    const Chat_groupCnt =  await Chat_groupDb.count(Chat_groupFilter);

    const colisFilter = { '$or': [{ publishedBy : { '$in' : userIds } },{ takedBy : { '$in' : userIds } }] };
    const colisCnt =  await colisDb.count(colisFilter);

    const retraitFilter = { '$or': [{ retraitEmitter : { '$in' : userIds } }] };
    const retraitCnt =  await retraitDb.count(retraitFilter);

    const depotFilter = { '$or': [{ depotReceiver : { '$in' : userIds } }] };
    const depotCnt =  await depotDb.count(depotFilter);

    const agenceFilter = { '$or': [{ responsable : { '$in' : userIds } }] };
    const agenceCnt =  await agenceDb.count(agenceFilter);

    const countryFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } },{ adminSenior : { '$in' : userIds } }] };
    const countryCnt =  await countryDb.count(countryFilter);

    const userFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const userCnt =  await userDb.count(userFilter);

    const userTokensFilter = { '$or': [{ userId : { '$in' : userIds } },{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const userTokensCnt =  await userTokensDb.count(userTokensFilter);

    const roleFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const roleCnt =  await roleDb.count(roleFilter);

    const projectRouteFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const projectRouteCnt =  await projectRouteDb.count(projectRouteFilter);

    const routeRoleFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const routeRoleCnt =  await routeRoleDb.count(routeRoleFilter);

    const userRoleFilter = { '$or': [{ userId : { '$in' : userIds } },{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const userRoleCnt =  await userRoleDb.count(userRoleFilter);
    let result = {
      ToDo :ToDoCnt ,
      Chat_message :Chat_messageCnt ,
      Chat_group :Chat_groupCnt ,
      colis :colisCnt ,
      retrait :retraitCnt ,
      depot :depotCnt ,
      agence :agenceCnt ,
      country :countryCnt ,
      user :userCnt + 1,
      userTokens :userTokensCnt ,
      role :roleCnt ,
      projectRoute :projectRouteCnt ,
      routeRole :routeRoleCnt ,
      userRole :userRoleCnt ,
    };
    return response.success({
      message: 'No of Dependency found',
      data: result
    });
  } else {
    return response.success({
      message: 'No of Dependency found',
      data: {  user : 0 }
    });
  }
};

const deleteWithDependency = ({
  userDb,ToDoDb,Chat_messageDb,Chat_groupDb,colisDb,retraitDb,depotDb,agenceDb,countryDb,userTokensDb,roleDb,projectRouteDb,routeRoleDb,userRoleDb
})=> async (filter) =>{
  let user = await userDb.findMany(filter);
  if (user.length){
    let userIds = user.map((obj) => obj.id);

    const ToDoFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const ToDoCnt =  (await ToDoDb.deleteMany(ToDoFilter));

    const Chat_messageFilter = { '$or': [{ updatedBy : { '$in' : userIds } },{ addedBy : { '$in' : userIds } }] };
    const Chat_messageCnt =  (await Chat_messageDb.deleteMany(Chat_messageFilter));

    const Chat_groupFilter = { '$or': [{ updatedBy : { '$in' : userIds } },{ addedBy : { '$in' : userIds } }] };
    const Chat_groupCnt =  (await Chat_groupDb.deleteMany(Chat_groupFilter));

    const colisFilter = { '$or': [{ publishedBy : { '$in' : userIds } },{ takedBy : { '$in' : userIds } }] };
    const colisCnt =  (await colisDb.deleteMany(colisFilter));

    const retraitFilter = { '$or': [{ retraitEmitter : { '$in' : userIds } }] };
    const retraitCnt =  (await retraitDb.deleteMany(retraitFilter));

    const depotFilter = { '$or': [{ depotReceiver : { '$in' : userIds } }] };
    const depotCnt =  (await depotDb.deleteMany(depotFilter));

    const agenceFilter = { '$or': [{ responsable : { '$in' : userIds } }] };
    const agenceCnt =  (await agenceDb.deleteMany(agenceFilter));

    const countryFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } },{ adminSenior : { '$in' : userIds } }] };
    const countryCnt =  (await countryDb.deleteMany(countryFilter));

    const userFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const userCnt =  (await userDb.deleteMany(userFilter));

    const userTokensFilter = { '$or': [{ userId : { '$in' : userIds } },{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const userTokensCnt =  (await userTokensDb.deleteMany(userTokensFilter));

    const roleFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const roleCnt =  (await roleDb.deleteMany(roleFilter));

    const projectRouteFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const projectRouteCnt =  (await projectRouteDb.deleteMany(projectRouteFilter));

    const routeRoleFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const routeRoleCnt =  (await routeRoleDb.deleteMany(routeRoleFilter));

    const userRoleFilter = { '$or': [{ userId : { '$in' : userIds } },{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const userRoleCnt =  (await userRoleDb.deleteMany(userRoleFilter));
    let deleted = (await userDb.deleteMany(filter));
    let result = {
      ToDo :ToDoCnt ,
      Chat_message :Chat_messageCnt ,
      Chat_group :Chat_groupCnt ,
      colis :colisCnt ,
      retrait :retraitCnt ,
      depot :depotCnt ,
      agence :agenceCnt ,
      country :countryCnt ,
      user :userCnt + deleted,
      userTokens :userTokensCnt ,
      role :roleCnt ,
      projectRoute :projectRouteCnt ,
      routeRole :routeRoleCnt ,
      userRole :userRoleCnt ,
    };
    return response.success({
      message: 'No of Dependency deleted',
      data: result
    });
  } else {
    return response.success({
      message: 'No of Dependency deleted',
      data: {  user : 0 }
    });
  }
};

const softDeleteWithDependency = ({
  userDb,ToDoDb,Chat_messageDb,Chat_groupDb,colisDb,retraitDb,depotDb,agenceDb,countryDb,userTokensDb,roleDb,projectRouteDb,routeRoleDb,userRoleDb
}) => async (filter,updateBody) =>{
  let user = await userDb.findMany(filter);
  if (user.length){
    let userIds = user.map((obj) => obj.id);

    const ToDoFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const ToDoCnt =  (await ToDoDb.updateMany(ToDoFilter,updateBody));

    const Chat_messageFilter = { '$or': [{ updatedBy : { '$in' : userIds } },{ addedBy : { '$in' : userIds } }] };
    const Chat_messageCnt =  (await Chat_messageDb.updateMany(Chat_messageFilter,updateBody));

    const Chat_groupFilter = { '$or': [{ updatedBy : { '$in' : userIds } },{ addedBy : { '$in' : userIds } }] };
    const Chat_groupCnt =  (await Chat_groupDb.updateMany(Chat_groupFilter,updateBody));

    const colisFilter = { '$or': [{ publishedBy : { '$in' : userIds } },{ takedBy : { '$in' : userIds } }] };
    const colisCnt =  (await colisDb.updateMany(colisFilter,updateBody));

    const retraitFilter = { '$or': [{ retraitEmitter : { '$in' : userIds } }] };
    const retraitCnt =  (await retraitDb.updateMany(retraitFilter,updateBody));

    const depotFilter = { '$or': [{ depotReceiver : { '$in' : userIds } }] };
    const depotCnt =  (await depotDb.updateMany(depotFilter,updateBody));

    const agenceFilter = { '$or': [{ responsable : { '$in' : userIds } }] };
    const agenceCnt =  (await agenceDb.updateMany(agenceFilter,updateBody));

    const countryFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } },{ adminSenior : { '$in' : userIds } }] };
    const countryCnt =  (await countryDb.updateMany(countryFilter,updateBody));

    const userFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const userCnt =  (await userDb.updateMany(userFilter,updateBody));

    const userTokensFilter = { '$or': [{ userId : { '$in' : userIds } },{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const userTokensCnt =  (await userTokensDb.updateMany(userTokensFilter,updateBody));

    const roleFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const roleCnt =  (await roleDb.updateMany(roleFilter,updateBody));

    const projectRouteFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const projectRouteCnt =  (await projectRouteDb.updateMany(projectRouteFilter,updateBody));

    const routeRoleFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const routeRoleCnt =  (await routeRoleDb.updateMany(routeRoleFilter,updateBody));

    const userRoleFilter = { '$or': [{ userId : { '$in' : userIds } },{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const userRoleCnt =  (await userRoleDb.updateMany(userRoleFilter,updateBody));
    let updated = (await userDb.updateMany(filter,updateBody));
    let result = {
      ToDo :ToDoCnt ,
      Chat_message :Chat_messageCnt ,
      Chat_group :Chat_groupCnt ,
      colis :colisCnt ,
      retrait :retraitCnt ,
      depot :depotCnt ,
      agence :agenceCnt ,
      country :countryCnt ,
      user :userCnt + updated,
      userTokens :userTokensCnt ,
      role :roleCnt ,
      projectRoute :projectRouteCnt ,
      routeRole :routeRoleCnt ,
      userRole :userRoleCnt ,
    };
    return response.success({
      message: 'No of Dependency deleted',
      data: result
    });
  } else {
    return response.success({
      message: 'No of Dependency deleted',
      data: {  user : 0 }
    });
  }
};
module.exports = {
  getDependencyCount,
  deleteWithDependency,
  softDeleteWithDependency
};
