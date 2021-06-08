import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDjV72Pl4Ib4Hh6MBMSDbB9b9kWtU-hoPg",
    authDomain: "slack-clone-7dd27.firebaseapp.com",
    projectId: "slack-clone-7dd27",
    storageBucket: "slack-clone-7dd27.appspot.com",
    messagingSenderId: "483158241525",
    appId: "1:483158241525:web:9e0fa8a211dcc62cf4d5bc",
    measurementId: "G-CPY1Z955DR"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;