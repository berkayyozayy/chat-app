import firebase from "firebase";
import app from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyC7JgzZNd11HmpND8qlOg9Goz4vgyh5hYA",
    authDomain: "fitness-hocam-app.firebaseapp.com",
    databaseURL: "https://fitness-hocam-app.firebaseio.com",
    projectId: "fitness-hocam-app",
    storageBucket: "fitness-hocam-app.appspot.com",
    messagingSenderId: "840778161126",
    appId: "1:840778161126:web:5a18f588aeb9a229a6d427",
    measurementId: "G-LEB9YXQ35F"
  };
  
  const fire = app.initializeApp(firebaseConfig);
  export default fire;