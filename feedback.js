

// am inteles/ nu inteles post in bd

var feedback = firebase.database().ref('Feedback');
var understoodScore;
var notUnderstoodScore;

//Asculta formularul de adaugare intrebare
document.getElementsByClassName('understood').addEventListener('submit',submitFeed);

function submitFeed(e){
    e.preventDefault();
   
    document.getElementById('understood').onclick = function() {
        understoodScore = 1;

    }
     document.getElementById('notunderstood').onclick = function() {
        notUnderstoodScore = 1;

     }

    salvareFeed(understoodScore,notUnderstoodScore);
   console.log(understoodScore);
   console.log(notUnderstoodScore);

}


//Salvare 
function salvareFeed(raspuns1,raspuns2){

    var newFeed = feedback.push();
    newAsk.set({
        inteles: understoodScore,
        neinteles: notUnderstoodScore
    })

}
