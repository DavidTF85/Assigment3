// we get function from:https://jonlabelle.com/snippets/view/javascript/calculate-mean-median-mode-and-range-in-javascript
function mode(numbers) {
    // as result can be bimodal or multi-modal,
    // the returned result is provided as an array
    // mode of [3, 5, 4, 4, 1, 1, 2, 3] = [1, 3, 4]
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




function getMean() {
   var sumNumber = 0
   for (var i = 0; i < DATA.length; i++) {
       var number = DATA[i];
       sumNumber += number;
   }
   return sumNumber / DATA.length;
}


// Standard deviation
// get formula from :https://dustinpfister.github.io/2018/02/20/statistics-standard-deviation/
function SD(data) {
    let m = getMean(data);
    return Math.sqrt(data.reduce(function (sq, n) {
            return sq + Math.pow(n - m, 2);
        }, 0) / (data.length - 1));
};









function variance() {

    }





const  DATA = [1,2,2,3,4];
var element = document.getElementById("range");
element.innerHTML =range(DATA);
var element = document.getElementById("mode");
element.innerHTML = mode(DATA);
var element = document.getElementById("Standard deviation");
element.innerHTML =SD(DATA);
