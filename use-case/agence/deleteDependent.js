const response = require('../../utils/response');

const getDependencyCount = ({
  agenceDb,Chat_messageDb,Chat_groupDb,retraitDb,depotDb,caisseDb,caveauxDb,transfertDb
})=> async (filter) =>{
  let agence = await agenceDb.findMany(filter);
  if (agence.length){
    let agenceIds = agence.map((obj) => obj.id);

    const Chat_messageFilter = { '$or': [{ sender : { '$in' : agenceIds } },{ recipient : { '$in' : agenceIds } }] };
    const Chat_messageCnt =  await Chat_messageDb.count(Chat_messageFilter);

    const Chat_groupFilter = { '$or': [{ admin : { '$in' : agenceIds } }] };
    const Chat_groupCnt =  await Chat_groupDb.count(Chat_groupFilter);

    const retraitFilter = { '$or': [{ retraitReceiver : { '$in' : agenceIds } }] };
    const retraitCnt =  await retraitDb.count(retraitFilter);

    const depotFilter = { '$or': [{ depotEmitter : { '$in' : agenceIds } }] };
    const depotCnt =  await depotDb.count(depotFilter);

    const caisseFilter = { '$or': [{ caisseEmitter : { '$in' : agenceIds } },{ caisserReceiver : { '$in' : agenceIds } }] };
    const caisseCnt =  await caisseDb.count(caisseFilter);

    const caveauxFilter = { '$or': [{ agence : { '$in' : agenceIds } }] };
    const caveauxCnt =  await caveauxDb.count(caveauxFilter);

    const transfertFilter = { '$or': [{ sender : { '$in' : agenceIds } },{ receiver : { '$in' : agenceIds } }] };
    const transfertCnt =  await transfertDb.count(transfertFilter);
    let result = {
      Chat_message :Chat_messageCnt ,
      Chat_group :Chat_groupCnt ,
      retrait :retraitCnt ,
      depot :depotCnt ,
      caisse :caisseCnt ,
      caveaux :caveauxCnt ,
      transfert :transfertCnt ,
    };
    return response.success({
      message: 'No of Dependency found',
      data: result
    });
  } else {
    return response.success({
      message: 'No of Dependency found',
      data: {  agence : 0 }
    });
  }
};

const deleteWithDependency = ({
  agenceDb,Chat_messageDb,Chat_groupDb,retraitDb,depotDb,caisseDb,caveauxDb,transfertDb
})=> async (filter) =>{
  let agence = await agenceDb.findMany(filter);
  if (agence.length){
    let agenceIds = agence.map((obj) => obj.id);

    const Chat_messageFilter = { '$or': [{ sender : { '$in' : agenceIds } },{ recipient : { '$in' : agenceIds } }] };
    const Chat_messageCnt =  (await Chat_messageDb.deleteMany(Chat_messageFilter));

    const Chat_groupFilter = { '$or': [{ admin : { '$in' : agenceIds } }] };
    const Chat_groupCnt =  (await Chat_groupDb.deleteMany(Chat_groupFilter));

    const retraitFilter = { '$or': [{ retraitReceiver : { '$in' : agenceIds } }] };
    const retraitCnt =  (await retraitDb.deleteMany(retraitFilter));

    const depotFilter = { '$or': [{ depotEmitter : { '$in' : agenceIds } }] };
    const depotCnt =  (await depotDb.deleteMany(depotFilter));

    const caisseFilter = { '$or': [{ caisseEmitter : { '$in' : agenceIds } },{ caisserReceiver : { '$in' : agenceIds } }] };
    const caisseCnt =  (await caisseDb.deleteMany(caisseFilter));

    const caveauxFilter = { '$or': [{ agence : { '$in' : agenceIds } }] };
    const caveauxCnt =  (await caveauxDb.deleteMany(caveauxFilter));

    const transfertFilter = { '$or': [{ sender : { '$in' : agenceIds } },{ receiver : { '$in' : agenceIds } }] };
    const transfertCnt =  (await transfertDb.deleteMany(transfertFilter));
    let deleted = (await agenceDb.deleteMany(filter));
    let result = {
      Chat_message :Chat_messageCnt ,
      Chat_group :Chat_groupCnt ,
      retrait :retraitCnt ,
      depot :depotCnt ,
      caisse :caisseCnt ,
      caveaux :caveauxCnt ,
      transfert :transfertCnt ,
    };
    return response.success({
      message: 'No of Dependency deleted',
      data: result
    });
  } else {
    return response.success({
      message: 'No of Dependency deleted',
      data: {  agence : 0 }
    });
  }
};

const softDeleteWithDependency = ({
  agenceDb,Chat_messageDb,Chat_groupDb,retraitDb,depotDb,caisseDb,caveauxDb,transfertDb
}) => async (filter,updateBody) =>{
  let agence = await agenceDb.findMany(filter);
  if (agence.length){
    let agenceIds = agence.map((obj) => obj.id);

    const Chat_messageFilter = { '$or': [{ sender : { '$in' : agenceIds } },{ recipient : { '$in' : agenceIds } }] };
    const Chat_messageCnt =  (await Chat_messageDb.updateMany(Chat_messageFilter,updateBody));

    const Chat_groupFilter = { '$or': [{ admin : { '$in' : agenceIds } }] };
    const Chat_groupCnt =  (await Chat_groupDb.updateMany(Chat_groupFilter,updateBody));

    const retraitFilter = { '$or': [{ retraitReceiver : { '$in' : agenceIds } }] };
    const retraitCnt =  (await retraitDb.updateMany(retraitFilter,updateBody));

    const depotFilter = { '$or': [{ depotEmitter : { '$in' : agenceIds } }] };
    const depotCnt =  (await depotDb.updateMany(depotFilter,updateBody));

    const caisseFilter = { '$or': [{ caisseEmitter : { '$in' : agenceIds } },{ caisserReceiver : { '$in' : agenceIds } }] };
    const caisseCnt =  (await caisseDb.updateMany(caisseFilter,updateBody));

    const caveauxFilter = { '$or': [{ agence : { '$in' : agenceIds } }] };
    const caveauxCnt =  (await caveauxDb.updateMany(caveauxFilter,updateBody));

    const transfertFilter = { '$or': [{ sender : { '$in' : agenceIds } },{ receiver : { '$in' : agenceIds } }] };
    const transfertCnt =  (await transfertDb.updateMany(transfertFilter,updateBody));
    let updated = (await agenceDb.updateMany(filter,updateBody));
    let result = {
      Chat_message :Chat_messageCnt ,
      Chat_group :Chat_groupCnt ,
      retrait :retraitCnt ,
      depot :depotCnt ,
      caisse :caisseCnt ,
      caveaux :caveauxCnt ,
      transfert :transfertCnt ,
    };
    return response.success({
      message: 'No of Dependency deleted',
      data: result
    });
  } else {
    return response.success({
      message: 'No of Dependency deleted',
      data: {  agence : 0 }
    });
  }
};
module.exports = {
  getDependencyCount,
  deleteWithDependency,
  softDeleteWithDependency
};
