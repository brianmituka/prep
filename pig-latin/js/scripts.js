var latinize = function(word){
  if (word === "a"||"e"||"o"||"i"||"u") {
    return word+"ay";
  };
};

$(document).ready(function(){
  $("form#vowel").submit(function(event){
    event.preventDefault();
    var word = $("input#word").val();
    var output  = latinize(word);
    $(".output").text(output);
  });
});
