const  Temperature_arr = [21, 23, 26, 22, 25, 20, 19, 23];

function getMin(){
  return Math.min(...Temperature_arr)
};
function getMax(){
  return Math.max(...Temperature_arr)
}

var  minElement = document.getElementById("The Mimimum number is:");
minElement.innerHTML =getMin();

var  maxElement = document.getElementById("The Max number is:");
maxElement.innerHTML =getMax();
