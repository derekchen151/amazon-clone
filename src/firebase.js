import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNl2SDM1QDTAhonUUx_x_OgfHh2vViT-c",
  authDomain: "clone-17068.firebaseapp.com",
  projectId: "clone-17068",
  storageBucket: "clone-17068.appspot.com",
  messagingSenderId: "773789042070",
  appId: "1:773789042070:web:ff25a09e90fa62d3ce09b7",
  measurementId: "G-PJN8BGZRX6"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export {db, auth};