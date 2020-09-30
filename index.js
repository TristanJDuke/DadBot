const Discord = require("discord.js");
const client = new Discord.Client();
const { token, prefix } = require("/config.json");
var version = "1.0.0";
client.on("ready", () => {
  console.log("Online");
});

client.on("message", (message) => {
  let args = message.content.substring(prefix.length).split(" ");

  switch (args[0]) {
    case "ping":
      message.channel.send("pong!");
      break;
    case "Im":
    case "I'm":
    case "im":
    case "i'm":
      message.channel.send("Hi " + args[1] + "I'm Dad!");
      break;
    case "info":
      if (args[1] === "version") {
        message.channel.send("Version " + version);
      } else {
        message.channel.send("Invalid Args");
      }
      break;
  }
});

client.login(token);
