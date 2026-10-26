
var loginForm = document.getElementById('signInForm');
var regForm = document.getElementById('signUpForm');
var loginView = document.getElementById('signInView');
var signupView = document.getElementById('signUpView');

// Switch screens
var toSignUpBtn = document.getElementById('toSignUp');
var toSignInBtn = document.getElementById('toSignIn');

if (toSignUpBtn) {
  toSignUpBtn.onclick = function(e) {
    e.preventDefault();
    loginView.className = 'hidden';
    signupView.className = '';
    document.title = "Register - Assignment 1";
  };
}

if (toSignInBtn) {
  toSignInBtn.onclick = function(e) {
    e.preventDefault();
    signupView.className = 'hidden';
    loginView.className = '';
    document.title = "Login - Assignment 1";
  };
}

// show hide password buttons
var eyeButtons = document.querySelectorAll('.eye-toggle');
for (var i = 0; i < eyeButtons.length; i++) {
  eyeButtons[i].addEventListener('click', function() {
    var targetInputId = this.getAttribute('data-target');
    var inputElem = document.getElementById(targetInputId);
    
    if (inputElem.type === 'password') {
      inputElem.type = 'text';
      // slashed eye
      this.innerHTML = '<svg class="eye-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>';
    } else {
      inputElem.type = 'password';
      // normal eye
      this.innerHTML = '<svg class="eye-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>';
    }
  });
}

// login submit
loginForm.addEventListener('submit', function(ev) {
  ev.preventDefault();
  var email = document.getElementById('signin-email').value;
  var pass = document.getElementById('signin-password').value;

  if (email.trim() === '' || pass.trim() === '') {
    alert('Please fill out both email and password!');
    return false;
  }

  // temporary check for demo
  alert('Welcome! Logged in as: ' + email);
});

// sign up submit
regForm.addEventListener('submit', function(ev) {
  ev.preventDefault();
  var name = document.getElementById('signup-name').value;
  var mail = document.getElementById('signup-email').value;
  var p1 = document.getElementById('signup-password').value;
  var p2 = document.getElementById('signup-confirm-password').value;

  if (p1 !== p2) {
    alert('Error: Passwords do not match, please re-type.');
    return;
  }

  if (p1.length < 6) {
    alert('Password should be at least 6 characters.');
    return;
  }

  alert('Registration successful! Welcome ' + name);
  
  // reset and switch to login
  regForm.reset();
  signupView.className = 'hidden';
  loginView.className = '';
  document.title = "Login - Assignment 1";
});

// forgot password
var forgot = document.getElementById('forgotBtn');
if (forgot) {
  forgot.onclick = function() {
    var checkMail = prompt('Enter your registered email address:');
    if (checkMail) {
      alert('Password reset link has been sent to ' + checkMail);
    }
  };
}
