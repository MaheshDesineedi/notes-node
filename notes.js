//console.log('starting notes.js');

//console.log(module);

//module.exports.age = 20;
const fs = require('fs');

var fetchNotes = () => {
	
	try {
		var noteobj = fs.readFileSync('notes-data.json');
		return JSON.parse(noteobj);

	} catch(e) {
		return [];
	}

};

var saveNotes = (notes) => {
	fs.writeFileSync('notes-data.json',JSON.stringify(notes));

};

var logNote = (note) => {
	console.log('--');
	console.log(`Tile: ${note.title}`);
	console.log(`Body: ${note.body}`);
};
var addNote= (title,body) =>{
	var notes = fetchNotes();
	var note = {
		title,
		body
	};

    var duplicateNotes = notes.filter((note) => {

    	return note.title === title;

    });
	//console.log(duplicateNotes);
    if (duplicateNotes.length == 0){

   		notes.push(note);
   		saveNotes(notes);
   		return note;	
   
    }
};

var getAll = () => {
	return fetchNotes();
};

var getNote = (title) => {

	var notes = fetchNotes();
	var noteread = notes.filter((note) => note.title === title);
	return noteread[0];//this is an array so returing its first and only element

};


var removeNotes = (title) => {
	var notes = fetchNotes();
	var filteredNotes = notes.filter((note) => note.title != title);
	//console.log(duplicateNotes);
	saveNotes(filteredNotes);

	return notes.length != filteredNotes.length;
};
module.exports = {

	addNote,
	getAll,
	getNote,
	removeNotes,
	logNote
};
