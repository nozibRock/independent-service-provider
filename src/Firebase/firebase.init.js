import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBVWR6wEvuliQUTo6V5Neoogzu1vUkaN4c",
  authDomain: "independent-service-prov-d7a3a.firebaseapp.com",
  projectId: "independent-service-prov-d7a3a",
  storageBucket: "independent-service-prov-d7a3a.appspot.com",
  messagingSenderId: "406793103468",
  appId: "1:406793103468:web:d385e6ae3619a9ddcc1049",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;