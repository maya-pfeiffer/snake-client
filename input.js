let connection;

const setupInput = function (conn) {
  connection = conn;
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
  if (key === 'w') {
    connection.write('Move: up');
  };
  if (key === 's') {
    connection.write('Move: down');
  };
  if (key === 'd') {
    connection.write('Move: right');
  };
  if (key === 'a') {
    connection.write('Move: left');
  };
  if (key === "c") {
    sendServerMessage1("Hi everybody!");
  }
  if (key === "m") {
    sendServerMessage1("sssnekin' time!");
  }
  if (key === " ") {
    sendServerMessage1("Sneks are kool");
  }
  };

const sendServerMessage1 = function(message) {
  connection.write(`Say: ${message}`)
};
const sendServerMessage2 = function(message) {
  connection.write(`Say: ${message}`)
};
const sendServerMessage3 = function(message) {
  connection.write(`Say: ${message}`)
};

module.exports = {
  setupInput
};