import firebase from 'firebase';

// const firebaseConfig = {
//   apiKey: 'AIzaSyAYIHv40mYNhtIwQwIb7A6KW_saF8L9xQU',
//   authDomain: 'netflix-clone-82c03.firebaseapp.com',
//   projectId: 'netflix-clone-82c03',
//   storageBucket: 'netflix-clone-82c03.appspot.com',
//   messagingSenderId: '157108148348',
//   appId: '1:157108148348:web:d2e3f255bcf956294ed1f9',
//   measurementId: 'G-12H3TG5EK4',
// };

const firebaseConfig = {
  apiKey: "AIzaSyBW0A8iqJGKfyNwCh_1Y7rteppGc7p3Zds",
  authDomain: "netflix-clone-1d1f7.firebaseapp.com",
  projectId: "netflix-clone-1d1f7",
  storageBucket: "netflix-clone-1d1f7.appspot.com",
  messagingSenderId: "994818720379",
  appId: "1:994818720379:web:4e3eef3c6c97775300d8de",
  measurementId: "G-HXV9BL05TD"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
