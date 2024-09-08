// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
	apiKey: 'AIzaSyBAfnfzGLXtKGtwBBTk63gvTemGYhU8LK4',
	authDomain: 'tutorial-react-firebase-2f853.firebaseapp.com',
	databaseURL:
		'https://tutorial-react-firebase-2f853-default-rtdb.firebaseio.com',
	projectId: 'tutorial-react-firebase-2f853',
	storageBucket: 'tutorial-react-firebase-2f853.appspot.com',
	messagingSenderId: '961634401253',
	appId: '1:961634401253:web:de0b1ad73ad822c8eecd0c',
};

// Initialize Firebase
export const appFirebase = initializeApp(firebaseConfig);
