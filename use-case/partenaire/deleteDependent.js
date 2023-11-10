const response = require('../../utils/response');

const getDependencyCount = ({
  partenaireDb,transfertDb
})=> async (filter) =>{
  let partenaire = await partenaireDb.findMany(filter);
  if (partenaire.length){
    let partenaireIds = partenaire.map((obj) => obj.id);

    const transfertFilter = { '$or': [{ partenaire : { '$in' : partenaireIds } }] };
    const transfertCnt =  await transfertDb.count(transfertFilter);
    let result = { transfert :transfertCnt , };
    return response.success({
      message: 'No of Dependency found',
      data: result
    });
  } else {
    return response.success({
      message: 'No of Dependency found',
      data: {  partenaire : 0 }
    });
  }
};

const deleteWithDependency = ({
  partenaireDb,transfertDb
})=> async (filter) =>{
  let partenaire = await partenaireDb.findMany(filter);
  if (partenaire.length){
    let partenaireIds = partenaire.map((obj) => obj.id);

    const transfertFilter = { '$or': [{ partenaire : { '$in' : partenaireIds } }] };
    const transfertCnt =  (await transfertDb.deleteMany(transfertFilter));
    let deleted = (await partenaireDb.deleteMany(filter));
    let result = { transfert :transfertCnt , };
    return response.success({
      message: 'No of Dependency deleted',
      data: result
    });
  } else {
    return response.success({
      message: 'No of Dependency deleted',
      data: {  partenaire : 0 }
    });
  }
};

const softDeleteWithDependency = ({
  partenaireDb,transfertDb
}) => async (filter,updateBody) =>{
  let partenaire = await partenaireDb.findMany(filter);
  if (partenaire.length){
    let partenaireIds = partenaire.map((obj) => obj.id);

    const transfertFilter = { '$or': [{ partenaire : { '$in' : partenaireIds } }] };
    const transfertCnt =  (await transfertDb.updateMany(transfertFilter,updateBody));
    let updated = (await partenaireDb.updateMany(filter,updateBody));
    let result = { transfert :transfertCnt , };
    return response.success({
      message: 'No of Dependency deleted',
      data: result
    });
  } else {
    return response.success({
      message: 'No of Dependency deleted',
      data: {  partenaire : 0 }
    });
  }
};
module.exports = {
  getDependencyCount,
  deleteWithDependency,
  softDeleteWithDependency
};
