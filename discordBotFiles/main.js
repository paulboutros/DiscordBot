//useful link: https://stackoverflow.com/questions/68694195/how-do-i-fix-client-missing-intents-error
// get started with the basic bot creation: https://www.youtube.com/watch?v=j_sD9udZnCk&t=810s
//https://v12.discordjs.guide/additional-info/rest-api.html#skeleton-code

/*
const Discord = require('discord.js');
const fetch = require('node-fetch');

const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });
// bot token in there

const prefix ='-';
client.once ('ready',()=>{

    console.log('Game login bot is online');
});

client.on('message',async message =>{

    if (!message.content.startsWith(prefix) || message.author.bot)return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command   = args.shift().toLowerCase();
    if (command === 'ping'){ message.channel.send('pong!')}
    else if(command === 'youtube'){ message.channel.send('new video uploaded!')}
    else if(command === 'login'){  
        // Checking if the message's content starts with "!say"
 //if (message.content.toLowerCase().startsWith('!say')) {
    // Making sure that there is at least one GuildMember mention within the message.
    if (!message.mentions.members.size) return false;
     // Sending the message.
    message.channel.send(
     `${message.mentions.members.first()} is a son of a cookie`
    );
 
    }else if (command === 'args-info') {
		if (!args.length) {
			return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
		}

		message.channel.send(`Command name: ${command}\nArguments: ${args}`);
	}else if (command === 'cat') {
		const { file } = await fetch('https://aws.random.cat/meow').then(response => response.json());
		message.channel.send(file);
	}

   


})
*/
const Discord = require('discord.js');
const fetch = import('node-fetch'); //require('node-fetch');
const querystring = require('querystring');

const client =  new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });
const prefix = '!';

const trim = (str, max) => str.length > max ? `${str.slice(0, max - 3)}...` : str;

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', async message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

	if (command === 'cat') {
		const { file } = await fetch('https://aws.random.cat/meow').then(response => response.json());

		message.channel.send(file);
	} else if (command === 'urban') {
		if (!args.length) {
			return message.channel.send('You need to supply a search term!');
		}

		const query = querystring.stringify({ term: args.join(' ') });

		const { list } = await fetch(`https://api.urbandictionary.com/v0/define?${query}`).then(response => response.json());

		if (!list.length) {
			return message.channel.send(`No results found for **${args.join(' ')}**.`);
		}

		const [answer] = list;

		const embed = new Discord.RichEmbed()
			.setColor('#EFFF00')
			.setTitle(answer.word)
			.setURL(answer.permalink)
			.addField('Definition', trim(answer.definition, 1024))
			.addField('Example', trim(answer.example, 1024))
			.addField('Rating', `${answer.thumbs_up} thumbs up. ${answer.thumbs_down} thumbs down.`);

		message.channel.send(embed);
	}
});
client.login('OTgzMDIzMjU0MjQ5ODA3OTMz.GSKZFI.dgyv7mBN5UWqSNSwXu5YeiUwPbhrSHeweulnuU');