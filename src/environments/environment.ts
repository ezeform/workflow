// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    baseUrl: 'https://reahoo-co.firebaseio.com',
    registrationUrl: ' https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser',
    loginUrl: ' https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword',
    apiKey: "AIzaSyDKA3zOuYnn6l_b1aiEI_Lj49Ln6-fc9ww",
    authDomain: "reahoo-co.firebaseapp.com",
    databaseURL: "https://reahoo-co.firebaseio.com",
    projectId: "reahoo-co",
    storageBucket: "reahoo-co.appspot.com",
    messagingSenderId: "125344111431"
  }
};
