// Importações modulares do Firebase v9+
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// Sua configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBGYXvW2xcZNKDBnmw24YRwIuwpjveoBSk",
  authDomain: "login-cine.firebaseapp.com",
  projectId: "login-cine",
  storageBucket: "login-cine.appspot.com",
  messagingSenderId: "782702555827",
  appId: "1:782702555827:web:750c614f8a0c2c82a676c6"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Inicializa o Auth e o GoogleAuthProvider
const auth = getAuth(app);
const db = getFirestore(app);
const googleAuthProvider = new GoogleAuthProvider();

// Exporta o que será necessário em outros lugares da aplicação
export { db, auth, googleAuthProvider };
