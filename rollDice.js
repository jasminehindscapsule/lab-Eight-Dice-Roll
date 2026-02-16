// this function returns the a randomised number between 1 and the number of sides on the die
function rollDice(sides) {
}

// Test 1
if (rollDice(4) > 4) {
throw new Error('Test failed');
}

// Test 2
if (rollDice(6) > 6) {
throw new Error('Test failed');
}

// Test 3
if (rollDice(8) > 8) {
throw new Error('Test failed');
}

// Test 4
if (rollDice(10) > 10) {
throw new Error('Test failed');
}

// Test 5
if (rollDice(12) > 12) {
throw new Error('Test failed');
}

// Test 6
if (rollDice(20) > 20) {
throw new Error('Test failed');
}

function rollDice(sides) {
  const result = Math.floor(Math.random() * sides) + 1;
  document.getElementById("result").innerText =
  `You rolled a ${result} on a D${sides}`; 
}

console.log('All tests passed.'); // Comment out line 37 and 38 if you want to run unit tests