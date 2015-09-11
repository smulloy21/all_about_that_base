var changeBase = function(number, base) {
  var rixits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', "M", 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '!', '?'];
  var rixit; // like 'digit', only in some non-decimal radix
  var residual = Math.floor(number);
  var result = '';
  while (true) {
      rixit = residual % base;
      result = rixits[rixit] + result;
      residual = Math.floor(residual / base);

      if (residual == 0)
          break;
      }
  return result;
};

$(document).ready(function() {
  $("form#changeBase").submit(function(event){
    $("#decimalError").hide();
    $("#baseError").hide();
    $("#result").hide();
    var decimal = parseInt($("input#decimal").val()) || 0;
    var base = parseInt($("input#base").val()) || 0;

    if (decimal === 0 || base === 0) {
      $("#decimalError").show();
    } else if (base > 64){
      $("#baseError").show();
    } else {
      var result = changeBase(decimal, base);
      $(".decimal").text(decimal);
      $(".base").text(base);
      $(".result").text(result);

      $("#result").show();
    }

    event.preventDefault();
  });
});
