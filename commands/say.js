const db = require('quick.db');
const { MessageEmbed } = require('discord.js')
module.exports = {
    name: 'say',
    aliases: ['say'],
    run: async(client, message, args) => {


        if (!client.config.register.some(id => message.member.roles.cache.has(id))&& (!message.member.hasPermission("ADMINISTRATOR"))) {
            return message.channel.send(new MessageEmbed().setDescription("Komutu kullanan kullanıcıda yetki bulunmamakta!").setColor('2F3136').setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setFooter('Ducky Was Here!')).then(x => x.delete({ timeout: 5000 })).then(message.react(client.config.no));
        }

        const mapping = {
            " ": "",
            "0": "<a:0_:818790936778768405>", // sayı iDleri
            "1": "<a:1_:818790945855373342>",
            "2": "<a:2_:818790950314311691>",
            "3": "<a:3_:818790957989888001>",
            "4": "<a:4_:818790991568961546>",
            "5": "<a:5_:818791017637085184>",
            "6": "<a:6_:818791038494703626>",
            "7": "<a:7_:818791584614580254>",
            "8": "<a:8_:818791591740309524>",
            "9": "<a:9_:818791599491776532>",
        };
        var tag = message.guild.members.cache.filter(s => !s.bot).filter(member => member.user.username.includes(client.config.tag)).size;
        var toplamüye = message.guild.memberCount
        var online = message.guild.members.cache.filter(off => off.presence.status !== 'offline').size
        var Sesli = message.guild.members.cache.filter(s => s.voice.channel).size;
        var boost = message.guild.premiumSubscriptionCount
        var duckytoplamüye = `${toplamüye}`.split("").map(c => mapping[c] || c).join("")
        var duckytag = `${tag}`.split("").map(c => mapping[c] || c).join("")
        var duckyses = `${Sesli}`.split("").map(c => mapping[c] || c).join("")
        var duckyonline = `${online}`.split("").map(c => mapping[c] || c).join("")
        var duckyboost = `${boost}`.split("").map(c => mapping[c] || c).join("")
        
        const embed = new MessageEmbed()
            .setDescription(`
            • Sunucuda toplam **${duckytoplamüye}** üye bulunmakta.
            • Sunucuda aktif **${duckyonline}** üye bulunmakta.
            • Sunucuda tagımızı alan **${duckytag}** üye bulunmakta.
            • Sunucuda sesli sohbetlerde  **${duckyses}** üye bulunmakta.
            • Sunucumuzda toplam **${duckyboost}** boost bulunmakta.`)
            .setColor('2F3136')
            .setFooter('Rash was here')
        message.channel.send(embed).then(message.react(client.config.tik));
    }
}