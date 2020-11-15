const Libro = require('./libro.js');

class LibroController{
	constructor(){
		this.libros = [];
	}

	addLibro(libro){
		if(libro instanceof Libro){
			if(!(libro.getId() in this.libros)){
				this.libros[libro.getId()] = libro;
			}
			else{
				throw "Identificador del libro existente";
			}
		}
		else{
			throw "No es un libro";
		}
		
	}

	getLibro(id){
		if(id in this.libros){
			return this.libros[id];
		}
		else{
			throw "El identificador del libro no existe";
		}
	}
}

module.exports = LibroController;