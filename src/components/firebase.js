import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDKPxIo0agjAz5e81-R4DJtZm6YrM0xeEw",
    authDomain: "frontend-yum.firebaseapp.com",
    databaseURL: "https://frontend-yum.firebaseio.com",
    projectId: "frontend-yum",
    storageBucket: "frontend-yum.appspot.com",
    messagingSenderId: "170718491094",
};

export const Firebase = firebase.initializeApp(config);