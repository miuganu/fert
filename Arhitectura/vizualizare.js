 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyDyrHAHabaKZD1ftOqU681cW1EXmGtd6Vk",
    authDomain: "fertdda.firebaseapp.com",
    databaseURL: "https://fertdda.firebaseio.com",
    projectId: "fertdda",
    storageBucket: "fertdda.appspot.com",
    messagingSenderId: "76462374610"
  };
  firebase.initializeApp(config);

// Referinta la intrebari
var fRef = firebase.database().ref('Feedback');
fRef.on('value',valDate,errDate);

function valDate(data)
{    
    var toate = data.val();
    var keys = Object.keys(toate);
    
    var da = toate[keys[0]];
    var nu = toate[keys[1]];

    const li0 = document.createElement('li');
    const la0 = document.createElement('label');
    la0.innerHTML = "Am inteles: ";
    li0.appendChild(la0);
    li0.appendChild(document.createTextNode(da));
    document.getElementById("feedback").appendChild(li0); 
  
  
    const li1 = document.createElement('li');
    const la1 = document.createElement('label');
    la1.innerHTML = "Nu am inteles: ";
    li1.appendChild(la1);
    li1.appendChild(document.createTextNode(nu));
    document.getElementById("feedback").appendChild(li1); 
  



}

var query = firebase.database().ref("users").orderByKey();
query.once("value")
  .then(function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      // key will be "ada" the first time and "alan" the second time
      var key = childSnapshot.key;
      // childData will be the actual contents of the child
      var childData = childSnapshot.val();
  });
});

function errDate(err)
{
    console.log('Eroare');
    console.log(err);

}

