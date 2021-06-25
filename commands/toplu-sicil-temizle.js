const db = require('quick.db');
const Discord = require('discord.js');
module.exports = {
    name: "toplu-sicil-temizle",
    run: async(client, message, args) => {
        let embed2 = new Discord.MessageEmbed().setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setColor('#2F3136').setTimestamp();

        if (!client.config.siciltemizle.some(id => message.member.roles.cache.has(id))&& (!message.member.hasPermission("ADMINISTRATOR"))) {
            return message.channel.send(embed2.setDescription('Komutu kullanan kullanıcıda yetki bulunmamakta!')).then(x => x.delete({ timeout: 5000 })).then(message.react(client.config.no));
        }
        db.all().filter(data => data.ID.endsWith("_sicil")).forEach(data => {
            db.delete(data.ID)
        })

        message.channel.send("Bütün Siciller Temizlendi!").then(x => x.delete({ timeout: 5000 })).then(message.react(client.config.tik));

    }
}