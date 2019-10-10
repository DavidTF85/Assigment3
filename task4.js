const  Pressure_arr = [80, 90, 100, 150, 120, 110, 160, 110, 100];


function getMean() {
   var sumNumber = 0
   for (var i = 0; i < Pressure_arr.length; i++) {
       var number = Pressure_arr[i];
       sumNumber += number;
   }
   return sumNumber / Pressure_arr.length;
}

var  meanElement = document.getElementById("mean");
meanElement.innerHTML =getMean();
