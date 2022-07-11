import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBXYrxPl-wYS94SQQhwGgOGyAv4qYpDwYw",
    authDomain: "todo-app-fa9e3.firebaseapp.com",
    projectId: "todo-app-fa9e3",
    storageBucket: "todo-app-fa9e3.appspot.com",
    messagingSenderId: "1037262902345",
    appId: "1:1037262902345:web:222ffd9681f7502b665b98"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore()

export { db }