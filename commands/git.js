const db = require('quick.db');
const Discord = require('discord.js');
module.exports = {
    name: "git",
    run: async(client, message, args) => {
        let embed = new Discord.MessageEmbed().setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setFooter('Rash Was Here!').setColor('2F3136').setTimestamp();
        if (!message.member.voice.channel) return message.channel.send(embed.setDescription("Kullanıcının yanına gidebilmek için sesli kanalda olman gerekiyor!")).then(x => x.delete({ timeout: 5000 })).then(message.react(client.config.no));
        let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if (!member) return message.channel.send(embed.setDescription("Kullanıcı bulunamadı veya etiketlenemedi! \n `.git @Rash`")).then(x => x.delete({ timeout: 5000 })).then(message.react(client.config.no));
        if (!member.voice.channel) return message.channel.send(embed.setDescription("Etiketlediğin kullanıcı herhangi bir ses kanalında bulunmuyor!")).then(x => x.delete({ timeout: 5000 })).then(message.react(client.config.no));
        const filter = (reaction, user) => {
            return ['✅'].includes(reaction.emoji.name) && user.id == member.id;
        };
        await message.channel.send(`${member}`, { embed: embed.setAuthor(member.displayName, member.user.avatarURL({ dynamic: true, size: 2048 })).setDescription(`${message.author} senin ses kanalına girmek istiyor istiyormusun?`) }).then(async msg => {
            await msg.react("✅")
            msg.awaitReactions(filter, {
                max: 1,
                time: 15000,
                errors: ['time']
            }).then((collected) => {
                message.member.voice.setChannel(member.voice.channel.id)
                return msg.edit("Kullanıcı yanınıza `gitme` isteğini **kabul etti!**").then(message.react(client.config.tik)).then(x => x.delete({ timeout: 5000 }));
            }).catch((err) => {
                return msg.edit("Kullanıcı yanınıza `gitme` isteğini **reddetti!** !").then(message.react(client.config.no)).then(x => x.delete({ timeout: 5000 }))
            })
        })
    }
}