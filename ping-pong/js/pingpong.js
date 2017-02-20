




function Calculator(skinName) {
  this.skin = skinName;
}
Calculator.prototype.pingPong = function(number) {
  var output = [];
  for (var index = 1; index <= number; index++) {
    if (i % 15 === 0) {
      numbersToBePingponged.push("ping-pong");
    } else if (i % 3 === 0) {
      numbersToBePingponged.push("ping");
    } else if (i % 5 === 0) {
      numbersToBePingponged.push("pong");
    } else  {
      numbersToBePingponged.push(index);
    }
  }
  return numbersToBePingponged;
}
exports.calculatorModule = Calculator;




