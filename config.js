import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyDEMMV6O6ZoCerYGopQ69n4aWMBQlSY9kI",
    authDomain: "trouble-shoot-ba0d6.firebaseapp.com",
    databaseURL: "https://trouble-shoot-ba0d6-default-rtdb.firebaseio.com",
    projectId: "trouble-shoot-ba0d6",
    storageBucket: "trouble-shoot-ba0d6.appspot.com",
    messagingSenderId: "272673368963",
    appId: "1:272673368963:web:30324147c730dcdd8824b6",
    measurementId: "G-4L8P67CLQR"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 
  export default firebase.firestore();
