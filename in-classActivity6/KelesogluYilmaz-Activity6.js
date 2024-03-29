var count=0;
var level;

function hover(){
    var myTimeout = setTimeout(change, checkLevel());
}

function change(){
    document.getElementById('button').style.marginLeft = Math.random()*300+"px";
    document.getElementById('button').style.marginTop = Math.random()*300+"px";
}

function checkLevel(){
    if(count<3){return 500;}
    if(3<=count&&count<6){return 400;}
    if(6<=count&&count<9){return 300;}
    if(9<=count&&count<12){return 200;}
    if(12<=count&&count<15){return 100;}
    if(15<=count){return 0;}   
}

function clicked(){
    console.log(count);
    count++;
    if(count==3){
        alert('Level 2! Lets go!');
    }
    if(count==6){
        alert('Level 3! Lets go!');
    }
    if(count==9){
        alert('Level 4! Lets go!');
    }
    if(count==12){
        alert('Level 5! Lets go!');
    }
    if(count==15){
        alert('Level 6! Lets go!');
    }
}