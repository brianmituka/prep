$(document).ready(function(){
  $("form#count").submit(function(event){
    event.preventDefault();
    if ($("#countto").val() == "" ||$("#countby").val() == ""){
      alert("enter a value");
    }
    else{
      var countTo = parseInt($("#countto").val());
      var countBy = parseInt($("#countby").val());
      var total = [];
      for (var currentNumber = countBy; currentNumber <= countTo ; currentNumber += countBy) {
        total.push(currentNumber);
      };
      console.log(total);
    };

  });
});
