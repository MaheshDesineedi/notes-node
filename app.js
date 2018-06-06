//console.log('Starting app.js');

const fs =require('fs');
const os=require('os');
const yargs = require('yargs');//third-party

const notes = require('./notes.js'); 

const titleoptions = {
	describe: 'This is title',
	demand: true,
	alias: 't'
};

const bodyoptions = {
	describe: 'This is Body',
	demand: true,
	alias: 'b'
};
const argv = yargs
	.command('add','Add a note',{
		title: titleoptions,
		body: bodyoptions
	})
	.command('list','All notes listed')
	.command('read','Get a Note',{
		title : titleoptions
	})
	.command('remove','Removes a Note',{
		title : titleoptions
	})
	.help()
	.argv;
//console.log(argv);
//console.log(process.argv);
var command = argv._[0];
console.log('Command:',command);
//console.log(argv);


if(command == 'list'){

	var allNotes = notes.getAll();
	allNotes.forEach((note) => notes.logNote(note));

}else if(command == 'add'){

	var note = notes.addNote(argv.title,argv.body);
	if(note)
	{
		console.log('Note Created');
		notes.logNote(note);
	}
	else
		console.log('note already exists');

} else if(command == 'remove'){

	var noteRemoved = notes.removeNotes(argv.title);
	var message = noteRemoved ? 'Note Removed' : 'Note not found';
	console.log(message);


} else if(command == 'read') {

	var read = notes.getNote(argv.title);
	debugger;
		if(read) {
			notes.logNote(read);
		}
		else {
			console.log('Note not found');
		}

}
else{
		console.log('command not recognized');
	}
