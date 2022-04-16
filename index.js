console.log('ciao');
require('events').EventEmitter.prototype._maxListeners = 100;
const Discord = require("discord.js")
const {Client, Intents} = require("discord.js");
const { getChannelInfo } = require('yt-channel-info');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES], partials: ["CHANNEL", "CHANNEL", "REACTION"] })
const puppeteer = require("puppeteer")



var embed = new Discord.MessageEmbed()
    .setColor("#ff0000")
    .setTitle("Ecco la lista di comandi: ")
    .setAuthor("TobyGamerSubs - Official Bot")
    .addFields(
        { name: "-ip", value: "Per Visualizzare l'ip del server dei sub", inline: true },
        { name: "-versione", value: "Per sapere la versione del server dei sub", inline: true },
        { name: "-youtube", value: "Per avere il link del canale di toby", inline: true },
        { name: "-discord", value: "Per ottenere il link per invitare amici nel server discord", inline: true },
        { name: "-forum", value: "Per andare a vedere il forum di toby!", inline: true },
        { name: "-listatribù", value: "Per vedere tutte le città verificate del server dei sub!", inline: true },
        { name: "-ultimovideo", value: "Per vedere l'ultimo video di Toby!", inline: true },
        { name: "-entratoil", value: "Per vedere quando sei entrato nel server Discord!!", inline: true },
    )
    .setFooter("Comandi bot", "https://i.ibb.co/MRVRpPs/server-icon.png4")



client.once('ready', () => {
    console.log('Bot Online!');
});

client.login(process.env.token);

client.on('ready', () => {
    //Stato classico (Sta guardando..., Sta giocando a...)
    client.user.setActivity('Server Degli Iscritti', { type: 'PLAYING' }); //Oppure LISTENING, PLAYING
    //Stato online/offine/non disturbare...
    client.user.setStatus('online') //Oppure idle, dnd, invisible
})



client.on("messageCreate", (message) => {
    if (message.content == '-ip') {
        message.channel.send('Ecco : play.tobygamer.net')
    }
});

client.on("messageCreate", (message) => {
    if (message.content == '-versione') {
        message.channel.send('La versione del server dei sub va dalla 1.8 alla 1.18.1')
    }
});


client.on("messageCreate", (message) => {
    if (message.content == '-comandi') {
        message.channel.send({ embeds: [embed] })
    }
});

client.on("messageCreate", (message) => {
    if (message.content == '-warn') {
        message.channel.send('<@747759418375929907> è stato warnato, motivo : Insulti')
        message.delete()
    }
});

client.on("messageCreate", (message) => {
    if (message.content == '-youtube') {
        message.channel.send('Ecco il canale di toby! :https://www.youtube.com/channel/UCwOTkljoPYodvXod1bDRZ2g')
    }
});


client.on("messageCreate", (message) => {
    if (message.content == '-discord') {
        message.channel.send('Ecco il link di invito! :https://discord.gg/hQJfnzbY7b')
    }
});

client.on("messageCreate", (message) => {
    if (message.content == '-forum') {
           var embeds = new Discord.MessageEmbed()
    .setColor("#ff0000")
    .setTitle("Attualmente non disponibile")
    .setAuthor("TobyGamerSubs - Official Bot")
    .setDescription("_ _")
    .setFooter("Regole", "https://i.ibb.co/MRVRpPs/server-icon.png4")
    .setTimestamp(); 
    message.channel.send({ embeds: [embeds] })

    }
});


client.on("messageCreate", (message) => {
    if (message.content == '-nuooovità') {
        message.delete();
           var embedssss = new Discord.MessageEmbed()
    .setColor("#ff0000")
    .setTitle("Salve Community!")
    .setAuthor("TobyGamerSubs - Official Bot")
    .setDescription("Sappiate che molto presto inizeranno i contest di costruzione....  :D Preparatevi")
    .setDescription("Scrivendo -tribù <nome tribù> chiederete l'ammissione  ")
    .setFooter("Annuncio", "https://i.ibb.co/MRVRpPs/server-icon.png4")
    .setTimestamp(); 
    message.channel.send({ embeds: [embedssss] })

    }
           
});


