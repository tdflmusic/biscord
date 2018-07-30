const botSettings = require("./botsettings.json");
const Discord = require("discord.js");

const bot = new Discord.Client();


let embed = new Discord.RichEmbed()
  .setTitle("Oh no!")
  .setColor(0x8080ff)
  .setDescription("You need [Discord Nitro](https://discordapp.com/nitro) to view this message!")
  .setThumbnail("https://discordapp.com/assets/2c21aeda16de354ba5334551a883b481.png");


let embed2 = new Discord.RichEmbed()
  .setTitle("fort nite")
  .setColor(0x8025fe)
  .setDescription("ok listen up, faggots. i play fortnite everyday, all day. without it, i wouldn’t be who i am today. fortnite is by far the best game ever in existence. if you don’t play it, then your obviously some broke, stupid piece of shit who doesn’t have a life. i am level 100 and have bought all the skins available at the moment. stop making fun of fortnite you assholes. i bet that you don’t even have a good skin or pickaxe you sad little cunt. you need to step your game the fuck up or else ill block you on every social media app my parents will allow me to have. you sad, ugly, stupid, retarded piece of fucking shit.")
  .setThumbnail("https://images-ext-2.discordapp.net/external/QDm386zeg-nCcwVqUkuHZMOKkeBzvI8SgAzBs5zzIEY/https/pre00.deviantart.net/6222/th/pre/f/2017/187/f/e/bonzi_buddy_2_0__wip__2__by_the64thgamer-dbf9v1o.png?width=705&height=504");

	

bot.on('ready', () => {
    console.log("I am ready");
});
 
bot.on('message', message => {
    if(message.author !== bot.user) return;
 
    if(message.content === "!(!)!") {
    	message.delete(10);
      return message.channel.send(embed);

    } else if(message.content === "@(@)@") {
      message.delete(10);
      return message.channel.send(embed2);
    } else if(message.content === "#(#)#") {
      message.delete(10);
      return message.channel.send(embed3);
    } 



});

bot.login("NDM1NTAyNjM3NzE1MjkyMTY5.DcZ8jg.Ipk8s6AACPfW6Sjd6GNgqt8dxFA");