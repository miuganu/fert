var questionRef = firebase.database().ref('topics');
questionRef.on('value',getIntrebari,errDate);

//Asculta formularul de adaugare intrebare
var evalform = document.getElementById('ask-form')

if(evalform){
    evalform.addEventListener('submit',submitForm);
}


function getIntrebari(data)
{
    var toate = data.val();
    var keys = Object.keys(toate);
    console.log(keys);
    for(var i=0; i<keys.length; i++)
    {
        var k = keys[i];
        var ti = toate[k].text;
        console.log(ti);

        
        const li = document.createElement('button');
        //console.log(li);
        li.textContent =  ti;
        /*
        li.addEventListener('submit',(e)=>{
            e.preventDefault();

            var votIntrebare = firebase.database().ref('topics');
            var nr = 
            var newVote = votIntrebare.push();
            newVote.set({
                text: li.intrebare,
                voturi: nr
            })
        })
        */
        document.getElementById("prima").appendChild(li)
        
    }
}

function errDate(err)
{
    console.log('Eroare');
    console.log(err);

}