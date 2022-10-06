import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyAl0G0-H61hq_XYVAQHHgveERd_Hxk1tAg",
	authDomain: "netflix-clone-d01bd.firebaseapp.com",
	projectId: "netflix-clone-d01bd",
	storageBucket: "netflix-clone-d01bd.appspot.com",
	messagingSenderId: "434424248641",
	appId: "1:434424248641:web:b9292a51ba0a8d911409c0",
	measurementId: "G-M7SM26YJND",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
