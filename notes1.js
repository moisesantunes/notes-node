console.log('Starting notes.js');

//console.log(module);

module.exports.age = 25;


var addNote=(title, body) => {
  console.log('Adding note', title, body);
	
}

var getNote = (title) => {
  console.log('Getting note', title);
};

var getAll = () => {
  console.log('Getting all notes');
};

var removeNote = (title) => { 
 console.log('Removing note', title);
};

/*
	let d = new Date()
	console.log('anotada')
	return 'Nova nota '+d.toLocaleString("pt-BR") ;

*/
module.exports= {
	addNote:addNote,
	getAll:getAll,
	getNote:getNote,
	removeNote:removeNote
	
}
