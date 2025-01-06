const { withNativeFederation, shareAll } = require('@angular-architects/native-federation/config');

module.exports = withNativeFederation({

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

  skip: [
    'rxjs/ajax',
    'rxjs/fetch',
    'rxjs/testing',
    'rxjs/webSocket',
    /^@module-federation/,
    // Add further packages you don't need at runtime
  ],
  sharedMappings:['@angular-architects/playground-lib']

  // Please read our FAQ about sharing libs:
  // https://shorturl.at/jmzH0

});
