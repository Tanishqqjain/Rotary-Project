function Login() {
  if (firebase.auth().currentUser) {
    firebase.auth().signOut();
  }
  var email = document.getElementById('your_email').value;
  var password = document.getElementById('your_pass').value;
  if (email.length < 4) {
    alert('Please enter an email address.');
    return;
  }
  if (password.length < 4) {
    alert('Please enter a password.');
    return;
  }
  firebase.auth().signInWithEmailAndPassword(email, password).then(function () {
    window.location = './imagine/index.html';
  }).catch(function (error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    if (errorCode === 'auth/wrong-password') {
      alert('Wrong password.');
    } else {
      alert(errorMessage);
    }
    console.log(error);
    document.getElementById('sign-in').disabled = false;
  });

  document.getElementById('sign-in').disabled = true;
}
function initApp() {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      window.location = './imagine/index.html';
    } else {
      console.log('Sign Out');
    }
  });
}

function sendPasswordReset() {
  var email = document.getElementById('your_email').value;
  firebase.auth().sendPasswordResetEmail(email).then(function () {
    alert('Password Reset Email Sent!');
  }).catch(function (error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    if (errorCode == 'auth/invalid-email') {
      alert(errorMessage);
    } else if (errorCode == 'auth/user-not-found') {
      alert(errorMessage);
    }
    console.log(error);
  });

}
function signOut() {
  firebase.auth().signOut();
  console.log('logout');
}