import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCFhrWkM5zpRqLFNdsiTNrMj6cJRPQ7gk",
  authDomain: "restaurant-reservation-a10dd.firebaseapp.com",
  projectId: "restaurant-reservation-a10dd",
  storageBucket: "restaurant-reservation-a10dd.appspot.com",
  messagingSenderId: "111218008264",
  appId: "1:111218008264:web:614d70dee16cf19edd45fd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app