// firebase.js
// =========================
const firebaseConfig = {
  apiKey: "AIzaSyD4Mwgq2qmjZ33VVR7RUFjZViUXJ3Ijpgk",
  authDomain: "sistemaingressos-a98f0.firebaseapp.com",
  projectId: "sistemaingressos-a98f0",
  storageBucket: "sistemaingressos-a98f0.appspot.com",
  messagingSenderId: "1227812590",
  appId: "1:1227812590:web:07107c0e3069fe9dfbcdff",
  measurementId: "G-QGDNMN0VQ5"
};

// Inicializa apenas se não houver outra instância
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };
