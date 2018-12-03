const Discord = require("discord.js"); 
const client = new Discord.Client(); 





client.login('NTE4NTQyMjg4MjgxMDEwMjA3.DuXRzQ.xqUWXTzQ3u-jknTTduyaHobWMQ0');

var prefix = '!!'
client.on('ready',  () => {
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~'); 
  console.log('by Ahmed');
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
  console.log(`Logged in as  * [ " ${client.user.username} " ] servers! [ " ${client.guilds.size} " ]`);
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
  console.log('is online')
client.user.setStatus("dnd");
});


client.on('message', function(message) {
    if(message.content.startsWith(prefix + "report")) {
        let messageArgs = message.content.split(" ").slice(1).join(" ");
        let messageReason = message.content.split(" ").slice(2).join(" ");
        if(!messageReason) return message.reply("**@ حدد الشخص الذي تريد البلاغ عنه و بعدها قم بكتابه السبب**");
    let mUser = message.mentions.users.first();
    if(!mUser) return message.channel.send("لا يمكنني وجود الشخص المراد البلاغ عنه.");
    let Rembed = new Discord.RichEmbed()
    .setTitle("`New Report!`")
    .setThumbnail(message.author.avatarURL)
    .addField("**# - Reported User:**",mUser,true)
    .addField("**# - Reported User ID:**",mUser.id,true)
    .addField("**# - Reason:**",messageReason,true)
    .addField("**# - Channel:**",message.channel,true)
    .addField("**# - Time:**",message.createdAt,true)
    .setFooter("لو ان الابلاغ غلط انت اللي هتاخد انذار")
message.channel.send(Rembed)
message.channel.send("__Are you sure you want to send this to the Server owner??__").then(msg => {
    msg.react("✅")
    msg.react("❌")
.then(() => msg.react('❌'))
.then(() =>msg.react('✅'))
let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;

let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
reaction1.on("collect", r => {
    message.guild.owner.send(Rembed)
    message.reply("**# - Done! 🎇**");
})
reaction2.on("collect", r => {
    message.reply("**# - Canceled!**");
})
})
}
});

client.on('message', message => {
              if(!message.channel.guild) return;
    if(message.content.startsWith('!!bc')) {
    if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
  if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `Owner`' );  
    let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
    let copy = "ℊℯℯ𝖪𝒴 𝓞𝓟";
    let request = `Requested By ${message.author.username}`;  
    if (!args) return message.reply('**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**');message.channel.send(`**هل أنت متأكد من إرسالك البرودكاست؟ \nمحتوى البرودكاست:** \` ${args}\``).then(msg => {
    msg.react('✅')
    .then(() => msg.react('❌'))  
    .then(() =>msg.react('✅'))  



    let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
    let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
       let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });  
    let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });  
    reaction1.on("collect", r => {
    message.channel.send(`☑ |   ${message.guild.members.size} يتم ارسال البرودكاست الى عضو `).then(m => m.delete(5000));  
    message.guild.members.forEach(m => {
    var bc = new  
       Discord.RichEmbed()
       .setColor('RANDOM')
       .setTitle('Welcome guys') .addField('السيرفر', message.guild.name) .addField('المرسل', message.author.username)  
       .addField('الرساله', args)  
       .setThumbnail(message.author.avatarURL)  
       .setFooter(copy, client.user.avatarURL); 
    m.send({ embed: bc })
    msg.delete();  
    })
    })
    reaction2.on("collect", r => {  
    message.channel.send(`**Broadcast Canceled.**`).then(m => m.delete(5000));  
    msg.delete();  
    })  
    }) 
    }  
    }) 
