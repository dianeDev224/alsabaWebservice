module.exports = (country) => {

  let newCountry = { 
    isDeleted: country.isDeleted,
    isActive: country.isActive,
    createdAt: country.createdAt,
    updatedAt: country.updatedAt,
    addedBy: country.addedBy,
    updatedBy: country.updatedBy,
    countryName: country.countryName,
    countryCode: country.countryCode,
    capital: country.capital,
    currency: country.currency,
    adminSenior: country.adminSenior,
  };

  // remove undefined values
  Object.keys(newCountry).forEach(key => newCountry[key] === undefined && delete newCountry[key]);

  // To validate Entity uncomment this block
  /*
   * const validate = (newCountry) => {
   *   if (!newCountry.field) {
   *       throw new Error("this field is required");
   *   }
   * }
   * validate(newCountry) 
   */

  return Object.freeze(newCountry);
};
