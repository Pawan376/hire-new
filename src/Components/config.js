import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from 'firebase/auth';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8mw1dGOvjegy7xDwHy_n5dQdVUlIhX8E",
  authDomain: "hire-hatch.firebaseapp.com",
  projectId: "hire-hatch",
  storageBucket: "hire-hatch.appspot.com",
  messagingSenderId: "288714040397",
  appId: "1:288714040397:web:84b5a17ec179ab63d4e804",
  measurementId: "G-HH4ES2MYF0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();
const fbprovider = new FacebookAuthProvider();


const cookieOptions = {
  path: '/',
  secure: true, // Set to true if served over HTTPS
  sameSite: 'Lax', // or 'None' if using cross-origin requests
};

const setCookie = (name, value) => {
  document.cookie = `${name}=${value};${cookieOptions}`;
};
const removeCookie = (name) => {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC;${cookieOptions}`;
};



export { auth, googleProvider, fbprovider, setCookie, removeCookie };