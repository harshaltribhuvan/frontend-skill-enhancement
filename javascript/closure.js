function makeFunc() {
  let name = "harshal";
  function displayName() {
    console.log(name);
  }
  return displayName;
}
var myFunc = makeFunc();
myFunc();
