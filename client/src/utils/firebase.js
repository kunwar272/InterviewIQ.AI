import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAeSWl6p5xGNTIjBrkVKAPIFhCUMEHDpaQ",
  authDomain: "interviewiq-50c26.firebaseapp.com",
  projectId: "interviewiq-50c26",
  storageBucket: "interviewiq-50c26.appspot.com",
  messagingSenderId: "142480995500",
  appId: "1:142480995500:web:b6cea985d3a29fc258db09",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };