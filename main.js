//jquery document ready function
// $(document).ready(function(){

    //js veryfication console log
    //console.log('start vars');
    
    const afterChoice = $("#content1")[0];
    const rock = $("#rockBtn")[0];
    const paper = $("#paperBtn")[0];
    const scissors = $("#scissorsBtn")[0];

    const choice = $("#content2")[0];
    const rockLose = $("#rockLose")[0];
    const paperLose = $("#paperLose")[0];
    const scissorLose = $("#scissorLose")[0];
    
    const rockWins = $("#rockWins")[0];
    const paperWins = $("#paperWins")[0];
    const scissorWins = $("#scissorWins")[0];

    const equal = $("#equal")[0];
    const lgreater = $("#lgreater")[0];
    const lless = $("#lless")[0];


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
    if(a==1){rockWins.classList.remove('hidden');}
    else if(a==2){paperWins.classList.remove('hidden');}
    else{scissorWins.classList.remove('hidden');}

    if(a==b)
    {
        equal.classList.remove('hidden');
        choice.classList.remove('hidden');
        if(b==3){scissorLose.classList.remove('hidden');}
        else if(b==2){paperLose.classList.remove('hidden');}
        else{rockLose.classList.remove('hidden');}
        result = " draw ";
        //console.log(result);

        
        
    }
    else if( a>b && a!=1 || b-a>a)
    {
        lgreater.classList.remove('hidden');
        choice.classList.remove('hidden');
        if(b==3){scissorLose.classList.remove('hidden');}
        else if(b==2){paperLose.classList.remove('hidden');}
        else{rockLose.classList.remove('hidden');}
        result = " win ";
        //console.log(result);
    }
    else{
        lless.classList.remove('hidden');
        choice.classList.remove('hidden');
        if(b==3){scissorLose.classList.remove('hidden');}
        else if(b==2){paperLose.classList.remove('hidden');}
        else{rockLose.classList.remove('hidden');}
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

    rockWins.classList.add('hidden');
    paperWins.classList.add('hidden');
    scissorWins.classList.add('hidden');

    equal.classList.add('hidden');
    lgreater.classList.add('hidden');
    lless.classList.add('hidden');

    scissorLose.classList.add('hidden');
    rockLose.classList.add('hidden');
    paperLose.classList.add('hidden');
    
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
// rockLose.classList.remove('hidden');
// paperLose.classList.remove('hidden');
// scissorsWins.classList.remove('hidden');

// hide
// rockLose.classList.add('hidden');
// paperLose.classList.add('hidden');
// scissorsWins.classList.add('hidden');




//js veryfication console log
//console.log('Script loaded correctly');

// });
