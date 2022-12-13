const fs = require('fs')
const chalk = require('chalk')

global.owner = ['6289510497533']
global.ownerNumber = ["6289510497533@s.whatsapp.net"]
global.nomerOwner = "6289510497533"
global.namabotnya = 'IrfanStore'
global.namaownernya = 'IRFANFF9'
global.packname = '© IRFANFF9||+62🇲🇨\nI`m From Indonesia'
global.author = 'Wa : +62812-3548-0855\nYT : TheJoBot'
global.sessionName = 'session'
global.lolkey = 'RINTISAJA'
global.email = 'irfanbotwa@gmail.com'
global.group = 'https://chat.whatsapp.com/JZObD0euUnF2UknDp1UDn8'
global.youtube = 'https://youtube.com/channel/UCB2FsP3zAMlcfRz7iVs2D6A'
global.website = 'https://irfanff9-ipan.vercel.app'
global.github = 'https://github.com/irfaneva99'
global.nomorowner = 'https://wa.me/6289510497533'
global.region = 'I`m From Indonesia'
global.prefa = ['','!','.','#','-','•']
global.krmd = 
{
    success: '```Success✅```',
    admin: '```Fitur Khusus Admin Group!!!```',
    botAdmin: '```Bot Harus Menjadi Admin Terlebih Dahulu!!!```',
    owner: '```Fitur Khusus Owner Bot!!!```',
    group: '```Fitur Digunakan Hanya Untuk Group!!!```',
    private: '```Fitur Digunakan Hanya Untuk Private Chat!!!```',
    bot: '```Fitur Khusus Pengguna Nomor Bot!!!```',
    error: '```Mungkin Lagi Error Kak Harap Lapor Owner Biar Langsung Di Benerin🙏```',
    wait: '```Waittt...```'
}

global.thumb = fs.readFileSync('./THE JO BOT/image/thumb.jpg')
global.videokir = fs.readFileSync('./THE JO BOT/image/jobotz.mp4')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.yellowBright(`Update File Terbaru ${__filename}`))
delete require.cache[file]
require(file)
})