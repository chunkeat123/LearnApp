import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDRvne6_00MaXIQW71z-hiKwesJ8eAPBOM",
    authDomain: "learnapp-c0814.firebaseapp.com",
    databaseURL: "https://learnapp-c0814-default-rtdb.firebaseio.com",
    projectId: "learnapp-c0814",
    storageBucket: "learnapp-c0814.appspot.com",
    messagingSenderId: "861133097151",
    appId: "1:861133097151:web:abd04ff44088f6dd9b9e0a",
    measurementId: "G-9BH8XZ47E2"
  };

  export const app = initializeApp(firebaseConfig);
  export const analytics = getFirestore(app);