client.on("messageCreate", (message) => {
    if (message.content == `-tribu`) {
        var canale = client.channels.cache.get("927585884918911046") //Settare il canale di benvenuto
        var command = args.shift().toLowerCase()
        canale.send(command)
    }
});

client.on("messageCreate", (message) => {
    if (message.content == '-manutenzioneon') {
        message.channel.send('Server off! Se ti annoi puoi divertirti con tutti i canali svago del server discord! -Lo Staff')
    }
});

client.on("messageCreate", (message) => {
    if (message.content == 'Posso essere sbannato?') {
        message.channel.send('Salve! Come puoi essere sbannato? Nel nostro sito troverai dei campi da compilare per essere sbannato. Per visualizzare il nostro forum digita -forum -Lo Staff')
    }
});



var embed9 = new Discord.MessageEmbed()
    .setColor("#ff0000")
    .setTitle("Manutenzione!")
    .setAuthor("TobyGamerSubs - Official Bot")
    .addFields(
        { name: "Ragazzi siamo spiacenti ma il server sarà in manutenzione finchè non avremmo finito le modifiche!", value: "_ _", inline: true },
        { name: "Quindi se volete condividete il più possibile per supportarmi al massimo, e se volete, potete sbizzarrirvi con i giochi presenti nel server d", value: "_ _", inline: true },
    )
    .setFooter("Evento", "https://i.ibb.co/MRVRpPs/server-icon.png4")

client.on("messageCreate", (message) => {
        if (message.content == '-annuncio') {
            message.channel.send({ embeds: [embed9] })
            message.channel.send("Ping: <@&859565876503379968>, <@&859565980119072779>")
            message.delete();
        }
});

client.on("messageCreate", (message) => {
    if (message.content == '-manutenzioneoff') {
        message.channel.send('Manutenzione terminata! Server aperto!')
    }
});


client.on("messageCreate", (message) => {
    if (message.content == '<@737619659720884265>') {
        message.channel.send('Perfavore, non menzionare toby, ti risponderà a minuti. Se cerchi assistenza scrivi agli admin o helper!')
        message.delete();
    }
});

client.on("messageCreate", (message) => {
    if (message.content == '-sos') {
        message.channel.send('Buongiorno community! Oggi uscirà un video molto importante nel canale di toby!! Risponderà alle vostre domande e dirà se fare o no i tutorial!')
        message.delete();
    }
});

client.on("messageCreate", (message) => {
    if (message.content == '-evento') {
        message.channel.send({ embeds: [embeda] })
        message.channel.send("Ping: <@&859559549278224404>")
        message.delete();
    }
});
var embed1 = new Discord.MessageEmbed()
    .setColor("#ff0000")
    .setTitle("Ecco la lista delle tribù disponibili(Tutte le tribù sono verificate✅): ")
    .setAuthor("TobyGamerSubs - Official Bot")
    .addFields(
        { name: "-", value: "_ _", inline: true },
        { name: "-", value: "_ _", inline: true },
        { name: "-", value: "_ _", inline: true },
        { name: "-", value: "_ _", inline: true },
        { name: "-", value: "_ _", inline: true },
        { name: "-", value: "_ _", inline: true },
        { name: "-", value: "_ _", inline: true },
        { name: "-", value: "_ _", inline: true },
        { name: "-", value: "_ _", inline: true },
        { name: "-", value: "_ _", inline: true },
        { name: "-", value: "_ _", inline: true },
        { name: "-", value: "_ _", inline: true },
        { name: "-", value: "_ _", inline: true }
    )

    .setFooter("Lista Città", "https://i.ibb.co/MRVRpPs/server-icon.png4")
    .setTimestamp();

client.on('message', (message) => {
    if (message.content == '-listatribù') {
        message.channel.send({ embeds: [embed1] })
    }
});


//TICKET SYSTEM

