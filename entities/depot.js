module.exports = (depot) => {

  let newDepot = { 
    isDeleted: depot.isDeleted,
    createdAt: depot.createdAt,
    updatedAt: depot.updatedAt,
    depotSolde: depot.depotSolde,
    depotEmitter: depot.depotEmitter,
    depotReceiver: depot.depotReceiver,
    isCanceled: depot.isCanceled,
    canceledDate: depot.canceledDate,
  };

  // remove undefined values
  Object.keys(newDepot).forEach(key => newDepot[key] === undefined && delete newDepot[key]);

  // To validate Entity uncomment this block
  /*
   * const validate = (newDepot) => {
   *   if (!newDepot.field) {
   *       throw new Error("this field is required");
   *   }
   * }
   * validate(newDepot) 
   */

  return Object.freeze(newDepot);
};
