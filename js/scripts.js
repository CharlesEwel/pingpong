$(document).ready(function() {
  $("form#pingpong").submit(function(event) {
    event.preventDefault();
    var numberInput = parseInt($("input#numberinput").val());
    var pingPongOutput = numberToPingPong(numberInput);
    console.log(pingPongOutput)
    $("#pingpongresult").append("<li>"+pingPongOutput+"</li>");
  });
});

var numberToPingPong = function(num) {
  var outputNum=[];
  for(i=1; i<=num; i++){
    if(i%3===0){
      outputNum.push("ping");
    } else {
      outputNum.push(i)
    }
  }
  return outputNum
}
