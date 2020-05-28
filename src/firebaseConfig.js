// src/firebaseConfig.js
import firebase from "firebase";

// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBWGNxjnk0ek8g814-Kf9_uh1WP5AyCRLU",
    authDomain: "stock-trader-aeec2.firebaseapp.com",
    databaseURL: "https://stock-trader-aeec2.firebaseio.com",
    projectId: "stock-trader-aeec2",
    storageBucket: "stock-trader-aeec2.appspot.com",
    messagingSenderId: "833283374793",
    appId: "1:833283374793:web:cb5affb97093477a701718",
    measurementId: "G-BM0FML4VWM"
  };

  // Initialize Firebase
export default firebase.initializeApp(firebaseConfig);