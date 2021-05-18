console.log('Starting notes.js');

//console.log(module);

module.exports.age = 25;

module.exports.addNote=()=>{
	let d = new Date()
	console.log('anotada')
	return 'Nova nota '+d.toLocaleString("pt-BR") ;
}
