const  POWER_ARR = [4, 5, 2, 6, 3, 7, 8, 9, 6, 5, 2];
// get this formula from :https://stackoverflow.com/questions/45309447/calculating-median-javascript
function getMedian(values){
  if(values.length ===0) return 0;

  values.sort(function(a,b){
    return a-b;
  });

  var half = Math.floor(values.length / 2);

  if (values.length % 2)
    return values[half];

  return (values[half - 1] + values[half]) / 2.0;
}
var  medianElement = document.getElementById("median");
medianElement.innerHTML =getMedian(POWER_ARR);
