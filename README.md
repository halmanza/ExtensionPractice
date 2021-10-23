# Extension Practice Development


## Built on Manifest Version 2

The objective was to create a simple extension that could pass data between the popup hmtl file and the backend script that's actively running. If you are transition to Manifest version 3, the implementation of the logic will be quite different. 

***In Manifest V. 3, the execution of the background.js (v2) has switched to using service_workers that complete a task and then terminate. The architecture of the new version is event based to get away from a persistant loop.*** 

This extension, creates a popup field with two buttons, each with a unique id, and the background.js applies a event listener for the button id value. Lastly, it sends the button selection stored data to the 'backend' and updates the current tab url with one of the two options. 