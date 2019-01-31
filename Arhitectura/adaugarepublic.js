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
intrebariRef.on('value',una,errDate);

//Asculta formularul de adaugare intrebare
var evform = document.getElementById('formintrebare')

if(evform){
    evform.addEventListener('submit',submitForm);
}


function una(data)
{
    var toate = data.val();
    var keys = Object.keys(toate);
    console.log(keys);
    for(var i=0; i<keys.length; i++)
    {
        var k = keys[i];
        var ti = toate[k].intrebare;
        var opt1 = toate[k].optiunea1;
        var opt2 = toate[k].optiunea2;
        var opt3 = toate[k].optiunea3;
        var viz = toate[k].vizibila;

        const la = document.createElement('span');
        la.id = ti;
        if(viz!="true") 
        {
        la.className='olcl';
        }
        else la.className='olclv';

        la.innerHTML = ti+"<br>";  
        document.getElementById("osinguraintrebare").appendChild(la); 
        const li1 = document.createElement('input');        
        li1.id =ti;
        if(viz!="true") 
        {
        li1.className='olcl';
        }
        else li1.className='olclv';
        li1.type = 'radio';
        li1.name = 'radioGrup'+i;        
        li1.value =  opt1;
       
        document.getElementById("osinguraintrebare").appendChild(li1);                 
        const la1 = document.createElement('span');
        la1.id = ti;
        if(viz!="true") 
        {
            la1.className ="olcl";
        
        }
        else la1.className='olclv';        
        la1.innerHTML = opt1;  
        document.getElementById("osinguraintrebare").appendChild(la1);
        
        const li2 = document.createElement('input');
        li2.id =ti;
        if(viz!="true") 
        {
            li2.className ="olcl";
        
        }
        else li2.className='olclv';
        li2.type = 'radio';
        li2.name = 'radioGrup'+i;        
        li2.value =  opt2;
        document.getElementById("osinguraintrebare").appendChild(li2);                 
        const la2 = document.createElement('span');
        la2.id = ti;
        if(viz!="true") 
        {
            la2.className ="olcl";
        
        }
        else la2.className ="olclv";
        la2.innerHTML = opt2; 
        document.getElementById("osinguraintrebare").appendChild(la2);

        const li3 = document.createElement('input');
        li3.id =ti;
        if(viz!="true") 
        {
            li3.className ="olcl";
        
        }
        else li3.className='olclv';
        li3.type = 'radio';
        li3.name = 'radioGrup'+i;        
        li3.value =  opt3;
        document.getElementById("osinguraintrebare").appendChild(li3);                 
        const la3 = document.createElement('span');
        la3.id = ti;
        if(viz!="true") 
        {
            la3.className ="olcl";
        
        }
        else la3.className='olclv';
        la3.innerHTML = opt3+"<br><br>";  
        document.getElementById("osinguraintrebare").appendChild(la3);

        
    }    
    for(var i=0; i<keys.length*7; i++)//numele,val,radio_button
    {
        document.getElementsByClassName('olcl')[i].style="display:none";

    }
    document.getElementById('raspunsales').style="display:none";
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
    document.querySelector('.alerta').style.display = 'block';
    setTimeout(function(){
        document.querySelector('.alerta').style.display = 'none';
    },3000)
    document.getElementById('formintrebare').reset();

}

function getValoare(id){
    return document.getElementById(id).value;
}

//Salvare intrebare
function salvareIntrebare(intrebare,optiunea1,optiunea2,optiunea3){
    var intrebareNoua = intrebariRef.push();
    intrebareNoua.set({
        intrebare: intrebare,
        optiunea1:optiunea1,
        optiunea2:optiunea2,
        optiunea3:optiunea3
    })
}

//Afiseaza alerta la intrebarea selectata
function intrebarea()
{

    var ales = careRadio();    
     //Aici as seta ce intrebare este de afisat   
    alert(ales);
    var ointrebare = firebase.database().ref('intrebari');
    ointrebare.on('value',una,errDate);
}

function careRadio() {
    var radios = document.getElementsByName('radioGrup');
    for (var i=0, len=radios.length; i<len; i++) {
        if ( radios[i].checked ) { 
            val = radios[i].value; 
            break; 
        }
    }
    return val; 
}

