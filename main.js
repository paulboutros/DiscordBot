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




import Discord from 'discord.js';
import fetch from 'node-fetch'; //require('node-fetch');
import querystring from 'querystring';
import axios from 'axios';
import { strictEqual } from 'assert';

const sessionTicket = '5C46D903B5D37185--3C4B300F3DAF8829-AE348-8DA47AB79D86371-JYAJaleuO8w20CxMa8Azm6b5PbDIuqgASBjQ/oVYVKM=';
const client =  new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });
const prefix = '/';
const TitleId ='AE348';
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
		console.log(file);

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
	}else if (command === 'args-info') {
		if (!args.length) {
			return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
		}

		message.channel.send(`Command name: ${command}\nArguments: ${args}`);   
	}
    else if(command ==="login"){
		
		try {
			let res = await axios({
				method: 'post',
                /*
				url: "https://api.instantwebtools.net/v1/airlines",
				data: {
					id: 5899457895189,
					name: "Sri Lankan Airways",
					country: "Sri Lanka",
					logo: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Qatar_Airways_Logo.svg/sri_lanka.png",
					slogan: "From Sri Lanka",
					head_quaters: "Katunayake, Sri Lanka",
					website: "www.srilankaairways.com",
					established: "1990"
				}*/
                url: "https://AE348.playfabapi.com/Client/LoginWithEmailAddress?sdk=PostmanCollection-0.150.220509",
				data: {
					 Email : "wulirocks9445@hotmail.com",
                     Password : "0000000",
                     TitleId : "AE348"
				} 
			  });
			console.log(JSON.stringify(res.data));
		  } catch (error) {
			console.log(error.response); 
		  }
	
		//SetCryptoUserID
	}else if(command ==="cloud"){
		
		try {
			let res = await axios({
				method: 'post',
                /*
				url: "https://api.instantwebtools.net/v1/airlines",
				data: {
					id: 5899457895189,
					name: "Sri Lankan Airways",
					country: "Sri Lanka",
					logo: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Qatar_Airways_Logo.svg/sri_lanka.png",
					slogan: "From Sri Lanka",
					head_quaters: "Katunayake, Sri Lanka",
					website: "www.srilankaairways.com",
					established: "1990"
				}*/
                url: "https://AE348.playfabapi.com/Client/LoginWithEmailAddress?sdk=PostmanCollection-0.150.220509",
				data: {
					 Email : "wulirocks9445@hotmail.com",
                     Password : "0000000",
                     TitleId : "AE348"
				} 
			  });
			console.log(JSON.stringify(res.data));
		  } catch (error) {
			console.log(error.response); 
		  }
	
		
	}
	 
	else if(command ==="wallet_cant_use_because_needSessionTicket"){
		

        if (!args.length) {
			return message.channel.send(`Hey ${message.author}, You didn't provide any wallet ID!`);
		}

		message.channel.send(`Command name: ${command}\nArguments: ${args}`);
 
        const headers = {
            'X-PlayFabSDK': 'PostmanCollection-0.150.220509',
            'Content-Type': 'application/json',
            'X-Authorization': sessionTicket
          }
         
		try {
			let res = await axios({
				method: 'post',
                url: "https://AE348.playfabapi.com/Client/ExecuteCloudScript?sdk=PostmanCollection-0.150.220509",
                // date here is body in postman
				data: { 
                   FunctionName : "SetCryptoUserID",
                    FunctionParameter : {
                    walletID  :  args.toString() ,//args.toString()
                    discordUserName :  message.author.username.toString()   +  message.author.discriminator.toString()
                 },
                 RevisionSelection : "Live",
                 GeneratePlayStreamEvent : true
 				},  
                    headers: headers
                    
			  });




			console.log(JSON.stringify(res.data));
		  } catch (error) {
			console.log(error.response); 
		  }
	
		
	} 
 	 else if(command ==="wallet"){
		

        if (!args.length) {
			return message.channel.send(`Hey ${message.author}, You didn't provide any wallet ID!`);
		}

		message.channel.send(`Command name: ${command}\nArguments: ${args}`);
 
         const headers = {
            'X-PlayFabSDK': 'PostmanCollection-0.150.220509',
            'Content-Type': 'application/json'//,
         //   'X-Authorization': sessionTicket
          }
         
		try {
			let res = await axios({
				method: 'post',
                url: "https://AE348.playfabapi.com/Client/LoginWithCustomID?sdk=PostmanCollection-0.150.220509",
                // date here is body in postman
				data: { 
					CustomId : args.toString(),
					CreateAccount : false,
					TitleId : "AE348"
 				},  
                    headers: headers
                    
			  });
 
			console.log(JSON.stringify(res.data.data.SessionTicket));
			// put this inside a function
//)))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))
						const headers2 = {
							'X-PlayFabSDK': 'PostmanCollection-0.150.220509',
							'Content-Type': 'application/json',
							'X-Authorization': res.data.data.SessionTicket
						}
							//85C8C775874A2A8F--3C4B300F3DAF8829-AE348-8DA563B9D32C9E1-pLvzZEkwf1Rrm905g5zCgVEig845H1z52VzzLgvMD6Y=
							try {
								let res2 = await axios({
									method: 'post',
									 url: "https://AE348.playfabapi.com/Client/ExecuteCloudScript?sdk=PostmanCollection-0.150.220509",
									// date here is body in postman
									data: { 
									FunctionName : "SetCryptoUserID",
										FunctionParameter : {
										walletID  :  args.toString() ,//args.toString()
										discordUserName :  message.author.username.toString()   +  message.author.discriminator.toString()
									},
									RevisionSelection : "Live",
									GeneratePlayStreamEvent : true
									},  
										headers: headers2
										
								});




								console.log(JSON.stringify(res2.data));
							} catch (error) {
								console.log(error.response); 
							}
										//)))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))
										/////// end of would be function
									} catch (error) {
										console.log(error.response); 
									}
	
		
	} 

	else if(command ==="w2"){ // include login and register
		

        if (!args.length) {
			return message.channel.send(`Hey ${message.author}, You didn't provide any wallet ID!`);
		}

		message.channel.send(`Command name: ${command}\nArguments: ${args}`);

          let userName="";
        for (let i = 0; i < args.length; i++) {
            userName+= args[i];
          } 
           userName = "0x4eba90B4124DA2240C7Cd36A9EEE7Ff9F81Cf601";

           var begin = userName.substr(0, 5);
           var end = userName.substr(37, 5);
           let modifiedUserName = begin + end ;
       

           console.log("modifiedUserName >>>>>>>>>>>>>>>>>>>>>>>>>>>  "  , modifiedUserName ); 
        const headers = {
            'X-PlayFabSDK': 'PostmanCollection-0.150.220509',
            'Content-Type': 'application/json' 
            
          }
         
		try {
			let res = await axios({
				method: 'post',
                url: "https://AE348.playfabapi.com/Client/LoginWithPlayFab?sdk=PostmanCollection-0.150.220509",
                // date here is body in postman
				data: { 
                    Username:  modifiedUserName,
                    Password: "0000000",
                    TitleId: TitleId
 				},  
                    headers: headers
                    
			  });

  // pb wallet = 0x4eba90B4124DA2240C7Cd36A9EEE7Ff9F81Cf601
   //
             
			console.log(JSON.stringify(res.data));
            message.channel.send(`Hey ${message.author}, your  game account exit already`);
		  } catch (error) {

            message.channel.send(`Hey ${message.author}, you have not game account yet`);
			console.log(error.response); 
		  }
	
		
	}
});
client.login('OTgzMDIzMjU0MjQ5ODA3OTMz.GSKZFI.dgyv7mBN5UWqSNSwXu5YeiUwPbhrSHeweulnuU');