// import firebase from "firebase/compat/app";
// import 'firebase/auth'

// if (!firebase.apps.length) {
//     firebase.initializeApp({
//         apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//         authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//         projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//     })
// }

// export default firebase

// firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    // storageBucket: "YOUR_STORAGE_BUCKET",
    // messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    // appId: "YOUR_APP_ID",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
