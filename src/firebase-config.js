import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAo...eeTh2s",
    authDomain: "gossjsdemo2.firebaseapp.com",
    databaseURL: "https://gossjsdemo2.firebaseio.com",
    projectId: "gossjsdemo2",
    storageBucket: "gossjsdemo2.appspot.com",
    messagingSenderId: "784916670484",
    appId: "1:78491...0fdf01"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
