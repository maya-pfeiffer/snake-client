const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput)
  return stdin;
};

const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit();
  };
  if (key === '\u001B[A') {
    console.log('Up');
  };
  if (key === '\u001B[B') {
    console.log('Down');
  };
  if (key === '\u001B[C') {
    console.log('Right');
  };
  if (key === '\u001B[D') {
    console.log('Left');
  };
}

module.exports = {
  setupInput
};