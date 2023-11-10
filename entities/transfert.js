module.exports = (transfert) => {

  let newTransfert = { 
    isDeleted: transfert.isDeleted,
    mal: transfert.mal,
    sender: transfert.sender,
    receiver: transfert.receiver,
    isValidated: transfert.isValidated,
    fraisPartenaire: transfert.fraisPartenaire,
    partenaire: transfert.partenaire,
    isCanceled: transfert.isCanceled,
    updatedAt: transfert.updatedAt,
    canceledAt: transfert.canceledAt,
    deletedAt: transfert.deletedAt,
    type: transfert.type,
    receiverCity: transfert.receiverCity,
  };

  // remove undefined values
  Object.keys(newTransfert).forEach(key => newTransfert[key] === undefined && delete newTransfert[key]);

  // To validate Entity uncomment this block
  /*
   * const validate = (newTransfert) => {
   *   if (!newTransfert.field) {
   *       throw new Error("this field is required");
   *   }
   * }
   * validate(newTransfert) 
   */

  return Object.freeze(newTransfert);
};
