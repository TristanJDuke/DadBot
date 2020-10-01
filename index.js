const Discord = require("discord.js");
const client = new Discord.Client();
const { token, prefix } = require("./config.json");
var version = "1.0.0";
var jokes = [
  '"Dad, did you get a haircut?" "No, I got them all cut!"',
  '"My wife is really mad at the fact that I have no sense of direction. So I packed up my stuff and right!"',
  '"How do you get a squirrel to like you? Act like a nut."',
  "\"Why don't eggs tell jokes ? They'd crack each other up.\"",
  "\"I don't trust stairs.They're always up to something.\"",
  '"What do you call someone with no body and no nose? Nobody knows."',
  '"Did you hear the rumor about butter? Well, I\'m not going to spread it!"',
  '"Why couldn\'t the bicycle stand up by itself? It was two tired."',
  '"Dad, can you put my shoes on?" "No, I don\'t think they\'ll fit me."',
  '"Why can\'t a nose be 12 inches long? Because then it would be a foot."',
  '"This graveyard looks overcrowded. People must be dying to get in."',
  '"Dad, can you put the cat out?" "I didn\'t know it was on fire."',
  '"What time did the man go to the dentist? Tooth hurt-y."',
  '"How many tickles does it take to make an octopus laugh? Ten tickles."',
  '"What concert costs just 45 cents? 50 Cent featuring Nickelback!"',
  '"How do you make a tissue dance? You put a little boogie in it."',
  '"Why did the math book look so sad? Because of all of its problems!"',
  '"What do you call cheese that isn\'t yours? Nacho cheese."',
  '"What kind of shoes do ninjas wear? Sneakers!"',
  '"How does a penguin build its house? Igloos it together."',
  '"It\'s inappropriate to make a "dad joke" if you\'re not a dad. It\'s a faux Pa."',
  '"Did you hear about the circus fire? It was in tents."',
  '"Can February March? No, but April May!"',
  '"How do lawyers say goodbye? We\'ll be suing ya!"',
  '"Wanna hear a joke about paper? Never mind—it\'s tearable."',
  '"What\'s the best way to watch a fly fishing tournament? Live stream."',
  '"Spring is here! I got so excited I wet my plants."',
  '"I could tell a joke about pizza, but it\'s a little cheesy."',
  '"Don\'t trust atoms. They make up everything!"',
  '"When does a joke become a dad joke? When it becomes apparent."',
  "\"I wouldn't buy anything with velcro. It's a total rip-off.\"",
  '"What’s an astronaut’s favorite part of a computer? The space bar."',
  "\"I don't play soccer because I enjoy the sport. I'm just doing it for kicks!\"",
  '"Why are elevator jokes so classic and good? They work on many levels."',
  '"Why do bees have sticky hair? Because they use a honeycomb."',
  '"What do you call a fake noodle? An impasta."',
  '"Which state has the most streets? Rhode Island."',
  '"What did the coffee report to the police? A mugging."',
  '"What did the fish say when he hit the wall? Dam."',
  '"Is this pool safe for diving? It deep ends."',
  '"I\'m on a seafood diet. I see food and I eat it."',
  '"Why did the scarecrow win an award? Because he was outstanding in his field."',
  '"I made a pencil with two erasers. It was pointless."',
  '"How do you make a Kleenex dance? Put a little boogie in it!"',
  "\"I'm reading a book about anti-gravity. It's impossible to put down!\"",
  '"Did you hear about the guy who invented the knock-knock joke? He won the "no-bell" prize."',
  "\"I've got a great joke about construction, but I'm still working on it.\"",
  '"I used to hate facial hair...but then it grew on me."',
  '"I decided to sell my vacuum cleaner—it was just gathering dust!"',
  '"I had a neck brace fitted years ago and I\'ve never looked back since."',
  '"You know, people say they pick their nose, but I feel like I was just born with mine."',
  '"What\'s brown and sticky? A stick."',
  '"Why can\'t you hear a psychiatrist using the bathroom? Because the "P" is silent."',
  '"What do you call an elephant that doesn\'t matter? An irrelephant."',
  '"What do you get from a pampered cow? Spoiled milk."',
  '"I like telling Dad jokes. Sometimes he laughs!"',
  '"Did I tell you the time I fell in love during a backflip? I was heels over head!"',
  '"If a child refuses to sleep during nap time, are they guilty of resisting a rest?"',
  '"I ordered a chicken and an egg online. I’ll let you know."',
  '"It takes guts to be an organ donor."',
  '"If you see a crime at an Apple Store, does that make you an iWitness?"',
  '"I\'m so good at sleeping, I can do it with my eyes closed!"',
  '"I was going to tell a time-traveling joke, but you guys didn\'t like it."',
];
client.on("ready", () => {
  console.log("Online");
});

client.on("message", (message) => {
  let args = message.content.substring(prefix.length).split(" ");

  switch (args[0]) {
    case "ping":
      message.channel.send("pong!");
      break;
    case "info":
      if (args[1] === "version") {
        message.channel.send("The current version is " + version);
      } else if (args[1] === "commands") {
        message.channel.send(
          "NEED TO BE SUPERSCEDED BY 'info'\ncommands -> this message.\nping -> tests the response time of the bot and if it's online.\ntells you current version of the bot.\ninfo -> when combined with a command, gives detailed information.\njoke -> tells a dad joke.\ncredit -> provides link to joke source."
        );
      } else if (args[1] === "credit") {
        message.channel.send(
          "Credit to the jokes provided by this bot go to 'https://www.countryliving.com/life/a27452412/best-dad-jokes/'"
        );
      } else {
        message.channel.send("Invalid Args");
      }
      break;
    case "Im":
    case "im":
    case "i'm":
    case "I'M":
    case "I'm":
      message.channel.send("Hi " + args[1] + ", I'm Dad!");
      break;
    case "joke":
      message.channel.send(jokes[Math.floor(Math.random() * jokes.length) + 1]);
    default:
      //message.channel.send("Invalid Args");
      break;
    case "die":
      message.channel.send("bleh");
      break;
  }
});

client.login(token);
