var PassportConfigurator = require('loopback-component-passport').PassportConfigurator;

module.exports = function(app) {
  var passportConfigurator = new PassportConfigurator(app);

  passportConfigurator.init();
  // Set own user model
  passportConfigurator.setupModels({
      userModel: app.models.Account,
      userIdentityModel: app.models.userIdentity,
      userCredentialModel: app.models.userCredential
    });
  //Set Facebook Auth
  passportConfigurator.configureProvider('facebook-login', require('../../providers.json')['facebook-login']);
};