var score = [];
var totalScore = 0;
var currentScore = 0;
 function roll(){
    var randomNumber=parseInt(Math.floor(Math.random() * 6 + 1))
   document.getElementById("player1").innerHTML = randomNumber;
    if(randomNumber!=1){
      currentScore+=randomNumber;
    }
    else{
      currentScore=0;
      score=0;
    }
};
function hold(){

  score.push(currentScore);
  alert(score);
  alert("hi");
  // score.forEach(function(sum){
  //   totalScore+=sum;
  // });

  totalScore.push(score);
  alert(totalScore);

  for(var i=0; i<=score.length; i++){
    totalScore+=score[i];
  }

  alert(totalScore);
}


var sco = [];
var totSco = 0;
var currSco = 0;
 function llor(){
    var randomNumber=parseInt(Math.floor(Math.random() * 6 + 1))
   document.getElementById("player2").innerHTML = randomNumber;
    if(randomNumber!=1){
      currSco+=randomNumber;
    }
    else{
      currSco=0;
      sco=0;
    }
};
function dloh(){

  sco.push(currSco);
  alert(sco);
  alert("hi");
  // score.forEach(function(sum){
  //   totalScore+=sum;
  // });

  totSco.push(sco);
  alert(totSco);

  for(var i=0; i<=sco.length; i++){
    totSco+=sco[i];
  }

  alert(totSco);
}
