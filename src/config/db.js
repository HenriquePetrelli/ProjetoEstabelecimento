<script src="https://www.gstatic.com/firebasejs/5.8.0/firebase.js"></script>
import Firebase from 'firebase'
 let config = {
    apiKey: "AIzaSyBdr9tOd9Tp78uaSTINheA63Ef_TcjwwSM",
    authDomain: "estabelecimento12345.firebaseapp.com",
    databaseURL: "https://estabelecimento12345.firebaseio.com",
    projectId: "estabelecimento12345",
    storageBucket: "estabelecimento12345.appspot.com",
    messagingSenderId: "404348063985"
  };
let app = Firebase.initializeApp(config)
export const db = app.database()