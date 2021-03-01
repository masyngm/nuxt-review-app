import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: 'AIzaSyA6wxOWiO45U6IMZB50MNQW57EPQ0WbWrY',
    authDomain: 'my-chat-app-d90bc.firebaseapp.com',
    databaseURL: 'https://my-chat-app-d90bc-default-rtdb.firebaseio.com',
    projectId: 'my-chat-app-d90bc',
    storageBucket: 'my-chat-app-d90bc.appspot.com',
    messagingSenderId: '904038100266',
    appId: '1:904038100266:web:6b8bcd7674fa0627ae0253',
  })
}
