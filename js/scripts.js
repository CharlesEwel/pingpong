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
    if(i%15===0){
      outputNum.push("pingpong");
    } else if(i%3===0){
      outputNum.push("ping");
    } else if(i%5===0){
      outputNum.push("pong");
    } else {
      outputNum.push(i)
    }
  }
  return outputNum;
}
