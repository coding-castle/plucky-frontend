// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyDqAg-417M5QDXwUnkzDl29qoYZoCCpaHo",
    authDomain: "plucky-backend.firebaseapp.com",
    databaseURL: "https://plucky-backend.firebaseio.com",
    projectId: "plucky-backend",
    storageBucket: "plucky-backend.appspot.com",
    messagingSenderId: "86359356199",
    appId: "1:86359356199:web:46d4df7e72756f09542f02"
  },
  smtp: {
    host: "smtp.strato.de",
    email: "notification@myplucky.eu",
    pass: ""
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
