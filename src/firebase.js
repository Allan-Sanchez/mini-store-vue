import * as firebase from 'firebase';

 var firebaseConfig = {
    apiKey: "AIzaSyCbPblYOGaH-c9CyTZHZPO2fWILCXi13M4",
    authDomain: "umgproyect-34faa.firebaseapp.com",
    databaseURL: "https://umgproyect-34faa.firebaseio.com",
    projectId: "umgproyect-34faa",
    storageBucket: "umgproyect-34faa.appspot.com",
    messagingSenderId: "684151083660",
    appId: "1:684151083660:web:422698de47768c3445a1a9",
    measurementId: "G-H9TK9BEZ4L"
  };
  // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
// firebase.analytics();

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();