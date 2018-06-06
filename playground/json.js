console.log('Starting json.js');

/*var obj = {

	name: "Mahesh"
};

var stringobj = JSON.stringify(obj);
console.log(typeof stringobj);
console.log(stringobj);


var string = '{"name": "Mahesh","Age":"20"}';
var obj = JSON.parse(string);
console.log(typeof obj);
console.log(obj);
*/
const fs=require('fs');

var originalNote = {

	title: "some title",
	body: "this is notes"
};

var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json',originalNoteString);

var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString);
console.log(note.title);


