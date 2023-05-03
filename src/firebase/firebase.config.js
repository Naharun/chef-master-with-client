// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBQldNQQq3leqhnC92gAspguPvxnIrBko",
  authDomain: "chef-master-with-client.firebaseapp.com",
  projectId: "chef-master-with-client",
  storageBucket: "chef-master-with-client.appspot.com",
  messagingSenderId: "582516774862",
  appId: "1:582516774862:web:a6e0b7047f4e17403ebd9f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;