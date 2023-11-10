module.exports = (caisse) => {

  let newCaisse = { 
    isDeleted: caisse.isDeleted,
    typeCaisse: caisse.typeCaisse,
    caisseSolde: caisse.caisseSolde,
    caisseEmitter: caisse.caisseEmitter,
    caisserReceiver: caisse.caisserReceiver,
  };

  // remove undefined values
  Object.keys(newCaisse).forEach(key => newCaisse[key] === undefined && delete newCaisse[key]);

  // To validate Entity uncomment this block
  /*
   * const validate = (newCaisse) => {
   *   if (!newCaisse.field) {
   *       throw new Error("this field is required");
   *   }
   * }
   * validate(newCaisse) 
   */

  return Object.freeze(newCaisse);
};
