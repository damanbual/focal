
const raisinAlarmArray = function(cookie) {
  for (let i = 0; i < cookie.length; i++) {
    if (cookie[i] === "🍇") {
      return "Raisin alert!";
    }
  }
  return "All good!";
};



console.log(raisinAlarmArray(["🍫", "🍫", "🍇", "🍫"]));
console.log(raisinAlarmArray(["🍫", "🍇", "🍫", "🍫", "🍇"]));
console.log(raisinAlarmArray(["🍫", "🍫", "🍫"]));