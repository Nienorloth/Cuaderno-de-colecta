import firebase from 'firebase/app';

const FBApp = firebase.initializeApp({
    apiKey: "AIzaSyAPkfDXn03GigYudTvv6rYcYHGv62bGkYQ",
    authDomain: "cuaderno-de-colectas.firebaseapp.com",
    projectId: "cuaderno-de-colectas",
    storageBucket: "gs://cuaderno-de-colectas.appspot.com/",
});

export default FBApp;