//Prima di tutto mandare il messaggio del ticket
client.on("messageCreate", message => {
    if (message.content == "-ciao") {
        message.channel.send("Clicca sulla reazione per aprire un ticket")
            .then(msg => msg.react("📩")) //Personalizzare l'emoji della reaction
            message.delete();
    }
})
client.on("messageReactionAdd", async function (messageReaction, user) {
    if (user.bot) return
    if (messageReaction.message.partial) await messageReaction.message.fetch();
    if (messageReaction._emoji.name == "📩") { //Personalizzare l'emoji della reaction
        if (messageReaction.message.channel.id == "878929139636248606") { //Settare canale
            messageReaction.users.remove(user);
            var server = messageReaction.message.channel.guild;
            if (server.channels.cache.find(canale => canale.topic == `User ID: ${user.id}`)) {
                user.send("Hai gia un ticket aperto").catch(() => { })
                return
            }
            server.channels.create(user.username, {
                type: "text"
            }).then(canale => {
                canale.setTopic(`User ID: ${user.id}`);
                canale.setParent("861283572693729341") //Settare la categoria
                canale.overwritePermissions([
                    {
                        id: server.id,
                        deny: ["VIEW_CHANNEL"]
                    },
                    {
                        id: user.id,
                        allow: ["VIEW_CHANNEL"]
                    }
                ])
                canale.send("Grazie per aver aperto un ticket")
            })
        }
    }
})
client.on("messageCreate", message => {
    if (message.content == "-close") {
        var topic = message.channel.topic;
        if (!topic) {
            message.channel.send("Non puoi utilizzare questo comando qui");
            return
        }
        if (topic.startsWith("User ID:")) {
            var idUtente = topic.slice(9);
            if (message.author.id == idUtente || message.member.hasPermission("MANAGE_CHANNELS")) {
                message.channel.delete();
            }
        }
        else {
            message.channel.send("Non puoi utilizzare questo comando qui")
        }
    }
    if (message.content.startsWith("-add")) {
        var topic = message.channel.topic;
        if (!topic) {
            message.channel.send("Non puoi utilizzare questo comando qui");
            return
        }
        if (topic.startsWith("User ID:")) {
            var idUtente = topic.slice(9);
            if (message.author.id == idUtente || message.member.hasPermission("MANAGE_CHANNELS")) {
                var utente = message.mentions.members.first();
                if (!utente) {
                    message.channel.send("Inserire un utente valido");
                    return
                }
                var haIlPermesso = message.channel.permissionsFor(utente).has("VIEW_CHANNEL", true)
                if (haIlPermesso) {
                    message.channel.send("Questo utente ha gia accesso al ticket")
                    return
                }
                message.channel.updateOverwrite(utente, {
                    VIEW_CHANNEL: true
                })
                message.channel.send(`${utente.toString()} è stato aggiunto al ticket`)
            }
        }
        else {
            message.channel.send("Non puoi utilizzare questo comando qui")
        }
    }
    if (message.content.startsWith("-remove")) {
        var topic = message.channel.topic;
        if (!topic) {
            message.channel.send("Non puoi utilizzare questo comando qui");
            return
        }
        if (topic.startsWith("User ID:")) {
            var idUtente = topic.slice(9);
            if (message.author.id == idUtente || message.member.hasPermission("MANAGE_CHANNELS")) {
                var utente = message.mentions.members.first();
                if (!utente) {
                    message.channel.send("Inserire un utente valido");
                    return
                }
                var haIlPermesso = message.channel.permissionsFor(utente).has("VIEW_CHANNEL", true)
                if (!haIlPermesso) {
                    message.channel.send("Questo utente non ha gia accesso al ticket")
                    return
                }
                if (utente.hasPermission("MANAGE_CHANNELS")) {
                    message.channel.send("Non puoi rimuovere questo utente")
                    return
                }
                message.channel.updateOverwrite(utente, {
                    VIEW_CHANNEL: false
                })
                message.channel.send(`${utente.toString()} è stato rimosso al ticket`)
            }
        }
        else {
            message.channel.send("Non puoi utilizzare questo comando qui")
        }
    }
})

