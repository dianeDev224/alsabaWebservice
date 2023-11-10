module.exports = (partenaire) => {

  let newPartenaire = { 
    isDeleted: partenaire.isDeleted,
    partenaireName: partenaire.partenaireName,
    isActivated: partenaire.isActivated,
    typeFrais: partenaire.typeFrais,
    frais: partenaire.frais,
  };

  // remove undefined values
  Object.keys(newPartenaire).forEach(key => newPartenaire[key] === undefined && delete newPartenaire[key]);

  // To validate Entity uncomment this block
  /*
   * const validate = (newPartenaire) => {
   *   if (!newPartenaire.field) {
   *       throw new Error("this field is required");
   *   }
   * }
   * validate(newPartenaire) 
   */

  return Object.freeze(newPartenaire);
};
