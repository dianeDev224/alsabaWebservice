module.exports = (city) => {

  let newCity = { 
    isDeleted: city.isDeleted,
    cityName: city.cityName,
    region: city.region,
  };

  // remove undefined values
  Object.keys(newCity).forEach(key => newCity[key] === undefined && delete newCity[key]);

  // To validate Entity uncomment this block
  /*
   * const validate = (newCity) => {
   *   if (!newCity.field) {
   *       throw new Error("this field is required");
   *   }
   * }
   * validate(newCity) 
   */

  return Object.freeze(newCity);
};
