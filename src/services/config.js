import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

//iniciar la conexion con firebase

//objeto con la informacion de la conexion que incluye la clave de la aplicacion
const firebaseConfig = {
    apiKey: "AIzaSyC-dwixQUrXMHIsKTLNQzuJ1ze2j9KZBh0",
    authDomain: "tuc-tech.firebaseapp.com",
    projectId: "tuc-tech",
    storageBucket: "tuc-tech.appspot.com",
    messagingSenderId: "826402634931",
    appId: "1:826402634931:web:f479500007953bc61244c6"
};

//inicializar la aplicacion con la configuracion de firebase 
const app = initializeApp(firebaseConfig);


//obtener una instancia del servicio de firestore
export const db = getFirestore(app);