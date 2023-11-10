module.exports = (qrcode) => {

  let newQrcode = { 
    isDeleted: qrcode.isDeleted,
    solde: qrcode.solde,
    senderCode: qrcode.senderCode,
    receiverCode: qrcode.receiverCode,
    isValidated: qrcode.isValidated,
  };

  // remove undefined values
  Object.keys(newQrcode).forEach(key => newQrcode[key] === undefined && delete newQrcode[key]);

  // To validate Entity uncomment this block
  /*
   * const validate = (newQrcode) => {
   *   if (!newQrcode.field) {
   *       throw new Error("this field is required");
   *   }
   * }
   * validate(newQrcode) 
   */

  return Object.freeze(newQrcode);
};
