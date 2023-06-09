import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import 'firebase/auth';

const firebaseConfig = {
	apiKey: process.env.REACT_APP_FIREBASE_API_KEY,

	authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,

	projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,

	storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,

	messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,

	appId: process.env.REACT_APP_FIREBASE_APP_ID,

	databaseURL:
		'https://auth-example-7f94e-default-rtdb.europe-west1.firebasedatabase.app/',
};

const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

export { app, database };
