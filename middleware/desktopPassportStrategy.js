const {
  Strategy, ExtractJwt 
} = require('passport-jwt');
const { JWT } = require('../constants/authConstant');

const desktopPassportStrategy = ({ userDb }) => async (passport) => {
  const options = {};
  options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken(); 
  options.secretOrKey = JWT.DESKTOP_SECRET;
  passport.use('desktop-rule',
    new Strategy(options, async (payload, done) => {
      try {
        const user = await userDb.findOne({ _id: payload.id });
        if (user) {
          return done(null, user.toJSON());
        }
        return done('No User Found', {});
      } catch (error) {
        return done(error,{});
      }
    })
  );
};
module.exports = desktopPassportStrategy;