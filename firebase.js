import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCKRJSszEVsx8LMOSDO5-1PFHFE1hTqcNU",
  authDomain: "whatsapp-2-53e1a.firebaseapp.com",
  projectId: "whatsapp-2-53e1a",
  storageBucket: "whatsapp-2-53e1a.appspot.com",
  messagingSenderId: "25655547446",
  appId: "1:25655547446:web:4747dda45fe0df65286a97",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
