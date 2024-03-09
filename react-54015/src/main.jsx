import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAyOxoTQL2vka9Kr2BPhSLbg5xneyP-btU",
  authDomain: "test-1-56fd7.firebaseapp.com",
  projectId: "test-1-56fd7",
  storageBucket: "test-1-56fd7.appspot.com",
  messagingSenderId: "419588153051",
  appId: "1:419588153051:web:a0653e2bddd1f1dd5876fe",
  measurementId: "G-NDEQ2YHVCY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
