// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5OVgkuWnUsC_bSSR9MTLb6i6en6F24KU",
  authDomain: "solingiot.firebaseapp.com",
  projectId: "solingiot",
  storageBucket: "solingiot.appspot.com",
  messagingSenderId: "384978311700",
  appId: "1:384978311700:web:7da8dd541f49fdcb776501"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase;