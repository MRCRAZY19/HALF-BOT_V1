const { decode } = require('html-entities')
exports.run = {
   usage: ['rx', 'rex'],
   async: async (m, {
      client,
      text,
      args,
      isPrefix,
      command
   }) => {
      try {
         if (!text) return client.reply(m.chat, Func.example(isPrefix, command, 'FB'), m)
         client.sendReact(m.chat, '🕒', m.key)
         let json = await Api.rexdl(text)
         if (!json.status) return client.reply(m.chat, Func.jsonFormat(json), m)
         let dt = `乂  *R E X D L*\n\n`
         dt += '	◦  *Name* : ' + json.data.name + '\n'
         dt += '	◦  *category* : ' + json.data.category + '\n'
         dt += '	◦  *publish* : ' + json.data.publish + '\n'
         dt += '	◦  *desc* : ' + json.data.desc + '\n'
         dt += '	◦  *url* : ' + json.data.url + '\n\n'
         dt += global.footer
       //  let chSize = Func.sizeLimit(json.data.size, global.max_upload)
         
        client.reply(m.chat, dt, m)
      } catch {
         return client.reply(m.chat, global.status.error, m)
      }
   },
   error: false,
   limit: true,
   cache: true,
   location: __filename
}
