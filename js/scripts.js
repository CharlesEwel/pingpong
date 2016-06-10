$(document).ready(function() {
  $("form#pingpong").submit(function(event) {
    event.preventDefault();
    $("ul#pingpongresult li").remove();
    var numberInput = parseInt($("input#numberinput").val());
    var pingPongOutput = numberToPingPong(numberInput);
    for(i=0; i<pingPongOutput.length; i++){
      $("#pingpongresult").append("<li>"+pingPongOutput[i]+"</li>");
    }
  });
});

var numberToPingPong = function(num) {
  var outputNum=[];
  for(i=1; i<=num; i++){
    var prime = true;
    for(j=2; j<=Math.ceil(Math.sqrt(i)); j++){
      if(i%j===0){
        prime=false;
      }
    }
    if(i%15===0){
      outputNum.push("ping-pong");
    } else if(i%3===0){
      outputNum.push("ping");
    } else if(i%5===0){
      outputNum.push("pong");
    } else if(i!=1&&prime===true){
      outputNum.push("prime");
    } else {
      outputNum.push(i)
    }
  }
  console.log(outputNum)
  return outputNum;
}
