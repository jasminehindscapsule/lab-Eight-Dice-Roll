
function rollDice(sides) {
  const result = Math.floor(Math.random() * sides) + 1;
  document.getElementById("result").innerText =
    `You rolled a ${result} on a D${sides}`;
}