import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'

//configuração banco de dados firebase
const firebaseConfig = {
  apiKey: "AIzaSyBCTTFWiw4m5vg5jfqWu1dniIgh5kzzta4",
  authDomain: "somativafinal.firebaseapp.com",
  projectId: "somativafinal",
  storageBucket: "somativafinal.appspot.com",
  messagingSenderId: "719590033414",
  appId: "1:719590033414:web:79c809a76be68b438d9b87"
};

if(!firebase.apps.length){ //valida inicialização do banco de dados, para não ocorrer sempre
    firebase.initializeApp(firebaseConfig);
}

  export default firebase;