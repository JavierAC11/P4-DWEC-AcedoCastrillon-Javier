// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signOut } from "firebase/auth";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDoc } from "firebase/firestore";
import { setDoc, doc } from "firebase/firestore";
import { arrayUnion, updateDoc } from "firebase/firestore";
import { arrayRemove } from "firebase/firestore";
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

// Obtener datos de un usuario por ID
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

// Añadir un documento a la colección "Usuarios"
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

  // Añadir un coche a la colección "Favoritos" de un usuario
  export const addFavorite = async (userId, car) => {
    console.log(userId, car);
  
    try {
      const userRef = doc(db, "Favoritos", userId);
  
      const docSnap = await getDoc(userRef);
  
      if (docSnap.exists()) {
        await updateDoc(userRef, {
          cars: arrayUnion(car),
        });
      } else {
        await setDoc(userRef, {
          cars: [car],
        });
      }
  
      console.log("Coche agregado a favoritos");
    } catch (error) {
      console.error("Error al agregar coche a favoritos: ", error);
    }
  };

  // Obtener favoritos de un usuario
  export const getFavorites = async (userId) => {
    try {
      const userRef = doc(db, "Favoritos", userId);
      
      const docSnap = await getDoc(userRef);
      
      if (docSnap.exists()) {
        const data = docSnap.data();
        return data;
      } else {
        console.log("No existe el documento para el usuario proporcionado.");
        return null;
      }
    } catch (error) {
      console.error("Error al obtener favoritos:", error);
      return null;
    }
  };


// Eliminar un coche de la colección "Favoritos" de un usuario
  export const removeFavorite = async (userId, car) => {
    try {
      const userRef = doc(db, "Favoritos", userId);
  
      await updateDoc(userRef, {
        cars: arrayRemove(car),
      });
  
      console.log("Coche eliminado de favoritos");
    } catch (error) {
      console.error("Error al eliminar coche de favoritos: ", error);
    }
  }