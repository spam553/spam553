const Discord = require("discord.js");
const client = new Discord.Client();
const client2 = new Discord.Client();
const myid = [''];
const prefix = ['&'];

client.on('ready', () => {
   console.log(`----------------`);
   console.log(`Credit Farmm - Script By : Kahrbaa `);
   console.log(`----------------`);
   console.log(`Loadinng`);
   console.log(`Loadinng.`);
   console.log(`Loadinng..`);
   console.log(`Loadinng...`);
   console.log(`This Bots Online ' `);
   console.log(`----------------`);
});

client2.on('ready', () => {
   console.log(`----------------`);
   console.log(`2 Account Online ✩' `);
   console.log(`----------------`);
});



client.on('message', message => {
    if(message.content === prefix+'راتب'){
        message.channel.send('#daily')
    }
});

client.on('message', message => {
    if(message.content === prefix+'مبلغ'){
        message.channel.send('#credits')
    }
});

client.on('message', message => {
    if(message.content === prefix+'ريب'){
        message.channel.send("#rep "+"<@" + name + ">")
    }
});

client.on('message', message => {
  let args = message.content.split(" ").slice(1);

  if(message.content.startsWith(prefix + "say"))  {
         message.delete()
         const embed = new Discord.RichEmbed()
         .setDescription(args.join(" "))
         .setColor(0xff0000)
    message.channel.sendEmbed(embed);

     }

});

client.on('message', message => {
if (message.content === prefix+'spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 20000; x++) {
        message.channel.send(`**بروت 1 نمبر ون تيتيتيتيتتيييتيتيتتي نمبر ونات تيتيتيتيت مافياف اذية ذية نية صافية مية مية دن درقن درقن درقن درقن **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);



if (command == "تحدث") {
let rank = message.guild.member(message.author).roles.find('name', 'Role.Kahrbaa');
if (!rank) return message.reply(' ')
  message.channel.send(args.join("  "))
    message.delete();
  }
});

client2.on('message', message => {
    if(message.content === prefix+'راتب'){
        message.channel.send('#daily')
    }
});

client2.on('message', message => {
    if(message.content === prefix+'مبلغ'){
        message.channel.send('#credits')
    }
});

client2.on('message', message => {
    let rank = message.guild.member(message.author).roles.find('name', 'Role.Turbo');
if (!rank) return message.reply(' ')
  message.channel.send(args.join("  "))
    message.delete();
    }
});

client2.on('message', message => {
if (message.content === prefix+'spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 20000; x++) {
        message.channel.send(`**بروت 1 نمبر ون تيتيتيتيتتيييتيتيتتي نمبر ونات تيتيتيتيت مافياف اذية ذية نية صافية مية مية دن درقن درقن درقن درقن **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client2.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);



if (command == "تحدث") {
let rank = message.guild.member(message.author).roles.find('name', 'Role.Turbo');
if (!rank) return message.reply(' ')
  message.channel.send(args.join("  "))
    message.delete();
  }
});

client2.on('message', message => {
(!message.member.hadPermission(MANAGE_MESSAGES))return message.reply("NO");
let botmessage = args.join (" ")
message.delete().catch;
message.channel.send(botmessage);
}

module.export.help = {
	name: "say"


client.login(process.env.TOKEN);
client2.login(process.env.TOKEN2);
