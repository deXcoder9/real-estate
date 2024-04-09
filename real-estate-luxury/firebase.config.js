// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE__APIKEY,
  authDomain: import.meta.env.VITE__AUTHDOMAIN,
  projectId: import.meta.env.VITE__PROJECTID,
  storageBucket: import.meta.env.VITE__STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE__MESSAGINGSENDERID,
  appId: import.meta.env.VITE__APPID,
  //   apiKey: "AIzaSyAbtLJOWvwfq6yCXQnaFOfCw9vgbRoNN8k",
  //   authDomain: "assignment-09-7e481.firebaseapp.com",
  //   projectId: "assignment-09-7e481",
  //   storageBucket: "assignment-09-7e481.appspot.com",
  //   messagingSenderId: "756460807750",
  //   appId: "1:756460807750:web:05af4969133d1ec21c4c47",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
