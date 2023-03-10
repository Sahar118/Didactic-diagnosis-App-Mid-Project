import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

export const firebaseConfig = {
    apiKey: "AIzaSyCn-giu8Oyy5pnxO_4vhbX7ESuenNdK5jk",
    authDomain: "diagnosis-app-4104a.firebaseapp.com",
    projectId: "diagnosis-app-4104a",
    storageBucket: "diagnosis-app-4104a.appspot.com",
    messagingSenderId: "878891203256",
    appId: "1:878891203256:web:175d4c169816014143524d"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp, projectStorage }
