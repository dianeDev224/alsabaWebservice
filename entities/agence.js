module.exports = (agence) => {

  let newAgence = { 
    isDeleted: agence.isDeleted,
    agenceName: agence.agenceName,
    phoneNumber: agence.phoneNumber,
    responsable: agence.responsable,
    isActived: agence.isActived,
    typeAgence: agence.typeAgence,
  };

  // remove undefined values
  Object.keys(newAgence).forEach(key => newAgence[key] === undefined && delete newAgence[key]);

  // To validate Entity uncomment this block
  /*
   * const validate = (newAgence) => {
   *   if (!newAgence.field) {
   *       throw new Error("this field is required");
   *   }
   * }
   * validate(newAgence) 
   */

  return Object.freeze(newAgence);
};
