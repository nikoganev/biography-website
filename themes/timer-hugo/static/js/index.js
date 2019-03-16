


firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.

    document.getElementById("user_div").style.display = "block";
    document.getElementById("login_div").style.display = "none";

    var user = firebase.auth().currentUser;
    var database = firebase.database();
    var ref = new Firebase("https://nikovenag-84cf5.firebaseio.com/web/saving-data/fireblog");
    var starCountRef = new Firebase("https://nikovenag-84cf5.firebaseio.com/web/saving-data/fireblog");
    if(user != null) {
    	var email_id = user.email;
    	document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;

    	
		

		starCountRef.on("value", function(snapshot) {
					console.log("hurray");
					document.getElementById("credits_number").value = snapshot.val();
					console.log(snapshot.val());
		});
		
    }
    
  } else {
    // No user is signed in.
    document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display = "block";
  }
});




function login () {
	
	var userEmail = document.getElementById("email_field").value;
	var userPass = document.getElementById("password_field").value;

	firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
	  // Handle Errors here.
	  var errorCode = error.code;
	  var errorMessage = error.message;

	  window.alert("Error : " + errorMessage);
	  // ...
	});
	
}
function logout(){
	firebase.auth().signOut();
}


