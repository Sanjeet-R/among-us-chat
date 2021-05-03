var firebaseConfig = {
      apiKey: "AIzaSyC_-IG8LC4F6aPVAMPxH2mvhKkfAE27PTU",
      authDomain: "kwitter2-97604.firebaseapp.com",
      databaseURL: "https://kwitter2-97604-default-rtdb.firebaseio.com",
      projectId: "kwitter2-97604",
      storageBucket: "kwitter2-97604.appspot.com",
      messagingSenderId: "687534699990",
      appId: "1:687534699990:web:7778fd682817640af9e077"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
