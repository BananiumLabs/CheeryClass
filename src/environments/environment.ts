// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyAU2D5ZJ7x-T_hLxT24sA3odi5mjYw5L24',
    authDomain: 'cheeryclass.firebaseapp.com',
    databaseURL: 'https://cheeryclass.firebaseio.com',
    projectId: 'cheeryclass',
    storageBucket: 'cheeryclass.appspot.com',
    messagingSenderId: '663749714208'
  }
};
