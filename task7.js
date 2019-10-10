function check() {
  var value = parseInt(document.getElementById("number").value);
  if (value >= 400 && value < 700) {
    return document.getElementById("value").innerHTML = "The Air Quality is : EXCELLENT";
  }
  else if (value >= 700 && value < 900) {
    return document.getElementById("value").innerHTML = "The Air Quality is : GOOD";
  }
  else if (value >= 900 && value < 1100){
    return document.getElementById("value").innerHTML = "The Air Quality is : FAIR";
  }
  else if (value >= 1100 && value < 1600) {
    return document.getElementById("value").innerHTML = "The Air Quality is : MEDIOCRE";
  }
  else if (value >= 1600 && value <= 2100) {
    return document.getElementById("value").innerHTML = "The Air Quality is : BAD";
  }
}
