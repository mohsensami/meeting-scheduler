// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.NEXR_PUBLIC_FIREBASE_API_KEY,
    authDomain: 'next-apps-ffc11.firebaseapp.com',
    projectId: 'next-apps-ffc11',
    storageBucket: 'next-apps-ffc11.appspot.com',
    messagingSenderId: '17384401134',
    appId: '1:17384401134:web:b85cf28928f6ef2d472bff',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
