exports.run = {
   usage: ['menutype'],
   async: async (m, {
      client,
      args,
      isPrefix
   }) => {
      const option = args[0] || 1
      if (option == 1) return client.reply(m.chat, submenu1(isPrefix), m)
      if (option == 2) return client.reply(m.chat, submenu2(isPrefix), m)
      if (option == 3) return client.reply(m.chat, submenu3(isPrefix), m)
      if (option == 4) return client.reply(m.chat, submenu4(isPrefix), m)
      if (option == 5) return client.reply(m.chat, submenu5(isPrefix), m)
      if (option == 6) return client.reply(m.chat, submenu6(isPrefix), m)
      if (option == 7) return client.reply(m.chat, submenu7(isPrefix), m)
      if (option == 8) return client.reply(m.chat, submenu8(isPrefix), m)
      if (option == 9) return client.reply(m.chat, submenu9(isPrefix), m)
      if (option == 10) return client.reply(m.chat, submenu10(isPrefix), m)
   },
   error: false
}

const submenu1 = prefix => {
   return `*◦Contact the developer on WhatsApp wa.me/+212689349938◦*`

}

const submenu2 = prefix => {
   return `◦  ${prefix}antilink *on / off*
◦  ${prefix}antivirtex *on / off*
◦  ${prefix}filter *on / off*
◦  ${prefix}localonly *on / off*
◦  ${prefix}left *on / off*
◦  ${prefix}welcome *on / off*
◦  ${prefix}mute *1 / 0*
◦  ${prefix}everyone *text*
◦  ${prefix}hidetag *text*
◦  ${prefix}group *close / open*
◦  ${prefix}setdesc *text*
◦  ${prefix}setname *text*
◦  ${prefix}setleft *text*
◦  ${prefix}setwelcome *text*
◦  ${prefix}kick *mention or reply*
◦  ${prefix}demote *mention or reply*`
}

const submenu3 = prefix => {
   return `◦  ${prefix}fb *link*
◦  ${prefix}ig *link*
◦  ${prefix}mediafire *link*
◦  ${prefix}play *query*
◦  ${prefix}pin *link*
◦  ${prefix}tiktok *link*
◦  ${prefix}tikmp3 *link*
◦  ${prefix}twitter *link*
◦  ${prefix}ytmp3 *link*
◦  ${prefix}ytmp4 *link*
◦  ${prefix}vid
◦  ${prefix}gitclone (Limit)
◦  ${prefix}igstalk
◦  ${prefix}wallpaper
◦  ${prefix}wallpaper2`
}

const submenu4 = prefix => {
   return `◦  ${prefix}yts
◦  ${prefix}wikipedia
◦  ${prefix}image
◦  ${prefix}stickerline 
◦  ${prefix}apk
◦  ${prefix}setmsg
◦  ${prefix}vid`
}

const submenu5 = prefix => {
   return `◦  ${prefix}stiker or s
◦  ${prefix}smeme (Limit)
◦  ${prefix}attp
◦  ${prefix}getexif
◦  ${prefix}stikergif
◦  ${prefix}stikergif
◦  ${prefix}stikerline <url> (Limit)
◦  ${prefix}toimg
◦  ${prefix}toimg2
◦  ${prefix}ttp
◦  ${prefix}wm
◦  ${prefix}take`
}

const submenu6 = prefix => {
   return `◦  ${prefix}google
◦  ${prefix}googlef
◦  ${prefix}gimage
◦  ${prefix}image 
◦  ${prefix}pinterest
◦  ${prefix}fetch
◦  ${prefix}get
◦  ${prefix}kbbi
◦  ${prefix}lyrics
◦  ${prefix}wikipedia
◦  ${prefix}tr`
}

const submenu7 = prefix => {
   return `◦  ${prefix}.yotsuba
◦  ${prefix}shinomiya
◦  ${prefix}yumeko
◦  ${prefix}tejina
◦  ${prefix}Ichiho
◦  ${prefix}loli
◦  ${prefix}cosplay
◦  ${prefix}shota
◦  ${prefix}boruto
◦  ${prefix}kaori
◦  ${prefix}shizuka
◦  ${prefix}kaga
◦  ${prefix}kotori
◦  ${prefix}mikasa
◦  ${prefix}akiyama
◦  ${prefix}gremory
◦  ${prefix}isuzu
◦  ${prefix}shina
◦  ${prefix}kagura
◦  ${prefix}shinka
◦  ${prefix}eba
◦  ${prefix}elaina`
}
const submenu8 = prefix => {
   return `◦  ${prefix}lolice
◦  ${prefix}itssostupid
◦  ${prefix}iss
◦  ${prefix}stupid
◦  ${prefix}blur
◦  ${prefix}gay
◦  ${prefix}hornycard
◦  ${prefix}hornylicense
◦  ${prefix}pixel
◦  ${prefix}simpcard
◦  ${prefix}ytcomment`
}

const submenu9 = prefix => {
   return `◦  ${prefix}tomp3
◦  ${prefix}tovn
◦  ${prefix}bass
◦  ${prefix}blown
◦  ${prefix}deep
◦  ${prefix}earrape
◦  ${prefix}fast
◦  ${prefix}fat
◦  ${prefix}nightcore
◦  ${prefix}reverse
◦  ${prefix}robot
◦  ${prefix}slow
◦  ${prefix}smooth
◦  ${prefix}tupai`
}

const submenu10 = prefix => {
   return `◦  ${prefix}join *link group Whatsapp*
◦  ${prefix}gimage
◦  ${prefix}image
◦  ${prefix}ping
◦  ${prefix}speed
◦  ${prefix}del
◦  ${prefix}delete
◦  ${prefix}halah
◦  ${prefix}hilih
◦  ${prefix}huluh
◦  ${prefix}heleh
◦  ${prefix}holoh
◦  ${prefix}qr
◦  ${prefix}qrcode
◦  ${prefix}readmore
◦  ${prefix}spoiler
◦  ${prefix}readviewonce
◦  ${prefix}style
◦  ${prefix}tts
◦  ${prefix}yts
◦  ${prefix}ytsearch
◦  ${prefix}tr`
}
