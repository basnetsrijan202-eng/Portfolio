// Login function
function loginUser() {
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;
  const remember = document.getElementById('rememberMe').checked;

  if(email && password){
    alert('Email: ' + email + '\nRemember me: ' + (remember ? 'Yes' : 'No'));
    // Add your login logic here
  } else {
    alert('Please enter email and password');
  }
}

// Forgot password link
function forgotPassword() {
  alert('Password reset link sent to your email!');
}