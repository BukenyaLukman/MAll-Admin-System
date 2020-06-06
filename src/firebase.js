
import * as firebase from "firebase/app";

 //If you enabled Analytics in your project, add the Firebase SDK for Analytics -->
import"firebase/analytics";

 //Add Firebase products that you want to use -->
import "firebase/auth"
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDlctPNoI9pzJgyCFVL5if-F3UMU-J6d78",
    authDomain: "my-mall-15312.firebaseapp.com",
    databaseURL: "https://my-mall-15312.firebaseio.com",
    projectId: "my-mall-15312",
    storageBucket: "my-mall-15312.appspot.com",
    messagingSenderId: "649035818063",
    appId: "1:649035818063:web:692393c5e9e0c84a8c363a",
    measurementId: "G-CPW49MEL3Y"
  };

firebase.initializeApp(firebaseConfig);
export default firebase;