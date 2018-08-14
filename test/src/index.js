import 'zone.js'; // Required for Angular
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import AppModule from './app/app.module';

Office.initialize = reason => {
    document.getElementById('sideload-msg').style.display = 'none';
    // var abc = Office.context.mailbox.item.body.getAsync("html", processHtmlBody);
    var abc = Office.context.mailbox.item.body;
    console.log("Office loaded outside--------->",abc);
      var item = Office.context.mailbox.item.subject;
      console.log(item,"ITem")
      // loadItemProps(Office.context.mailbox.item);
    
    // var functionFile = function(){
    //   // var abc = Office.context.mailbox.item.body.getAsync("html", processHtmlBody);
    //   console.log(abc,'Is this the function to write code.')
    // }

    // Bootstrap the app
   
    platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(error => 
        console.error(error)
    );
};