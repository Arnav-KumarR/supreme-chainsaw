//YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyAZnfHpuNB95zSMpRF8HSKec0d5JJNzzN0",
    authDomain: "kibitz-660d0.firebaseapp.com",
    databaseURL: "https://kibitz-660d0-default-rtdb.firebaseio.com",
    projectId: "kibitz-660d0",
    storageBucket: "kibitz-660d0.appspot.com",
    messagingSenderId: "974241347555",
    appId: "1:974241347555:web:b31055d0c13e2ed20752d6",
    measurementId: "G-0FC7RD320L"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();

function send()
{
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    });

    document.getElementById("msg").value = "";
}

function leaveroom()
{
    window.location = "kibitz_room.html";
}

function logout()
{
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}