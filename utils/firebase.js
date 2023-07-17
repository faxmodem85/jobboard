import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
	apiKey: "AIzaSyBy4viM6Ok8TfvsqUyN7E1XosuAgO76Kwo",
	authDomain: "oz-locums.firebaseapp.com",
	projectId: "oz-locums",
	storageBucket: "oz-locums.appspot.com",
	messagingSenderId: "793509347370",
	appId: "1:793509347370:web:082ba891fe64476d580353",
	measurementId: "G-7Q4JHRTB26"
  };


let fire;

if (!firebase.apps.length) {
	fire = firebase.initializeApp(firebaseConfig);
} else {
	fire = firebase.app();
}

export default fire;
