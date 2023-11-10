module.exports = (bilan) => {

  let newBilan = { 
    isDeleted: bilan.isDeleted,
    createdAt: bilan.createdAt,
    updatedAt: bilan.updatedAt,
    isActive: bilan.isActive,
    benefice: bilan.benefice,
    gain: bilan.gain,
    capitalPropre: bilan.capitalPropre,
    chargeFictive: bilan.chargeFictive,
    chargeReelle: bilan.chargeReelle,
    Dettes: bilan.Dettes,
    Disponibiite: bilan.Disponibiite,
    entre: bilan.entre,
    sortie: bilan.sortie,
    epargne: bilan.epargne,
    initiale: bilan.initiale,
    injection: bilan.injection,
    pret: bilan.pret,
    solde: bilan.solde,
  };

  // remove undefined values
  Object.keys(newBilan).forEach(key => newBilan[key] === undefined && delete newBilan[key]);

  // To validate Entity uncomment this block
  /*
   * const validate = (newBilan) => {
   *   if (!newBilan.field) {
   *       throw new Error("this field is required");
   *   }
   * }
   * validate(newBilan) 
   */

  return Object.freeze(newBilan);
};
