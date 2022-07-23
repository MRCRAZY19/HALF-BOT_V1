exports.run = {

   usage: ['bot','mo3jam'],

   async: async (m, {

      client,

      text,

      args,

      isPrefix,

      command

   }) => {

      

     

     

     

     // ________________________________________________

     

     

     if (command == 'bot') {

       

       client.reply(m.chat, `bot dyl s7ab bac sf  .bac`, m)

       

      }

      

      // urbn 

      if (command == 'mo3jam') {

       

       client.reply(m.chat, `hmmmmm.........`, m)

      if (!text) return client.reply(m.chat, Func.example(isPrefix, command, command != 'artinama' ? 'yntkts' : 'wildan'), m)

      let json = await scrap.mo3jam(text)

      command != 'artinama' ? client.reply(m.chat, `${json.data.content}`, m) : client.reply(m.chat, `${json.data.content}`, m)

    

       

      }

     

     // ________________________________________________

     

     

   },

   error: false,

   private: false,

   limit: true,

   group: false,

   cache: true,

   location: __filename

}

         
