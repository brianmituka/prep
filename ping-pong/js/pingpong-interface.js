
$(document).ready(function() {
  $('form#pongpi').submit(function(event) {
    event.preventDefault();
    var number = $('input#number').val();
    var simpleCalculator = new Calculator("hot pink");
    var  = simpleCalculator.pingPong(number);
    numbersToBePingponged.forEach(function(number) {
      $('#output').append("<li>" + number + "</li>");
    });
  });
});
