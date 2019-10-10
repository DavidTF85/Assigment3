// we get function from:https://jonlabelle.com/snippets/view/javascript/calculate-mean-median-mode-and-range-in-javascript
function mode(numbers) {

    var modes = [], count = [], i, number, maxIndex = 0;

    for (i = 0; i < numbers.length; i += 1) {
        number = numbers[i];
        count[number] = (count[number] || 0) + 1;
        if (count[number] > maxIndex) {
            maxIndex = count[number];
        }
    }
    for (i in count)
        if (count.hasOwnProperty(i)) {
            if (count[i] === maxIndex) {
                modes.push(Number(i));
            }
        }
    return modes;
}


// we get function from:https://jonlabelle.com/snippets/view/javascript/calculate-mean-median-mode-and-range-in-javascript
function range(numbers) {
    numbers.sort();
    return [numbers[0], numbers[numbers.length - 1]];
}




// Standard deviation
// get formula from :https://dustinpfister.github.io/2018/02/20/statistics-standard-deviation/
function SD(data) {
    let m = getMean(data);
    return Math.sqrt(data.reduce(function (sq, n) {
            return sq + Math.pow(n - m, 2);
        }, 0) / (data.length - 1));
};

function getMean(){
  var sumNumber = 0
  for (var i =0; i < DATA.length; i = i + 1){
    var number = DATA[i];
    sumNumber = sumNumber + number;
  }
  return sumNumber/DATA.length
}

 function getVariance(DATA) {
  var mean = arr.getMean(array);
  return arr.mean(array.map(function(num) {
    return Math.pow(num - mean, 2);
  }));
}










const  DATA = [0,9,9,9,8,7,6,5,4];
var element = document.getElementById("range");
element.innerHTML =range(DATA);
var element = document.getElementById("mode");
element.innerHTML = mode(DATA);
var element = document.getElementById("Standard deviation");
element.innerHTML =SD(DATA);
var element = document.getElementById("Mean");
element.innerHTML =SD(DATA);
var element = document.getElementById("variance");
element.innerHTML = getVariance(DATA);
