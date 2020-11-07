const Libro = require('./libro.js');

class LibroController{
	constructor(){
		this.libros = [];
	}

	addLibro(id, titulo, autor, anio, edicion, isbn, paginas, editorial, genero){
		let ngenero = this.comprobarTipos(id, titulo, autor, anio, edicion, isbn, paginas, editorial, genero);
		if(!(id in this.libros)){
				var libro = new Libro(id, titulo, autor, anio, edicion, isbn, paginas, editorial, ngenero);
				this.libros[id] = libro;
			}
			else{
				throw "Identificador del libro existente";
			}
		}
	}

	comprobarTipos(id, titulo, autor, anio, edicion, isbn, paginas, editorial, genero){
		if((typeof id === 'number') && (typeof titulo === 'string') && (typeof paginas === 'number') && (typeof genero === 'string') && (typeof autor === 'string') && (typeof anio === 'number') && (typeof edicion === 'string') && (typeof isbn === 'string')){
			let ngenero = this.comprobarGenero(genero);
			return ngenero;
		}
		else{
			throw "Los datos del libro no son correctos";
		}
	}

	comprobarGenero(genero){
		//tratamos el género como un número internamente
		switch(genero){
			case "TERROR":
				return 1;
			case "CIENCIAFICCION":
				return 2;
			case "COMIC":
				return 3;
			case "DRAMA":
				return 4;
			case "INFANTIL":
				return 5;
			case "ROMANTICA":
				return 6;
			case "DIDACTICA":
				return 7;
			case "HISTORICA":
				return 8;
			case "MISTERIO":
				return 9;
			default:
				throw "Género no válido";
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