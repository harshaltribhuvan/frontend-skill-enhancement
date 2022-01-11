var input = "This is Great Platform";
var output = input
  .split(" ")
  .map((s) => s.split("").reverse().join(""))
  .join(" ");

console.log(output);
