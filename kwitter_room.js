
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
  apiKey: "AIzaSyAQA3IozTnDnf4x108u-FPIxwNMyDjQPeM",
  authDomain: "letschat-3881f.firebaseapp.com",
  databaseURL: "https://letschat-3881f-default-rtdb.firebaseio.com/",
  projectId: "letschat-3881f",
  storageBucket: "letschat-3881f.appspot.com",
  messagingSenderId: "153149584806",
  appId: "1:153149584806:web:68f43c5990804db4cf4b67",
  measurementId: "G-6PMJEDGJ1M"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  u=localStorage.getItem("Username"); 
 document.getElementById("wel").innerHTML="Welcome, "+u+"!";

  function addroom(){
    Roomname= document.getElementById("rn").value;
    console.log(Roomname);
    firebase.database().ref("/").child(Roomname).update({
          Purpose: "Adding a room name"
    });
    localStorage.setItem("Room_name",Roomname);
    window.location="kwitter_page.html";
  }
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
console.log(Room_names)
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >Room Name : "+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML +=row;
//End code
});});}
getData();
function redirectToRoomName(r){
  console.log(r);
  localStorage.setItem("Room_name",r);
  window.location="kwitter_page.html";
}
function logout(){
  localStorage.removeItem("Username");
  localStorage.removeItem("Room_name");
  window.location="index.html";
}
