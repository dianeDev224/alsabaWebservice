module.exports = (codeMoney) => {

  let newCodeMoney = { 
    isDeleted: codeMoney.isDeleted,
    solde: codeMoney.solde,
    senderCode: codeMoney.senderCode,
    receiverCode: codeMoney.receiverCode,
    isValidated: codeMoney.isValidated,
    deletedAt: codeMoney.deletedAt,
    updatedAt: codeMoney.updatedAt,
    validatedAt: codeMoney.validatedAt,
  };

  // remove undefined values
  Object.keys(newCodeMoney).forEach(key => newCodeMoney[key] === undefined && delete newCodeMoney[key]);

  // To validate Entity uncomment this block
  /*
   * const validate = (newCodeMoney) => {
   *   if (!newCodeMoney.field) {
   *       throw new Error("this field is required");
   *   }
   * }
   * validate(newCodeMoney) 
   */

  return Object.freeze(newCodeMoney);
};
