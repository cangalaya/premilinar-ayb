// Import the functions you need from the SDKs you need
  
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import { doc, getFirestore, collection, getDoc } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-firestore.js";



// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyDSieqA8JHA3-V44AWkhti6umiI1TiFcVU",

  authDomain: "ayb-cursos.firebaseapp.com",

  projectId: "ayb-cursos",

  storageBucket: "ayb-cursos.appspot.com",

  messagingSenderId: "254101991072",

  appId: "1:254101991072:web:ead6c995502bf6ec5823c5"

};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
console.log('hola')
console.log("hola->", db)



const docRef = doc(db, "analisis-vibracional", "data");
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  console.log("Document data:", docSnap.data());
  const result = docSnap.data();
  document.getElementById("inicio").innerHTML =docSnap.data()['inicio'];
  document.getElementById("duracion").innerHTML =docSnap.data()['duracion'];
  document.getElementById("modalidad").innerHTML =docSnap.data()['modalidad'];
} else {
  // doc.data() will be undefined in this case
  console.log("No such document!");
}