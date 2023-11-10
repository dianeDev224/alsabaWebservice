const response = require('../../utils/response');

const getDependencyCount = ({
  Chat_groupDb,Chat_messageDb
})=> async (filter) =>{
  let Chat_group = await Chat_groupDb.findMany(filter);
  if (Chat_group.length){
    let Chat_groupIds = Chat_group.map((obj) => obj.id);

    const Chat_messageFilter = { '$or': [{ groupId : { '$in' : Chat_groupIds } }] };
    const Chat_messageCnt =  await Chat_messageDb.count(Chat_messageFilter);
    let result = { Chat_message :Chat_messageCnt , };
    return response.success({
      message: 'No of Dependency found',
      data: result
    });
  } else {
    return response.success({
      message: 'No of Dependency found',
      data: {  Chat_group : 0 }
    });
  }
};

const deleteWithDependency = ({
  Chat_groupDb,Chat_messageDb
})=> async (filter) =>{
  let Chat_group = await Chat_groupDb.findMany(filter);
  if (Chat_group.length){
    let Chat_groupIds = Chat_group.map((obj) => obj.id);

    const Chat_messageFilter = { '$or': [{ groupId : { '$in' : Chat_groupIds } }] };
    const Chat_messageCnt =  (await Chat_messageDb.deleteMany(Chat_messageFilter));
    let deleted = (await Chat_groupDb.deleteMany(filter));
    let result = { Chat_message :Chat_messageCnt , };
    return response.success({
      message: 'No of Dependency deleted',
      data: result
    });
  } else {
    return response.success({
      message: 'No of Dependency deleted',
      data: {  Chat_group : 0 }
    });
  }
};

const softDeleteWithDependency = ({
  Chat_groupDb,Chat_messageDb
}) => async (filter,updateBody) =>{
  let Chat_group = await Chat_groupDb.findMany(filter);
  if (Chat_group.length){
    let Chat_groupIds = Chat_group.map((obj) => obj.id);

    const Chat_messageFilter = { '$or': [{ groupId : { '$in' : Chat_groupIds } }] };
    const Chat_messageCnt =  (await Chat_messageDb.updateMany(Chat_messageFilter,updateBody));
    let updated = (await Chat_groupDb.updateMany(filter,updateBody));
    let result = { Chat_message :Chat_messageCnt , };
    return response.success({
      message: 'No of Dependency deleted',
      data: result
    });
  } else {
    return response.success({
      message: 'No of Dependency deleted',
      data: {  Chat_group : 0 }
    });
  }
};
module.exports = {
  getDependencyCount,
  deleteWithDependency,
  softDeleteWithDependency
};
