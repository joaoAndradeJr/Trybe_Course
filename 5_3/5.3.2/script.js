let result = document.getElementById('solution');

let btnSquare = document.getElementById('square-button');
btnSquare.addEventListener('click', function() {
  let number = document.getElementById('square-input').value;
  result.innerHTML = number * number;
});

let btnHalfOf = document.getElementById('half-button');
btnHalfOf.addEventListener('click', function() {
  let number = document.getElementById('half-input').value;
  result.innerHTML = number / 2;
});

let btnpercenOf = document.getElementById('percent-button');
btnpercenOf.addEventListener('click', function() {
  let number1 = document.getElementById('percent1-input').value;
  let number2 = document.getElementById('percent2-input').value;
  let percent = (number1 / number2) * 100;
  result.innerHTML = percent;
});

let btnAreaOfCircle = document.getElementById('area-button');
btnAreaOfCircle.addEventListener('click', function() {
  let radius = document.getElementById('area-input').value;
  let area = Math.PI * (radius * radius);
  result.innerHTML = area.toFixed(2);
});

function doCrazyStuff(num) {
  var half    = halfOf(num);
  var squared = squareNumber(half);
  var area    = areaOfCircle(squared);
  var result  = percentOf(squared, area);
}
