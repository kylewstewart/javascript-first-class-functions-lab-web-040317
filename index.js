function countdown(callback) {
  window.setTimeout(callback, 2000);
}

var doubler = createMultiplier(2)
var tripler = createMultiplier(3)

function createMultiplier(interval) {
  return function (num) {
    return interval * num
  }
}

function multiplier(num1, num2) {
  return num1 * num2;
}

var doublerWithBind = multiplier.bind(null, 2)
var triplerWithBind = multiplier.bind(null, 3)


function createMultiplierBonus() {

}
