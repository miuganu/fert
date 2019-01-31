  //database.settings({ timestampsInSnapshits: true});




  // sign up stuff buttons

  const signupbtn = document.querySelector('#form-small')
  if(signupbtn){
      signupbtn.addEventListener('submit', (e) => {
      e.preventDefault();

      const email = signupbtn['Email'].value;
      const pass = signupbtn['Password'].value;

      auth.createUserWithEmailAndPassword(email,pass).then(cred => {
        console.log(cred);
        window.location.href = './code.html';
      })
    }
)}


// for sign out
const logout = document.querySelector('#logoutbtn');
if(logout){
    logout.addEventListener('submit', (e) => {
        e.preventDefault();
        auth.signOut().then(() =>{
            console.log('user signed out');
            window.location.href = './login.html';
        })
    })
}


//log in stuff
const loginbtn = document.querySelector('#form-fire')
if(loginbtn){
    loginbtn.addEventListener('click', (e) => {
        e.preventDefault();

        const email = loginbtn['txtEmail'].value;
        const pass = loginbtn['txtPassword'].value;

        auth.signInWithEmailAndPassword(email,pass).then(cred => {
            console.log(cred);
            window.location.href = './code.html';
        })
    })
}

/*
firebase.auth().onAuthStateChanged(firebaseUser => {
    if( firebaseUser){
        console.log(firebaseUser);
    }   else {
        console.log('just logged in');
    }
});
*/








