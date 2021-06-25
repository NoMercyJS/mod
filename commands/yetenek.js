const Discord = require('discord.js')
module.exports = {
    name: "yetenek",
    aliases: ["Yetenek"],
    run: async(client, message, args) => {
        message.channel.send(new Discord.MessageEmbed()
        .setTitle('Rol Yardım Menüsü!')
        .setDescription(`\ Öncelikle bir rol vermek istiyorsanız <@&817318032971006001> rolüne sahip olmalısınız. Bu komut sayesinde aşağıdaki rolleri kullanıcılara verebilirsiniz!

        ——————————————————————————————

        <a:yildiz:818789606585008148>: \`.vocal @Ducky/ID\`

        <a:yildiz2:819278348056002650>: \`.şair @Ducky/ID\`

        <a:yildiz:818789606585008148>: \`.designer @Ducky/ID\`

        <a:yildiz2:819278348056002650>: \`.sponsor @Ducky/ID\`

        <a:yildiz:818789606585008148>: \`.streamer @Ducky/ID\`


`)
            .setThumbnail(message.guild.iconURL({ dynamic: true }))
            .setColor('2F3136')
        )
    }
}