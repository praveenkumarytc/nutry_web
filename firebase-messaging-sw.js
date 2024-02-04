importScripts("https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js");

firebase.initializeApp({
  apiKey: "AIzaSyCyvfddoM9eTM78uV61LNRcjQ-NlwiuLJ4",
  authDomain: "nutry-389218.firebaseapp.com",
  projectId: "nutry-389218",
  storageBucket: "nutry-389218.appspot.com",
  messagingSenderId: "31639935440",
  appId: "1:31639935440:web:464c443c1c5b53daadc1d5",
  measurementId: "G-W7SSVRBE9N"
});

const messaging = firebase.messaging();

// Optional:
messaging.onBackgroundMessage((message) => {
  console.log("onBackgroundMessage", message);
});