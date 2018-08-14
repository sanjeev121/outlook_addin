import { Component } from '@angular/core';


import template from './app.component.html';
@Component({
    selector: 'app-home',
    template
})
export default class AppComponent
 {
    welcomeMessage = 'Welcome Sanjeev';
    textbind = '';
    async callthis(textfill){
        var b = Office.context.mailbox.item.body.getAsync('text',
        function (async) {
        // console.log(async.value,"Mail content")    
        console.log(Office.context.mailbox.item,"Its the item",async)
        var today = new Date();
         var subject = 'Summary for ' + today.toLocaleDateString();
            Office.context.mailbox.item.body.setAsync(textfill, {
                valueFormat: "unformatted",
                filterType: "all",
            },
            function (result) {
                console.log(result,"Abe chal ja")
                if (result.status === "succeeded") {
                    var dataValue = result.value; // Get selected data.
                    console.log('Selected data is ' + dataValue);
                } else {
                    var err = result.error;
                    console.log(err + ":::::::::::: ");
                }
            });  
        });
        var a = Office.context.mailbox.item.body;
        console.log('You have clicked the button.',a.subject)
    }
    async run() {
        var subject = {
            
        }
        var message = 'by Sanjeev'
        // var text = document.getElementById('message').innerText += message;	
        // console.log(text,"Text")
        if(Office.context.mailbox.item.subject == null || Office.context.mailbox.item.subject == undefined ){
            console.log('No subject Found.')
        }else{
            console.log(Office.context.mailbox.item.subject,"Message subject")
        }
        // Office.context.mailbox.item.subject.getAsync(
        //                 function (asyncResult) {
        //                     if (asyncResult.status == 
        //                         Office.AsyncResultStatus.Failed){
        //                         write(asyncResult.error.message);
        //                     }
        //                     else {
        //                         console.log(asyncResult,'Done')
        //                         // Successfully set data in item body.
        //                         // Do whatever appropriate for your scenario,
        //                         // using the arguments var3 and var4 as applicable.
        //                     }
        //                  });
        console.log('Your outlook code will run here')
        /**
         * Insert your Outlook code here
         * 
         */
    }
}