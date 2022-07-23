
exports.run = {
   usage: ['phylo'],
   async: async (m, {
      client,
      isPrefix
   }) => {
      let rows = [
         {
         title: 'مجزوءة الوضع البشري - الشخص بين الضرورة والحرية - مراجعة وشرح بالامتلة + 100% فهم | الحصة رقم 3',
         rowId: `https://www.youtube.com/watch?v=d5ORIVaY9A8&ab_channel=%D9%85%D9%88%D9%84%D8%A7%D9%84%D9%81%D9%84%D8%B3%D9%81%D8%A9molfalsafa`,
         description: `𝗠𝙍 𝗬𝗢𝗨𝗖𝗛𝗡`
         },
          {
         title : 'مجزوءة الوضع البشري - الشخص والهوية - مراجعة وشرح بالامتلة + 100% فهم | الحصة رقم 1',
         rowId: `https://www.youtube.com/watch?v=77YH8aqBCRE&ab_channel=%D9%85%D9%88%D9%84%D8%A7%D9%84%D9%81%D9%84%D8%B3%D9%81%D8%A9molfalsafa`,
         description: `𝗠𝙍 𝗬𝗢𝗨𝗖𝗛𝗡`
         },
          {
         title : 'مجزوءة الوضع البشري - الشخص بوصفه قيمة - مراجعة وشرح بالامتلة + 100% فهم | الحصة رقم 2',
         rowId: `https://www.youtube.com/watch?v=zb1XPmueFgM&ab_channel=%D9%85%D9%88%D9%84%D8%A7%D9%84%D9%81%D9%84%D8%B3%D9%81%D8%A9molfalsafa`,
         description: `𝗠𝙍 𝗬𝗢𝗨𝗖𝗛𝗡`
         },
          {
         title : 'قيمة الاطروحة وحدودها - كيفاش تضمن 3 نقاط فالوطني !!',
         rowId: `https://www.youtube.com/watch?v=bszcBUhOhHE&ab_channel=%D9%85%D9%88%D9%84%D8%A7%D9%84%D9%81%D9%84%D8%B3%D9%81%D8%A9molfalsafa`,
         description: `𝗠𝙍 𝗬𝗢𝗨𝗖𝗛𝗡`
         },
          {
         title : 'مجزوءة الوضع البشري - وجود الغير - مراجعة وشرح بالامتلة + 100% فهم | الحصة رقم 4',
         rowId:` https://www.youtube.com/watch?v=eOyhLvIAyQE&ab_channel=%D9%85%D9%88%D9%84%D8%A7%D9%84%D9%81%D9%84%D8%B3%D9%81%D8%A9molfalsafa`,
         description: `𝗠𝙍 𝗬𝗢𝗨𝗖𝗛𝗡`
         },
          {
         title : 'مجزوءة الوضع البشري - معرفة الغير - مراجعة وشرح بالامتلة + 100% فهم | الحصة رقم 5',
         rowId: `https://www.youtube.com/watch?v=dmQgl277bWI&ab_channel=%D9%85%D9%88%D9%84%D8%A7%D9%84%D9%81%D9%84%D8%B3%D9%81%D8%A9molfalsafa`,
         description: `𝗠𝙍 𝗬𝗢𝗨𝗖𝗛𝗡`
         },
          {
         title : 'مجزوءة الوضع البشري - العلاقة مع الغير - مراجعة وشرح بالامتلة + 100% فهم | الحصة رقم 6',
         rowId: `https://www.youtube.com/watch?v=KU6rW8eAMts&ab_channel=%D9%85%D9%88%D9%84%D8%A7%D9%84%D9%81%D9%84%D8%B3%D9%81%D8%A9molfalsafa`,
         description: `𝗠𝙍 𝗬𝗢𝗨𝗖𝗛𝗡`
         },
          {
         title : 'مفهوم التاريخ - المعرفة التاريخية - شرح بالامثلة من الواقع 100% فهم ( الوضع البشري )',
         rowId: `https://www.youtube.com/watch?v=x2ybZYHkjBI&ab_channel=%D9%85%D9%88%D9%84%D8%A7%D9%84%D9%81%D9%84%D8%B3%D9%81%D8%A9molfalsafa`,
         description: `𝗠𝙍 𝗬𝗢𝗨𝗖𝗛𝗡`
         },
          {
         title : 'احسن ملخص لدرس الدولة مجزوءة السياسة / الدقيقة 90',
         rowId: `https://www.youtube.com/watch?v=QqEHnB6O9io&ab_channel=%D9%85%D9%88%D9%84%D8%A7%D9%84%D9%81%D9%84%D8%B3%D9%81%D8%A9molfalsafa`,
         description: `𝗠𝙍 𝗬𝗢𝗨𝗖𝗛𝗡`
         },
          {
         title : 'منهجية النص - منهجية القولة - منهجية السؤال / افهم وطبق 18/20 مضمونة',
         rowId: `https://www.youtube.com/watch?v=9bY7XcB_kw4&ab_channel=%D9%85%D9%88%D9%84%D8%A7%D9%84%D9%81%D9%84%D8%B3%D9%81%D8%A9molfalsafa`,
         description: `𝗠𝙍 𝗬𝗢𝗨𝗖𝗛𝗡`
         },
          {
         title : 'احسن ملخص لدرس الغير مجزوءة الوضع البشري / الدقيقة 90',
         rowId: `https://www.youtube.com/watch?v=0SeudX37-Wg&ab_channel=%D9%85%D9%88%D9%84%D8%A7%D9%84%D9%81%D9%84%D8%B3%D9%81%D8%A9molfalsafa`,
         description: `𝗠𝙍 𝗬𝗢𝗨𝗖𝗛𝗡`
         }
          /*{
         title : '',
         rowId: ``,
         description: `𝗠𝙍 𝗬𝗢𝗨𝗖𝗛𝗡`
         },
          {
         title : '',
         rowId: ``,
         description: `𝗠𝙍 𝗬𝗢𝗨𝗖𝗛𝗡`
         },
          {
         title : '',
         rowId: ``,
         description: `𝗠𝙍 𝗬𝗢𝗨𝗖𝗛𝗡`
         },
          {
         title : '',
         rowId: ``,
         description: `𝗠𝙍 𝗬𝗢𝗨𝗖𝗛𝗡`
         },
          {
         title : '',
         rowId: ``,
         description: `𝗠𝙍 𝗬𝗢𝗨𝗖𝗛𝗡`
         },
          {
         title : '',
         rowId: ``,
         description: `𝗠𝙍 𝗬𝗢𝗨𝗖𝗛𝗡`
         },
          {
         title : '',
         rowId: ``,
         description: `𝗠𝙍 𝗬𝗢𝗨𝗖𝗛𝗡`
         },
          {
         title : '',
         rowId: ``,
         description: `𝗠𝙍 𝗬𝗢𝗨𝗖𝗛𝗡`
         },
*/
  

]
      let text = '🏚️ *PHYLOSOPHIE* 📖\n\n'
      text += '𝗛𝗔𝗟𝗙 𝗕𝗢𝗧\n'
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