client.on('message', message => {
    var args = message.content.toLowerCase().split(' ');
    var command = args[0];
    var prefix = '!!';
    var wordsSay = message.content.split(' ').slice(1).join(' ');
   
    if(command == prefix + 'say') {
        var sayRole = message.guild.roles.find(r => r.name === 'ℊℯℯ𝖪');
        if(!sayRole) return message.channel.send('لا استطيع ايجاد رتبة `ℊℯℯ𝖪` ');
        if(!message.member.roles.has(sayRole.id)) return message.channel.send('يجب ان تتوفر لديك رتبة `ℊℯℯ𝖪`');
        if(!wordsSay) return message.channel.send(`***EX :*** ${prefix}say Hello World! `);
       
        message.delete();
        let sayE = new Discord.RichEmbed()  
        .setColor('RANDOM')
        .setDescription(`**${wordsSay}**`)  
       
        message.channel.send(sayE);
    }
});
client.on('message',async message => {
    const moment = require('moment');
const ms = require('ms')
    var prefix = '!!' //بريفكس البوت
  var time = moment().format('Do MMMM YYYY , hh:mm');
  var room;
  var title;
  var duration;
  var currentTime = new Date(),
hours = currentTime.getHours() + 3 ,
minutes = currentTime.getMinutes(),
done = currentTime.getMinutes() + duration,
seconds = currentTime.getSeconds();
if (minutes < 10) {
minutes = "0" + minutes;
}
var suffix = "AM";
if (hours >= 12) {
suffix = "PM";
hours = hours - 12;
}
if (hours == 0) {
hours = 12;
}
 
  var filter = m => m.author.id === message.author.id;
  if(message.content.startsWith(prefix + "giveaway")) { // الامر
 
    if(!message.guild.member(message.author).hasPermission('MANAGE_GUILD')) return message.channel.send(':heavy_multiplication_x:| **يجب أن يكون لديك خاصية التعديل على السيرفر**');
    message.channel.send(`:eight_pointed_black_star:| **ارسل اسم الروم**`).then(msg => {
      message.channel.awaitMessages(filter, {
        max: 1,
        time: 20000,
        errors: ['time']
      }).then(collected => {
        let room = message.guild.channels.find('name' , collected.first().content);
        if(!room) return message.channel.send(':heavy_multiplication_x:| **لم استطيع ايجاد الروم :(**');
        room = collected.first().content;
        collected.first().delete();
        msg.edit(':eight_pointed_black_star:| **الوقت للقيف اواي**').then(msg => {
          message.channel.awaitMessages(filter, {
            max: 1,
            time: 20000,
            errors: ['time']
          }).then(collected => {
            if(!collected.first().content.match(/[1-60][s,m,h,d,w]/g)) return message.channel.send('**البوت لا يدعم هذا الوقت**');
            duration = collected.first().content
            collected.first().delete();
            msg.edit(':eight_pointed_black_star:| **ارسل جائزه القيف اواي**').then(msg => {
              message.channel.awaitMessages(filter, {
                max: 1,
                time: 20000,
                errors: ['time']
              }).then(collected => {
                title = collected.first().content;
                collected.first().delete();
                msg.delete();
                message.delete();
                try {
                  let giveEmbed = new Discord.RichEmbed()
                  .setDescription(`**${title}** \nReact With 🎉 To Enter! \nTime remaining : ${duration} \n **Created at :** ${hours}:${minutes}:${seconds} ${suffix}`)
                  .setFooter(message.author.username, message.author.avatarURL);
                  message.guild.channels.find("name" , room).send(' :heavy_check_mark: **ℊℯℯ𝖪𝒴 𝓞𝓟** :heavy_check_mark:' , {embed: giveEmbed}).then(m => {
                     let re = m.react('🎉');
                     setTimeout(() => {
                       let users = m.reactions.get("🎉").users
                       let list = users.array().filter(u => u.id !== m.author.id !== client.user.id);
                       let gFilter = list[Math.floor(Math.random() * list.length) + 0]
                       let endEmbed = new Discord.RichEmbed()
                       .setAuthor(message.author.username, message.author.avatarURL)
                       .setTitle(title)
                       .addField('Giveaway Ended !🎉',`Winners : ${gFilter} \nEnded at :`)
                       .setTimestamp()
                     m.edit('** 🎉 GIVEAWAY ENDED 🎉**' , {embed: endEmbed});
                    message.guild.channels.find("name" , room).send(`**Congratulations ${gFilter}! You won The \`${title}\`**` , {embed: {}})
                }, ms(duration));
            });
                } catch(e) {
                message.channel.send(`:heavy_multiplication_x:| **ليس لدي برمشن المطلوب**`);
                  console.log(e);
                }
              });
            });
          });
        });
      });
    });
  }
});
client.on("ready", () => {
  function lol() {
    client.guilds.get('518933084792684544').roles.find("name", "ℊℯℯ𝖪").setColor("RANDOM");

  };
  setInterval(lol, 1600);
});

client.on('message', message => {
            if (message.content.startsWith("!!help")) {
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField('!!report | للتبليغ عن شخص مأ للاونر')
.addField('!!say | تخلي البوت يقول كلام معين انت تكتبه للادمن بس')
.addField('!!bc | لعمل برودكاست لجميع الاعضاء في السيرفر للادمن بس')
.addField('!!giveaway | لعمل جيف اواي لاعضاء السيرفر')
.addField('اي شي جديد هيضاف هنا وفي نيوز:heart: ')
.setColor("RANDOM")
  message.channel.sendEmbed(embed);
    }
});
