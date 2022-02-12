// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyDqhhIeHlSuTrk-RkmfRY7UvbhxuiES2Jo',
    authDomain: 'firegram-6555e.firebaseapp.com',
    projectId: 'firegram-6555e',
    storageBucket: 'firegram-6555e.appspot.com',
    messagingSenderId: '771617296920',
    appId: '1:771617296920:web:b123bc54a2bfe75863696d',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
