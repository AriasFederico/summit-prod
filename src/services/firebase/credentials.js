import { getAnalytics } from 'firebase/analytics';
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyCZSIc1bx8Cg5_2a3W6UY_xxQzMGopmKYs',
	authDomain: 'pricify-86380.firebaseapp.com',
	projectId: 'pricify-86380',
	storageBucket: 'pricify-86380.firebasestorage.app',
	messagingSenderId: '299622989012',
	appId: '1:299622989012:web:bd0b876b20d38076254f41',
	measurementId: 'G-BV3SW8L0KD',
};

// Initialize Firebase
export const appFirebase = initializeApp(firebaseConfig);
const analytics = getAnalytics(appFirebase);

import {
	GoogleAuthProvider,
	getAuth,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signInWithPopup,
} from 'firebase/auth';

// Get a reference to the Authentication service
export const auth = getAuth(appFirebase);

// Example: Sign in with email and password
export const signIn = async (email, password) => {
	try {
		const userCredential = await signInWithEmailAndPassword(
			auth,
			email,
			password,
		);
		// User signed in successfully
		console.log('User signeed in:', userCredential.user);
	} catch (error) {
		// Handle errors (e.g., wrong password, user not found)
		console.error('Error signing in:', error.message);
	}
};

// Example: Sign in with Google
export const signInWithGoogle = async () => {
	const provider = new GoogleAuthProvider();
	try {
		const result = await signInWithPopup(auth, provider);
		// User signed in with Google
		console.log('User signed in with Google:', result.user);
	} catch (error) {
		console.error('Error signing in with Google:', error.message);
	}
};

// Listen for authentication state changes
onAuthStateChanged(auth, (user) => {
	if (user) {
		// User is signed in
		console.log('User is logged in:', user.uid);
	} else {
		// User is signed out
		console.log('User is logged out');
	}
});
