class Libro{
	constructor(id, titulo, autor, anio, edicion, isbn, paginas, editorial, genero){
		this.titulo = titulo;
		this.id = id;
		this.autor = autor;
		this.anio = anio;
		this.edicion = edicion;
		this.isbn = isbn;
		this.paginas = paginas;
		this.genero = genero;
		this.editorial = editorial;
	}

	getTitulo(){
		return this.titulo;
	}

	getId(){
		return this.id;
	}

	getAutor(){
		return this.autor;
	}

	getISBN(){
		return this.isbn;
	}

	getGenero(){
		return this.genero;
	}

	to_string(){
		var cadena = this.id.toString() + ", ";
		cadena += this.titulo + ", ";
		cadena += this.autor + ", ";
		cadena += this.anio.toString() + ", ";
		cadena += this.edicion.toString() + ", ";
		cadena += this.isbn.toString() + ", ";
		cadena += this.paginas.toString() + ", ";
		cadena += this.genero.toString() + ", ";
		cadena += this.editorial + ", ";
	}
}

module.exports = Libro;