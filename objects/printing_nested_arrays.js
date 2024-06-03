
const printItems = function(array) {
  array.forEach((item) => {
    if (Array.isArray(item)) {
      printItems(item); // Recursive call for nested arrays
    } else {
      console.log(item); // Print item directly
    }
  });
};

const array = ["A", [["B", ["C"]], [[["D"]], "E"]]];
printItems(array);