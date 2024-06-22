// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBY3shYmQjrmJ20RReYnAPRVvJQFZEasDY",
    authDomain: "netflixgpt-c723f.firebaseapp.com",
    projectId: "netflixgpt-c723f",
    storageBucket: "netflixgpt-c723f.appspot.com",
    messagingSenderId: "7341807870",
    appId: "1:7341807870:web:4821f6e9f1d39b3014adaf",
    measurementId: "G-C3QZ24PLRX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);