# outlook_addin
OUTLOOK addin basic setup and tests.

The demo is all about entering data in the body of the mail through the extention.
The project is being controlled from the app.component.ts and app.component.html files.

The basic structure has been created as per the commands to get started with addins in Outlook documentation or you can check below:

Prerequisites

	# Node.js
	# Install the latest version of Yeoman and the Yeoman generator for Office Add-ins globally.
	# PowerShell


> npm install -g yo generator-office
  
# Create the add-in project

Create a folder on your local drive and name it my-outlook-addin. This is where you'll create the files for your add-in.
Navigate to your new folder.
PowerShell
>cd my-outlook-addin

Use the Yeoman generator to create an Outlook Add-in project. Run the following command and then answer the prompts as follows:
PowerShell


>yo office

NOTE: For more please visit the office page.
        https://docs.microsoft.com/en-us/outlook/add-ins/quick-start?tabs=visual-studio-code

Basic setup uses:
	XML/manifest file
	HTML/javascript along with Angular v5.0

To view the demo just setup the project follow the instructions given below:

1.Install the project or Clone the repo using git account.

 https://github.com/sanjeev121/outlook_addin.git

2.Install dependencies using 

 npm i 

3.serve the project using

 npm start

4.To test the application just go to the Outlook office in browser.Login to the outlook account and follow the instructions given below:
	a.Go to the new message.
	b.In the compose look for the dropdown in the icons available.
	c.Select manage addin in the dropdown.
	d.Select My Addins option > Select custom Addin > Install from file > Select the file i.e XML
	e.Reload the browser and follow same to step c. to see Your addin.

>> You can refer to the docs porvided by the Office to how to install and use addins. 

https://dev.office.com/reference/add-ins/outlook/1.1/index

Addin Prerequisites:

NOTE: Use test2 manifest file for the COMPOSE mail testing.
      Use test manifest file for the TASK-PANE operations i.e READ.
