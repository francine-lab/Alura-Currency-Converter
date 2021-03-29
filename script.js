var amount = document.getElementById("amount").addEventListener("keyup", function() {
  var value1 = document.getElementById("amount").value;
  var value2 = parseFloat(value1);
  document.getElementById("result").innerHTML = value1 + " euros are equal " + (value2 *= 6.5).toFixed(2) + " brazilian real";
});