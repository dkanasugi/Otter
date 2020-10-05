import firebase from 'firebase';
import "firebase/auth";
import "firebase/firestore";

//firebase config for Daichi
const firebaseConfig_Daichi = {
    apiKey: "AIzaSyB9VylriN_y5be7tgBSaq0mgK6xUsMHt-8",
    authDomain: "otterfeed-f0857.firebaseapp.com",
    databaseURL: "https://otterfeed-f0857.firebaseio.com",
    projectId: "otterfeed-f0857",
    storageBucket: "otterfeed-f0857.appspot.com",
    messagingSenderId: "714324966452",
    appId: "1:714324966452:web:53252dda32f23aeb2ade61",
    measurementId: "G-Y095812884"
  };

// Your web app's Firebase configuration
// var firebaseConfig_Ed = {
//   apiKey: "AIzaSyBfYCq4nqGJ-kJAx0FMrVP2OBZmWYjJes4",
//   authDomain: "otterfeed-9f96f.firebaseapp.com",
//   databaseURL: "https://otterfeed-9f96f.firebaseio.com",
//   projectId: "otterfeed-9f96f",
//   storageBucket: "otterfeed-9f96f.appspot.com",
//   messagingSenderId: "858532208100",
//   appId: "1:858532208100:web:26a17cc46ab13789857bf1",
//   measurementId: "G-XYPVBS5JD7"
// };

export const firebaseApp = firebase.initializeApp(firebaseConfig_Daichi);

// why do we need both of the 2 following lines?
const baseDB = firebaseApp.firestore();
export const db = baseDB;

export const userRef = firebaseApp.database().ref('users');

export const postRef = firebaseApp.database().ref('posts');