// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId,
    measurementId:process.env.REACT_APP_measurementId,
  };
// const firebaseConfig = {
//   apiKey: "AIzaSyBi_Mb0BKJQoX9uLCHvrfNgT2dub7iSkhA",
//   authDomain: "bikers-avenue.firebaseapp.com",
//   projectId: "bikers-avenue",
//   storageBucket: "bikers-avenue.appspot.com",
//   messagingSenderId: "237992469866",
//   appId: "1:237992469866:web:9061ad37b7ed26d3b7b113",
//   measurementId: "G-SJEMJVDE04"
// };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;