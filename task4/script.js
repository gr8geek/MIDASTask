var firebaseConfig = {
    apiKey: "AIzaSyC5hsr4QgPgxv5rAzO3eO-sbkEl_f9WZeo",
    authDomain: "twf-task-b6aa0.firebaseapp.com",
    projectId: "twf-task-b6aa0",
    storageBucket: "twf-task-b6aa0.appspot.com",
    messagingSenderId: "845086508220",
    appId: "1:845086508220:web:6e2cdeacc9177e0fbabcb9",
    measurementId: "G-K348NKVGB0"
};// Firebase configuration
firebase.initializeApp(firebaseConfig);
firebase.analytics();
var db = firebase.firestore();
//Getting access to the firestore DB
var docRef = db.collection("users");
var userId = null;
document.addEventListener('DOMContentLoaded', function() {
const logout = document.getElementById("logout")

const lform = document.getElementById("loginform")
const sform = document.getElementById("signupform")
//Login and Logout form objects
console.log(sform)
console.log("Script js Activ")

logout.onclick = (e)=>{
  e.preventDefault()
  firebase.auth().signOut().then(function() {
      // Sign-out successful.
    }).catch(function(error) {
      // An error happened.
    });
}
//Added the event listeners
sform.onsubmit = (e)=>{
  console.log(e)
  console.log("Inside form submit fun")
  e.preventDefault()
  const email = document.getElementById("semail").value
  const pass = document.getElementById("spassword").value
  //Extract email and password
  firebase.auth().createUserWithEmailAndPassword(email, pass)
  //creating the user
  .then(ob=>{
    const val = ob;
    console.log(val.uid)
  })
  .catch(function(error) {
  var errorCode = error.code;
  var errorMessage = error.message;
  alert(errorMessage)
// ...
});
}
lform.onsubmit = (e)=>{
  e.preventDefault()          
  const email = document.getElementById("email").value
  const pass = document.getElementById("password").value
  console.log(email,pass)
    //Extract email and password
    //Signing in
  firebase.auth().signInWithEmailAndPassword(email, pass)
  .then(ob=>{
    const val2 = ob;
    console.log("Hello")
    console.log(ob.user.uid)
    $('#myModal').modal('toggle')

  })
  .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });

}

firebase.auth().onAuthStateChanged(function(user) {
  console.log("Auth FUNCCTUIG")
  if (user) {
    // User is signed in.
    logout.classList.remove('d-none')// Unhide Logout button
    document.getElementById("tspan1041").textContent = "LoggedIn";// When Logged in Change the Text
  } else {
    uid = null
    document.getElementById("tspan1041").textContent = "LOGIN|SIGNUP";//Logged out - change the text

    logout.classList.add("d-none")// Hide logout button
    console.log("Signed Out user")
  }
});

});
