exports.run = {
   usage: ['apk'],
   async: async (m, {
      client,
      isPrefix
   }) => {
      let rows = [
         {
         title: ' 1- تطبيق DiskDigger Pro  النسخة المدفوعة من افضل تطبيق لاسترجاع الصور التي تم حدفها من الهاتف 😍  ',
         rowId: `${isPrefix}mediafire https://www.mediafire.com/download/snsvk7d43v5yvn5?fbclid=IwAR04fxKZonBaQ3B6clAlXNJ80N6h6WhAwwgDxvZan0yC2A1fV-vKcZffLog`,
         description: `𝗠𝙍 𝗬𝗢𝗨𝗖𝗛𝗡`
         },
          {
         title: '2- تطبيق PicsArt النسخة المدفوعة من اشهر التطبيقات للتعديل في الصور و الفيديوهات باعلى جودة و دقة 💜  ',
         rowId: `${isPrefix}mediafire https://www.mediafire.com/download/l77wywahr90xjhr?fbclid=IwAR33x7auenm_anSVfy0r87RMMDGqaaBQOqo3zKWrS3upyVZUYHLQEQUaY5g`,
         description: `𝗠𝙍 𝗬𝗢𝗨𝗖𝗛𝗡`
         },
          {
         title: '  3- تطبيق Spotify النسخة البريميوم من اشهر منصات الاستماع للاغاني باعلى جودة و امكانية تحميلها باعلى جودة  💪🏻',
         rowId: `${isPrefix}mediafire https://www.mediafire.com/download/utcsxnnz9619fo2?fbclid=IwAR1GFbLTiriCpqiTc7BDISjBhIVLppYPHyXmrNTCDhjRpSqUr1iIpXBHe44`,
         description: `𝗠𝙍 𝗬𝗢𝗨𝗖𝗛𝗡`
         },
          {
         title: ' 4- تطبيق TikTok النسخة المهكرة من التطبيق الغني عن التعريف حيث يمكنك تحميل الفيديوهات بدون علامة مائية و فلاتر اضافية 🥰 ',
         rowId: `${isPrefix}mediafire https://www.mediafire.com/download/69czp0015wvstcd?fbclid=IwAR0ZZz46g84DUDDxmA61B7Ce98vmkzZADP_9ZOMk8Eg811iLINLeP4wBLKA`,
         description: `𝗠𝙍 𝗬𝗢𝗨𝗖𝗛𝗡`
         },
          {
         title: ' 5-تطبيق AppLock النسخة المدفوعة من التطبيق المشهور الذي يمكنك من اخفاء الصور و الملفات و حمايتها وحماية التطبيقات و المعلومات الشخصية في هاتفك 🌟  ',
         rowId: `${isPrefix}mediafire https://www.mediafire.com/download/4rubsohmogrxmgl?fbclid=IwAR2SrDo2nuV--UprWF4DDjzj5d8EDqQv1ITlQlaJoWzG7DTwYslBaJggpQY`,
         description: `𝗠𝙍 𝗬𝗢𝗨𝗖𝗛𝗡`
         },
          
          {
         title: ' 6-  تطبيق Panda  Game  Booster النسخة المدفوعة  من اشهر التطبيقات التي تقوم بتسريع الالعاب و تخفيض درجة حرارة الهاتف و خصائص تساعدك اثناء اللعب 💫 ',
         rowId: `${isPrefix}mediafire https://www.mediafire.com/download/4ma2i22cteaumql?fbclid=IwAR0ytVS_aBl-lejAPChAWRMJ9jLjnYKLzK0SZ7g-EMYcefAfefF5QaZNpgY`,
         description: `𝗠𝙍 𝗬𝗢𝗨𝗖𝗛𝗡`
         },
          {
         title: ' 7- تطبيق Netflix 4 free  تطبيق مشابه لتطبيق Netflix  يمكنك مشاهدة الافلام و المسلسلات الجديدة و الحديثة بجودة عالية و بدون الدفع 🎉 ',
         rowId: `${isPrefix}mediafire https://www.mediafire.com/download/rx0yi8its0ayc7k?fbclid=IwAR188QP-awuJDw9W9GnCp5Ygg2PRN_Mb5G1PotSEe9U3Ng1EmDObVBNRXcE`,
         description: `𝗠𝙍 𝗬𝗢𝗨𝗖𝗛𝗡`
         },
        {
         title: ' 8- تطبيق InShot النسخة المدفوعة من اشهر التطبيقات  للمونتاج و تعديل الفيديوهات بجودة عالية و بسهولة تامة 💞 ',
         rowId: `${isPrefix}mediafire https://www.mediafire.com/download/fgi5pz02iicg31x?fbclid=IwAR3xL-qYKgAt4V6zQKUKxLfhKqbSeXb38u2W04oPpH7DHjnEkf-NMNmvvNY`,
         description: `𝗠𝙍 𝗬𝗢𝗨𝗖𝗛𝗡`
         },
        {
         title: ' 9- تطبيق  KineMaster النسخة المدفوعة من اشهر و اقدم التطبيقات في تعديل الفيديوهات و المونتاج بجودة عالية و بسهولة 🔥 ',
         rowId: `${isPrefix}mediafire https://www.mediafire.com/download/beu0pfo5q2fnc4i?fbclid=IwAR1sAvxSlBzavdntt3Xd2453o8tYRbniZ7IjVRBWgklulXq29LMcw0FAub4`,
         description: `𝗠𝙍 𝗬𝗢𝗨𝗖𝗛𝗡`
         },
        {
         title: ' - برنامج منع الاعلانات للاندرويد مدفوع  ',
         rowId: `${isPrefix}mediafire http://www.mediafire.com/file/9uequ09swq7d37j/AdGuard-Premium-v3.0.349_andro-dz_build_3000349_by_andro_dz_.apk/file?fbclid=IwAR2YsskrYSQgKnfGko-JcT6JZiVO4coQ0JKqwjhURXRdhtRpQc_-U-WJ6YM`,
         description: `inst- برنامج منع الاعلانات للاندرويد مدفوع a : 𝗠𝙍 𝗬𝗢𝗨𝗖𝗛𝗡`
         },
        {
         title: ' حدث أصدار من  تطبيق ES File Explorer File Manager v4.2.9.8 لإدراة الملفات وتنظيمها والقيام بوظائف مختلفة ',
         rowId: `${isPrefix}mediafire https://www.mediafire.com/file/sz1juank0xyylde?fbclid=IwAR3xL-qYKgAt4V6zQKUKxLfhKqbSeXb38u2W04oPpH7DHjnEkf-NMNmvvNY`,
         description: `𝗠𝙍 𝗬𝗢𝗨𝗖𝗛𝗡`
         },
         {
         title: ' أحدث أصدار من تطبيق Prayer Now pro v8.4.8 لمواقيت الصلاة والمؤذن وأذكار المسلم النسخة الكامل ',
         rowId: `${isPrefix}mediafire https://www.mediafire.com/file/xbksulb9sbv05sp/PrayerNow_v8.4.8_.apk/file?fbclid=IwAR2SrDo2nuV--UprWF4DDjzj5d8EDqQv1ITlQlaJoWzG7DTwYslBaJggpQY`,
         description: `𝗠𝙍 𝗬𝗢𝗨𝗖𝗛𝗡`
         }
]
      let text = ' *PREMIUM PROGRMM* \n\n'
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