// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyB3o1TxRpEWx-M2T1hDGyoKuvmfRGVviwk",
    authDomain: "cast-dashboard.firebaseapp.com",
    databaseURL: "https://cast-dashboard.firebaseio.com",
    projectId: "cast-dashboard",
    storageBucket: "",
    messagingSenderId: "507072490913"
  }
};
