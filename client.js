const net = require("net");
const connect = function() {
  const conn = net.createConnection({
    host: "localhost",
    port:50541
  });
  conn.setEncoding("utf8");

  conn.on("connect", function() {
    console.log("Successfully connected to game server")
  })

  const name = "MIP";
  conn.write(`Name: ${name}`);

  conn.on("data", function(data) {
    console.log("Received data: ", data);
  })

  return conn;
};

module.exports = {
  connect
};