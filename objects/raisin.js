
const raisinAlarm = function(cookie) {
  for (let i = 0; i < cookie.length; i++) {
    if (cookie[i] === "🍇") {
      return "Raisin alert!";
    }
  }
  return "All good!";
};

const raisinAlarmArray = function (cookies) {
  // Put your solution here
  const result = [];
  for (const biscuit of cookies) {
    if (Array.isArray(biscuit)) {
      for (const biscuits of biscuit) {
        if (biscuits === "🍇") {
          result.push("Raisin alert!");
        } else {
          result.push("All good!");
        }
      }
    }
  }
  return result;
};



// Test Code
console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
console.log(raisinAlarm(["🍫", "🍫", "🍫"]));

console.log("------");

console.log(
  raisinAlarmArray([
    ["🍫", "🍫", "🍇", "🍫"],
    ["🍫", "🍇", "🍫", "🍫", "🍇"],
    ["🍫", "🍫", "🍫"],
  ])
);

