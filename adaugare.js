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
var intrebariRef = firebase.database().ref('intrebari');
intrebariRef.on('value',aduDate,errDate);//

//Asculta formularul de adaugare intrebare
var evform = document.getElementById('formintrebare')

if(evform){
    evform.addEventListener('submit',submitForm);
}


function aduDate(data)
{
    var toate = data.val();
    var keys = Object.keys(toate);
    console.log(keys);
    for(var i=0; i<keys.length; i++)//De la 0 la nr max item
    {
        var k = keys[i];
        var ti = toate[k].intrebare;//adu doar campu intrebare
        
        //Creez dom-ul
        const li0 = document.createElement('li');
        const li = document.createElement('input');
        li.type = 'radio';
        li.name = 'radioGrup';//toate butoanele de tip radio, 
        li.value = ti;
        li0.appendChild(li);
        li0.appendChild(document.createTextNode(ti));
        document.getElementById("toateintrebarile").appendChild(li0);     
    }    
}


function errDate(err)
{
    console.log('Eroare');
    console.log(err);

}

function submitForm(e){
    e.preventDefault();
    // Adauga intrebarea
    var intrebare = getValoare('intrebarea');
    var optiunea1 = getValoare('optiunea1');
    var optiunea2 = getValoare('optiunea2');
    var optiunea3 = getValoare('optiunea3');
    
    salvareIntrebare(intrebare,optiunea1,optiunea2,optiunea3);
   //console.log(intrebare);

   //Alerta
    document.querySelector('.alerta').style.display = 'block';
    setTimeout(function(){
        document.querySelector('.alerta').style.display = 'none';
    },3000)
    document.getElementById('formintrebare').reset();

}

function getValoare(id){
    return document.getElementById(id).value;//da valoarea gasita pe interfata
}

//Salvare intrebare
function salvareIntrebare(intrebare,optiunea1,optiunea2,optiunea3){
    var intrebareNoua = intrebariRef.push();
    intrebareNoua.set({
        intrebare: intrebare,
        optiunea1:optiunea1,
        optiunea2:optiunea2,
        optiunea3:optiunea3,
        vizibila: "false"
    })
}

//Afiseaza alerta la intrebarea selectata
function intrebarea()
{
    var ales = careRadio(); //parcurge butoanele radio
    var ref =  firebase.database().ref("intrebari").orderByChild("intrebare").equalTo(ales);
    ref.once("child_added", function(snapshot) {   
    snapshot.ref.update({vizibila:"true"})
    });

}

function stergeintrebarea()
{
    var ref =  firebase.database().ref("intrebari");//face un query
    ref.orderByChild("intrebare").on("child_added", function(snapshot) {
          //var d1 = snapshot.key();
          //var d2 = snapshot.val();
          snapshot.ref.update({vizibila:"false"})
          //console.log(dinoName + " was " + dinoData.height + " meters tall");
        });
    
    //function(snapshot) { snapshot.ref.update({vizibila:"false"})});

}

function careRadio() {//vede care checkbox e checkuit
    var radios = document.getElementsByName('radioGrup');
    for (var i=0, len=radios.length; i<len; i++) {
        if ( radios[i].checked ) { 
            val = radios[i].value; 
            break; 
        }
    }
    return val; 
}


