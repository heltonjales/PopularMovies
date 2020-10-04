import firebase from 'firebase';

let firebaseConfig = {   
    apiKey: "AIzaSyCTdy-nLh2P_QmnOXcwgnYTWWXjx_tZRK8",
    authDomain: "popularmoviespdm.firebaseapp.com",
    databaseURL: "https://popularmoviespdm.firebaseio.com",
    projectId: "popularmoviespdm",
    storageBucket: "popularmoviespdm.appspot.com",
    messagingSenderId: "415755048549",
    appId: "1:415755048549:web:3d86ea059f954789b5188c"
 };

firebase.initializeApp(firebaseConfig);

export default firebase;