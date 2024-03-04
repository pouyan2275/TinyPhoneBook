// var Service = require('../lib/node-windows.js').Service;
var Service = require('node-windows').Service;
var dir = require('path').join(__dirname, 'index.ts')

// Create a new service object
var svc = new Service({
  name:'tinyphonebookB',
  description: 'tiny phone book listening on port 3001',
  script: dir,
});

// Listen for the "install" event, which indicates the
// process is available as a service.
svc.on('install',function(){
  svc.start();
});

// Just in case this file is run twice.
svc.on('alreadyinstalled',function(){
  console.log('This service is already installed.');
});

// Listen for the "start" event and let us know when the
// process has actually started working.
svc.on('start',function(){
  console.log(svc.name+' started!\nVisit http://127.0.0.1:3001 to see it in action.');
});

// Install the script as a service.
console.log("Installing to", dir)
svc.install();