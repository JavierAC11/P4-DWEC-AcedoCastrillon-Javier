// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signOut } from "firebase/auth";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDoc } from "firebase/firestore";
import { setDoc, doc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
};
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)

export const loginFirebase = ({email, password}) => {
    return signInWithEmailAndPassword(auth, email, password)
}

export const registro = ({email, password}) => {
    return createUserWithEmailAndPassword(auth, email, password)
}

export const logOut = () => signOut(auth);

const db = getFirestore(app);

export async function getDataById(id) {
  try {
    const docRef = doc(db, "Usuarios", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      console.log("No such document!");
    }
    
} catch (error) {

    console.log(error)
}

}

export async function addElement(usuario, id) {
    try {
      await setDoc(doc(db, "Usuarios", id), {
        nombre: usuario.nombre,
        correo: usuario.correo,
        telefono: usuario.telefono
      });
      console.log("Documento añadido con ID personalizado:", id);
    } catch (error) {
      console.error("Error añadiendo documento:", error);
    }
  }