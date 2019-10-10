function check() {
  var value = parseInt(document.getElementById("number").value);
  if (value >= 0 && value < 65) {
    document.getElementById("value1").innerHTML = "LEVEL 1 : EXCELLENT ";
    document.getElementById("value2").innerHTML = "HYGIENIC RATING : NO OBJECTIONS ";
    document.getElementById("value3").innerHTML = "RECOMMENDATION : TARGET VALUE ";
    document.getElementById("value4").innerHTML = "EXPOSURE LIMIT : NO LIMIT ";
  }
  else if (value >= 65 && value < 220) {
    document.getElementById("value1").innerHTML = "LEVEL 2 : GOOD ";
    document.getElementById("value2").innerHTML = "HYGIENIC RATING : NO RELEVANT OBJECTIONS ";
    document.getElementById("value3").innerHTML = "RECOMMENDATION : VENTILATION / AIRING RECOMMENDED ";
    document.getElementById("value4").innerHTML = "EXPOSURE LIMIT : NO LIMIT ";
  }
  else if (value >= 220 && value < 660){
    document.getElementById("value1").innerHTML = "LEVEL 3 : MODERATE ";
    document.getElementById("value2").innerHTML = "HYGIENIC RATING : SOME OBJECTIONS ";
    document.getElementById("value3").innerHTML = "RECOMMENDATION : INTENSIFIED VENTILATION / AIRING RECOMMENDED SEARCH FOR SOURCES ";
    document.getElementById("value4").innerHTML = "EXPOSURE LIMIT : < 12 MONTHS ";
  }
  else if (value >= 660 && value < 2200) {
    document.getElementById("value1").innerHTML =  "HYGIENIC RATING : MAJOR OBJECTIONS ";
    document.getElementById("value2").innerHTML = "HYGIENIC RATING : NO RELEVANT OBJECTIONS ";
    document.getElementById("value3").innerHTML = "RECOMMENDATION : INTENSIFIED VENTILATION / AIRING NECESSARY SEARCH FOR SOURCES ";
    document.getElementById("value4").innerHTML = "EXPOSURE LIMIT : < 1 MONTH ";
  }
  else if (value >= 2200 && value <= 5500) {
  document.getElementById("value1").innerHTML = "LEVEL 5 : UNHEALTHY ";
  document.getElementById("value2").innerHTML = "HYGIENIC RATING : SITUATION NOT ACCEPTABLE ";
  document.getElementById("value3").innerHTML = "RECOMMENDATION : USE ONLY IF UNAVOIDABLE / INTENSE VENTILATION NECESSARY ";
  document.getElementById("value4").innerHTML = "EXPOSURE LIMIT : HOURS ";
  }
}
