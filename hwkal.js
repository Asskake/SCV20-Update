// Buat Lu Yang Jual Sc Ini Yang Jujur Jangan Samp Nipu Apalagi Lari Dari Tanggung Jawab

// Base Haikal Hw Mods : Copyan Dari Base Dika


const fs = require('fs')
const chalk = require('chalk')

global.gr = 'https://chat.whatsapp.com/I1ucFecSWvVFfe2X0HSyCd'
global.ig = '@Justto.39_' // ubah aja
global.email = 'ilonajanniekaitlyn@gmail.com' //serah
global.region = 'Teyvat' // serah
//—————「 Set Nama Own & Bot 」—————//
global.ownername = 'Shiroine' //ubah jadi nama mu, note tanda ' gausah di hapus!
//=================================================//
global.owner = ['62881024233402'] // ubah aja pake nomor lu
//==========================BY Hw Mods=======================//
global.keyopenai = `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`
//====================BY Hw Mods=============================//
global.botname = '𝐌𝐲𝐂𝐥𝐚𝐫𝐚' //ubah jadi nama bot mu, note tanda ' gausah di hapus!
global.packname = '𝐌𝐲𝐂𝐥𝐚𝐫𝐚' // ubah aja ini nama sticker
global.author = 'ᴼʷⁿᵉʳ ᴮᵒᵗ\n𝐌𝐲𝐂𝐥𝐚𝐫𝐚\n+62881024233402' // ubah aja ini nama sticker
global.prefa = ['','!','.',',','🐤','🗿']
global.sessionName = 'haikal' //Gausah Juga
global.sp = '⭔' // Gausah Juga
global.wlcm = []
global.wlcmm = []
global.anticall = true
//=================================================//
//Gausah Juga
global.limitawal = {
    premium: "Infinity",
    free: 50
}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
