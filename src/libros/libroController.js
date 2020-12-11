const Libro = require('./libro.js');
const Valoracion = require('./valoracion.js');

class LibroController{
	constructor(){
		this.libros = [];
		this.valoraciones = [];
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

	addValoracion(valoracion){
		if(valoracion instanceof Valoracion){
			//Vemos si hay valoraciones de ese libro.
			if(valoracion.getISBN() in this.valoraciones){
				//En caso afirmativo, lo añadimos. En caso de que el usuario ya tenía una valoración, simplemente la sustituye
				this.valoraciones[valoracion.getISBN()][valoracion.getUsername()] = valoracion;
			}
			else{
				//Le creamos una entrada
				this.valoraciones[valoracion.getISBN()] = [];
				this.valoraciones[valoracion.getISBN()][valoracion.getUsername()] = valoracion;
			}
		}
		else{
			throw "No es una valoración";
		}
	}

	getValoracionLibro(isbn){
		if(isbn in this.valoraciones){
			return this.valoraciones[isbn];
		}
		else{
			return 0;
		}
	}

	getLibrosByGenero(genero){
		if((typeof genero === 'number' ) && (genero > 0 && genero < 10)){
			let libros = [];
			Object.values(this.libros).forEach(libro => {
				if(libro.getGenero() == genero){
					libros.push(libro);
				}
			});
			return libros;
		}
		else{
			throw "El género no es correcto";
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