function range (start, end, step) {
  var num = []

for (var i = start; i <= end; i = i + step) {
  num.push (i)
  }
  return num;
}
console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));










function range (start, end, step) {
  var num = []

  while(start <= (end)) {
    num.push (start);
    start = start + step;
    break;
  }

  return num;
}
console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));

