const Discord = require('discord.js')
module.exports = {
    name: "help",
    aliases: ["yardım"],
    run: async(client, message, args) => {
        message.channel.send(new Discord.MessageEmbed().setDescription(`\
.afk [sebep]
.ban \`@Rash/ID\` [sebep]
.jail \`@Rash/ID\` [süre] [sebep]
.mute \`@Rash/ID\` [süre] [sebep]
.voice-mute \`@Rash/ID\` [süre] [sebep]
.unjail \`@Rash/ID\`
.unmute \`@Rash/ID\`
.unban \`ID\`
.uyar \`@Rash/ID\`
.uyarılar \`@Rash/ID\`
.uyarı-temizle \`@Rash/ID\`
.voice-unmute \`@Rash/ID\`
.çek \`@Rash/ID\`
.git \`@Rash/ID\`
.kes \`@Rash/ID\`
.fçek \`@Rash/ID\`
.fgit \`@Rash/ID\`
.ses-kontrol \`@Rash/ID\`
.sicil-temizle \`@Rash/ID\`
.sicil \`@Rash/ID\` 
.spotify \`@rASH/ID\`
.rolinfo \`@Rol-Adı\`
.zengin [isim]
.katıldı
.kilit
.say
.ses
.sil
.snipe
.toplu-sicil-temizle 
.toplu-uyarı-temizle
.toplutaşı
.yetkilises
.yetkiver 

-----------------------

.yetenek

`)
            .setThumbnail(message.guild.iconURL({ dynamic: true }))
            .setColor('2F3136')
        )
    }
}