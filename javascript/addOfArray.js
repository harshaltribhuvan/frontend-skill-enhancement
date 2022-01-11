var array = [4, 6, 8, 5, 2, 3];
function addNumbers() {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  return sum;
}
console.log(addNumbers());
