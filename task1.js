//  Celsius to Fahrenheit
function cToF (c){
// the formula take from website:https://contractorquotes.us/temperature-conversion-table/
  var f = (c * 9/5 ) + 32;
    return f  + "  Fahrenheit "
}
function performCalculation1(){
  var inputElement = document.getElementById("value1")
  var value = parseFloat(inputElement.value);
  var  paragraphElement = document.getElementById("result1")
  paragraphElement.innerHTML = cToF(value);
}



//  Celsius to Kelvin
function cToK (c){
  // the formula take from website:https://contractorquotes.us/temperature-conversion-table/
    k = c + 273.15
    return k + "  Kalvin"
}
function performCalculation2(){
  var inputElement = document.getElementById("value2")
  var value = parseFloat(inputElement.value);
  var  paragraphElement = document.getElementById("result2")
  paragraphElement.innerHTML = cToK(value);
}



// Fahrenheit to Celsius
function fToC (f){
  // the formula take from website:https://contractorquotes.us/temperature-conversion-table/
  c = (f - 32) * 5/9
    return c + "  Celsius"
}
function performCalculation3(){
  var inputElement = document.getElementById("value3")
  var value = parseFloat(inputElement.value);
  var  paragraphElement = document.getElementById("result3")
  paragraphElement.innerHTML = fToC(value);
}



// Fahrenheit to Kelvin
function fToK (f){
  // the formula take from website:https://contractorquotes.us/temperature-conversion-table/
  k = (f - 32) * 5/9 + 273.15
  return k + "  Kalvin"

}
function performCalculation4(){
  var inputElement = document.getElementById("value4")
  var value = parseFloat(inputElement.value);
  var  paragraphElement = document.getElementById("result4")
  paragraphElement.innerHTML = fToK(value);
}


//  Kelvin to Celsius
function kToC (k){
  // the formula take from website:https://contractorquotes.us/temperature-conversion-table/
  c = k - 273.15
  return c + "  Celsius"

}
function performCalculation5(){
  var inputElement = document.getElementById("value5")
  var value = parseFloat(inputElement.value);
  var  paragraphElement = document.getElementById("result5")
  paragraphElement.innerHTML = kToC(value);
}


//  Kelvin to Fahrenheit
function kToF (k){
  // the formula take from website:https://contractorquotes.us/temperature-conversion-table/
  f = (k - 273.15) * 9/5 + 32
    return f + "  Fahrenheit"

}
function performCalculation6(){
  var inputElement = document.getElementById("value6")
  var value = parseFloat(inputElement.value);
  var  paragraphElement = document.getElementById("result6")
  paragraphElement.innerHTML = kToF(value);
}