client.on("messageCreate", (message) => {
    if (message.content == '-vid') {
        message.channel.send('<@&859565876503379968> HEY TU, TOBY HA APPENA PUBBLICATO UN VIDEO, COSA ASPETTI VAI A VEDERLO --> https://www.youtube.com/watch?v=pyyEl52isVM ')
            .then(msg => msg.react("<:like:905893993244676116>")) 
            message.delete();
    }
});



client.on("messageCreate", (message) => {
    if (message.content == '-stream') {
        message.channel.send('<@&859565876503379968> TOBY è IIN LIVE VALLO A SEGUIRE NEL SUO CANALE!!! ')
            .then(msg => msg.react("<:like:905893993244676116>")) 
            message.delete();
    }
});

client.on("messageCreate", (message) => {
    if (message.content == "#FanArt")
        message.react("<:like:905893993244676116>")

})

client.on("messageCreate", (message) => {
    if (message.content == "OOF")
        message.react("<:OOF:861541546146529300>")

})


//Reaction

client.on("messageCreate", message => {
    if (message.content == "beccatistotrid") {
        message.channel.send("Beccati sto tridente! <a:enchtrident:884009353898786856>")
            .then(msg => msg.react("<:enchtrident:884009353898786856>")) //Personalizzare l'emoji della reaction
}})


client.on("messageCreate", message => {
        if (message.content == "fanarT") {
            message.channel.send("Reagisci con l'emoji per mettere like!")
                .then(msg => msg.react("<:like:905893993244676116>")) //Personalizzare l'emoji della reaction
}})    
const ytch = require("yt-channel-info")

setInterval(function () {
    var canale = client.channels.cache.get("885180513424392242")
    ytch.getChannelInfo("UCwOTkljoPYodvXod1bDRZ2g")
        .then(response => {
            canale.setName(`🎬 Iscritti: ${response.subscriberCount}`)
        })
}, 1000 * 5)


client.on("messageCreate", message =>{
    if (message.content == "-ultimovideo") {
        ytch.getChannelVideos("UCwOTkljoPYodvXod1bDRZ2g")
            .then(response=> {
                var embed3 = new Discord.MessageEmbed()
                    .setColor("#ff0000")
                    .setTitle("Ultimo video di Toby")
                    .setDescription("Ultimo video uscito sul canale")
                    .addField("Titolo", response.items[0].title)
                    .addField("Views", response.items[0].viewCount.toString())
                    .addField("Durata", response.items[0].durationText)
                    .addField("Pubblicato", response.items[0].publishedText)
                    .setImage(response.items[0].videoThumbnails[3].url)

                message.channel.send({ embeds: [embed3] })
            })
    }
})






client.on("message", message => {
    if (message.content.startsWith("-entratoil")) {
        if (message.content == "-entratoil") {
            var utente = message.member;
        }
        else {
            var utente = message.mentions.members.first();
        }
        if (!utente) {
            message.channel.send("Non ho trovato questo utente")
            return
        }
        var embed9 = new Discord.MessageEmbed()
            .setTitle(utente.user.tag)
            .setDescription("Quando sono entrato?")
            .setThumbnail(utente.user.displayAvatarURL())
            .addField("Sei entrato il", utente.joinedAt.toDateString(), true )
        message.channel.send({ embeds: [embed9] })
    }
})
setInterval(() => {

    ytch.getChannelVideos("UCwOTkljoPYodvXod1bDRZ2g", "newest").then(async response =>{
        var idVideo = response.items[0]?.videoId
        if(!idVideo) return

        client.channels.cache.get("859558143255380008").messages.fetch()
        .then(messages =>{
            var giaMandato = false;
            messages.forEach(msg => {
                if(msg.content.includes(idVideo)) giaMandato = true;
        });

        if(!giaMandato){
            client.channels.cache.get("859558143255380008").send(`-- NUOVO VIDEO --
Ciao, <@&859565876503379968> è appena uscito un video su **${response.items[0].author}**
Andate a vedere "${response.items[0].title}", https://www.youtu.be/${idVideo}`)
            }
        })
    })


}, 1000 * 30)