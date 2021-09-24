  //ADD YOUR FIREBASE LINKS
  var firebaseConfig = {
    apiKey: "AIzaSyClHMUJnnq2vXJ6XTaTGLT9Sa52L64Mai4",
    authDomain: "kwitter-f82d1.firebaseapp.com",
    databaseURL: "https://kwitter-f82d1-default-rtdb.firebaseio.com",
    projectId: "kwitter-f82d1",
    storageBucket: "kwitter-f82d1.appspot.com",
    messagingSenderId: "456527099847",
    appId: "1:456527099847:web:b276e770e48e48b5b38be2"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  user_name = localStorage.getItem("user_name");
  
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
  
  function addRoom() {
    room_name = document.getElementById("room_name").value;
  
    firebase.database().ref("/").child(room_name).update({
      purpose: "adding room name"
    });
  
    localStorage.setItem("room_name", room_name);
  
    window.location = "kwitter_page.html";
  }
  
  function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
      document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
        childKey = childSnapshot.key;
        Room_names = childKey;
        console.log("Room Name - " + Room_names);
        row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
        document.getElementById("output").innerHTML += row;
      });
    });
  
  }
  
  getData();
  
  function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
  }
  
  function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
  }
  