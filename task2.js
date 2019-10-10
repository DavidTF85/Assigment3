function getHumidityCondition(humidityValue){

  if(humidityValue < 30){
    return "Dry"
  }else if (humidityValue > 60){
    return "High Humidity"
  }else {
    return"OK"
  }
}


function performCalculation(){
  var inputElement = document.getElementById("value")
  var value = parseFloat(inputElement.value);
  var  paragraphElement = document.getElementById("result")
  paragraphElement.innerHTML = getHumidityCondition(value);
}
