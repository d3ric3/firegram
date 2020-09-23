import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAjAbR4E4-QJsqCI3bhRbgxv_39MqlfRcQ",
  authDomain: "firegram-da6d4.firebaseapp.com",
  databaseURL: "https://firegram-da6d4.firebaseio.com",
  projectId: "firegram-da6d4",
  storageBucket: "firegram-da6d4.appspot.com",
  messagingSenderId: "307097882619",
  appId: "1:307097882619:web:1e78f883e5cf3dbdf1055e",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
