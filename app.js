console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs= require('yargs')
const yargv = yargs.argv
const notes = require('./notes1.js');

//console.log(process.argv);
//console.log('Yarg', yargv);

//var command = process.argv[2];
const argv = yargs.argv

var command = argv._[0];
console.log('Command: ', command);

//const argv = yargs.argv
//console.log('Command:', command);
//console.log('Yargs', argv);


if (command === 'add') {
  notes.addNote(argv.title, argv.body);
} else if (command === 'list') {
  notes.getAll();
} else if (command === 'read') {
  notes.getNote(argv.title);
} else if (command === 'remove') {
console.log('removendo')
  notes.removeNote(argv.title);
} else {
  console.log('Command not recognized');
}
