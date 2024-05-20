function init(){
x = parseFloat(document.getElementById('x').value);
var count = 0
x3(x,count)
}
function divide(x, count) {
  x = x/2
  x3(x,count)
}
function multiply(x,count) {
  x = 3*x +1
  x3(x,count)
}
function x3(x, count){
  if (x == 1) {
    document.getElementById('output').innerHTML = 'Final number = '+x
    document.getElementById('count').innerHTML = 'Steps taken = '+ count
  } else if (x%2 == 0) {
    count = count+1
    divide(x,count)
  } else if (x%2 !== 0) {
    count = count+1
    multiply(x,count)
  }
}