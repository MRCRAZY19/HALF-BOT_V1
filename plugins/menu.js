  exports.run = {
   usage: ['menu', 'help', 'bot'],
   async: async (m, {
      client,
      isPrefix
   }) => {
      let rows = [{
         title: 'HELP',
         rowId: `${isPrefix}menutype 1`,
         description: ``
      }, {
         title: 'GROUP-MENU',
         rowId: `${isPrefix}menutype 2`,
         description: ``
      }, {
         title: 'DOWNLOAD-MENU',
         rowId: `${isPrefix}menutype 3`,
         description: ``
      }, {
         title: 'SEARCH-MENU',
         rowId: `${isPrefix}menutype 4`,
         description: ``
         }, {
         title: 'STICKERS-MENU',
         rowId: `${isPrefix}menutype 5`,
         description: ``
         }, {
         title: 'INTERNET-MENU',
         rowId: `${isPrefix}menutype 6`,
         description: ``
         }, {
         title: 'ANIME-MENU',
         rowId: `${isPrefix}menutype 7`,
         description: ``
         }, {
         title: 'IMAGE-MENU',
         rowId: `${isPrefix}menutype 8`,
         description: ``
         }, {
         title: 'AUDIO-MENU',
         rowId: `${isPrefix}menutype 9`,
         description: ``
         }, {
         title: 'TOOLS-MENU',
         rowId: `${isPrefix}menutype 10`,
         description: ``
      }]
      let text = '𝗛𝗔𝗟𝗙 𝗕𝗢𝗧\n'
      text += '𝙱𝚈\n'
      text += '𝗠𝗥 𝗬𝗢𝗨𝗖𝗛𝗡\n'
      text += '◦ *instagram* : http://instagram.com/mr_johan_shezir\n'
      text += '◦ *facebook* : https://www.facebook.com/profile.php?id=100027327995013'
      await client.sendList(m.chat, '', text, '', 'click!', [{
         rows
      }], m)
   },
   error: false
}
