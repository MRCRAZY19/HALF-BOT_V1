
exports.run = {
   usage: ['maths'],
   async: async (m, {
      client,
      isPrefix
   }) => {
      let rows = [
         {
         title: 'LEÇON 1',
         rowId: `${isPrefix}mediafire https://www.mediafire.com/file/4hq1nadce9yq6lz/examens_bac_PC_SC.PHYS_2008_-_2016_avec_corr.rar`,
         description: `insta : @mr_johan_shezir`
         },

         {
         title: 'LEÇON 2',
         rowId: `${isPrefix}mediafire https://www.mediafire.com/file/4hq1nadce9yq6lz/examens_bac_PC_SC.PHYS_2008_-_2016_avec_corr.rar`,
         description: `insta : @mr_johan_shezir`
         }

]
      let text = '💟 *MATHEMATIQUES* ❤️😇\n\n'
      text += '◦ *💟DEVELOPER* : *𝗠𝙍 𝗬𝗢𝗨𝗖𝗛𝗡*\n'
      text += '◦ *💟INSTAGRAM* : https://Instagram.com/mr_johan_shezir *(v2.2.0)*\n\n'
      text += 'If you find an error or want to upgrade premium plan contact the owner.'
      await client.sendList(m.chat, '', text, '', 'CLICK HERE!', [{
         rows
      }], m)
   },
   error: false
}
