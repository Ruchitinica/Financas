import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

let firebaseConfig = {
    apiKey: "AIzaSyDN7cjRQ6kxeVAEfAYW0A3V9J6qtYalgw0",
    authDomain: "financa-e5f28.firebaseapp.com",
    projectId: "financa-e5f28",
    storageBucket: "financa-e5f28.appspot.com",
    messagingSenderId: "748987637709",
    appId: "1:748987637709:web:c58c4a69966a9853a42e84"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;