const notes = require('./notes');
const chalk = require('chalk');
const yargs = require('yargs');



yargs.version('1.1.0')
// add notes, remove notes, read notes, list 

// Create add command 

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note description',
            demandOption: true,
            type: 'string'
        },
    },
    handler: function (argv){
        notes.addNotes(argv.title, argv.body)
    }
})

// remove command 

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'}
    },
    handler: function(argv){
        notes.removeNotes(argv.title)
    }
    })

// list 
yargs.command({
    command: 'list',
    describe: 'list notes',
    handler: function(){
        console.log('listing the note')
    }
})

// read 

yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function(){
        console.log('reading the notes')
    }
})

yargs.parse();


