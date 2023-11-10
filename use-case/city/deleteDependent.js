const response = require('../../utils/response');

const getDependencyCount = ({
  cityDb,ToDoDb,transfertDb
})=> async (filter) =>{
  let city = await cityDb.findMany(filter);
  if (city.length){
    let cityIds = city.map((obj) => obj.id);

    const ToDoFilter = { '$or': [{ location : { '$in' : cityIds } }] };
    const ToDoCnt =  await ToDoDb.count(ToDoFilter);

    const transfertFilter = { '$or': [{ receiverCity : { '$in' : cityIds } }] };
    const transfertCnt =  await transfertDb.count(transfertFilter);
    let result = {
      ToDo :ToDoCnt ,
      transfert :transfertCnt ,
    };
    return response.success({
      message: 'No of Dependency found',
      data: result
    });
  } else {
    return response.success({
      message: 'No of Dependency found',
      data: {  city : 0 }
    });
  }
};

const deleteWithDependency = ({
  cityDb,ToDoDb,transfertDb
})=> async (filter) =>{
  let city = await cityDb.findMany(filter);
  if (city.length){
    let cityIds = city.map((obj) => obj.id);

    const ToDoFilter = { '$or': [{ location : { '$in' : cityIds } }] };
    const ToDoCnt =  (await ToDoDb.deleteMany(ToDoFilter));

    const transfertFilter = { '$or': [{ receiverCity : { '$in' : cityIds } }] };
    const transfertCnt =  (await transfertDb.deleteMany(transfertFilter));
    let deleted = (await cityDb.deleteMany(filter));
    let result = {
      ToDo :ToDoCnt ,
      transfert :transfertCnt ,
    };
    return response.success({
      message: 'No of Dependency deleted',
      data: result
    });
  } else {
    return response.success({
      message: 'No of Dependency deleted',
      data: {  city : 0 }
    });
  }
};

const softDeleteWithDependency = ({
  cityDb,ToDoDb,transfertDb
}) => async (filter,updateBody) =>{
  let city = await cityDb.findMany(filter);
  if (city.length){
    let cityIds = city.map((obj) => obj.id);

    const ToDoFilter = { '$or': [{ location : { '$in' : cityIds } }] };
    const ToDoCnt =  (await ToDoDb.updateMany(ToDoFilter,updateBody));

    const transfertFilter = { '$or': [{ receiverCity : { '$in' : cityIds } }] };
    const transfertCnt =  (await transfertDb.updateMany(transfertFilter,updateBody));
    let updated = (await cityDb.updateMany(filter,updateBody));
    let result = {
      ToDo :ToDoCnt ,
      transfert :transfertCnt ,
    };
    return response.success({
      message: 'No of Dependency deleted',
      data: result
    });
  } else {
    return response.success({
      message: 'No of Dependency deleted',
      data: {  city : 0 }
    });
  }
};
module.exports = {
  getDependencyCount,
  deleteWithDependency,
  softDeleteWithDependency
};
