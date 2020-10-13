import firebase from "firebase";

const firebaseApp= firebase.initializeApp({
  apiKey: "AIzaSyDmjzBThXdT-OIdp_xkVvkYPs8NGwBIuss",
  authDomain: "clone-46cdf.firebaseapp.com",
  databaseURL: "https://clone-46cdf.firebaseio.com",
  projectId: "clone-46cdf",
  storageBucket: "clone-46cdf.appspot.com",
  messagingSenderId: "97594402218",
  appId: "1:97594402218:web:0c342ac5f0de798633f7d3",
  measurementId: "G-VXWYM93YMK" 
});

const db=firebaseApp.firestore();

const auth = firebase.auth();
export { db,auth };