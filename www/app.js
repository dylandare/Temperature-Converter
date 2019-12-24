function Convert() {
  var x;
  x = (document.getElementById("Celsius").value * 9) / 5 + 32;
  ons.notification.alert("The temperature in Farenheit is " + x);
}

function Clear() {
  document.getElementById("Celsius").value = "";
}
