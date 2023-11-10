module.exports = (retrait) => {

  let newRetrait = { 
    isDeleted: retrait.isDeleted,
    createdAt: retrait.createdAt,
    updatedAt: retrait.updatedAt,
    retraitSolde: retrait.retraitSolde,
    retraitEmitter: retrait.retraitEmitter,
    retraitReceiver: retrait.retraitReceiver,
    iscanceled: retrait.iscanceled,
    canceledAt: retrait.canceledAt,
  };

  // remove undefined values
  Object.keys(newRetrait).forEach(key => newRetrait[key] === undefined && delete newRetrait[key]);

  // To validate Entity uncomment this block
  /*
   * const validate = (newRetrait) => {
   *   if (!newRetrait.field) {
   *       throw new Error("this field is required");
   *   }
   * }
   * validate(newRetrait) 
   */

  return Object.freeze(newRetrait);
};
