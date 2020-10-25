class Libro{
	constructor(id, titulo, autor, anio, edicion, isbn, paginas, editorial){
		this.titulo = titulo;
		this.id = id;
		this.autor = autor;
		this.anio = anio;
		this.edicion = edicion;
		this.isbn = isbn;
		this.paginas = paginas;
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

	getAnio(){
		return this.anio;
	}

	getEdicion(){
		return this.edicion;
	}

	getISBN(){
		return this.isbn;
	}

	getPaginas(){
		return this.paginas;
	}

	getEditorial(){
		return this.editorial
	}
}