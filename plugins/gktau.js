//let { MessageType } = require('@adiwajshing/baileys')
let { MessageType } = (await import('@adiwajshing/baileys')).default
let handler = async (m, { conn, text, participants }) => {
  let users = participants.map(u => u.jid)
  m.reply(text + '\n Hai Saya 𝐍𝐀𝐘-𝐌𝐃 Jangan Lupa follow ig neohihin21\n\nAtau bisa klik link Youtube : https://instagram.com/neohihin21 ', null, {
    contextInfo: { mentionedJid: users }
  })
}
handler.command = ['zyko-md']

handler.admin = false
handler.group = false

export default handler
