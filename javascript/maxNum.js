let arr = [4, 5, 7, 4, 3, 2];
let result = arr.reduce(function (max, curr) {
  if (max < curr) {
    max = curr;
  }
  return max;
}, 0);
console.log(result);
