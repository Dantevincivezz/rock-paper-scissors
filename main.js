//jquery document ready function
// $(document).ready(function(){

    //js veryfication console log
    //console.log('start vars');
    
    const afterChoice = $("#content1")[0];
    const rock = $("#rockBtn")[0];
    const paper = $("#paperBtn")[0];
    const scissors = $("#scissorsBtn")[0];

    const choice = $("#content2")[0];
    const rockWins = $("#rockWins")[0];
    const paperWins = $("#paperWins")[0];
    const scissorWins = $("#scissorWins")[0];


    const pickWeapon = 'Pick your weapon!'
    let resultText = $("#resultText")[0];
    //js veryfication console log
    //console.log('end vars');


function roll(i){
    //js veryfication console log
    //console.log("roll");

    var result = '';
    var a = i; 
    var b = Math.floor(Math.random() * 3+1);

    afterChoice.classList.add('hidden');
    choice.classList.remove('hidden');

    //alghotirm veryfication console log
    //console.log(a);
    //console.log(b);

    if(a==b)
    {
        choice.classList.remove('hidden');
        if(b==3){scissorWins.classList.remove('hidden');}
        else if(b==2){paperWins.classList.remove('hidden');}
        else{rockWins.classList.remove('hidden');}
        result = " lose ";
        //console.log(result);
    }
    else if( a>b && a!=1 || b-a>a)
    {
        choice.classList.remove('hidden');
        if(b==3){scissorWins.classList.remove('hidden');}
        else if(b==2){paperWins.classList.remove('hidden');}
        else{rockWins.classList.remove('hidden');}
        result = " win ";
        //console.log(result);
    }
    else{
        choice.classList.remove('hidden');
        if(b==3){scissorWins.classList.remove('hidden');}
        else if(b==2){paperWins.classList.remove('hidden');}
        else{rockWins.classList.remove('hidden');}
        result = " lose " ;
        //console.log(result);
    }
    
    resultText = ('You ' + result +'!');
    //console.log(resultText)
    document.getElementById('resultText').innerText = resultText;


}
function reset(){

    //js veryfication console log
    //console.log('reset');



    afterChoice.classList.remove('hidden');

    
    if(scissorWins){scissorWins.classList.add('hidden');}
    if(rockWins){rockWins.classList.add('hidden');}
    if(paperWins){paperWins.classList.add('hidden');}
    choice.classList.add('hidden');
    document.getElementById('resultText').innerText = pickWeapon;
}

// //hide choice buttons
// afterChoice.classList.add('hidden');

// //show choice buttons
// afterChoice.classList.remove('hidden');

// //show result box with one from belowe
// choice.classList.remove('hidden');
// choice.classList.add('hidden');

// //show result icon
// rockWins.classList.remove('hidden');
// paperWins.classList.remove('hidden');
// scissorsWins.classList.remove('hidden');

// hide
// rockWins.classList.add('hidden');
// paperWins.classList.add('hidden');
// scissorsWins.classList.add('hidden');




//js veryfication console log
//console.log('Script loaded correctly');

// });
