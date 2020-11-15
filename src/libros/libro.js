class Libro{
	constructor(id, titulo, autor, anio, edicion, isbn, paginas, editorial, genero){
		let ngenero = this.comprobarTipos(id, titulo, autor, anio, edicion, isbn, paginas, editorial, genero);
		this.titulo = titulo;
		this.id = id;
		this.autor = autor;
		this.anio = anio;
		this.edicion = edicion;
		this.isbn = isbn;
		this.paginas = paginas;
		this.genero = ngenero;
		this.editorial = editorial;
	}

	comprobarTipos(id, titulo, autor, anio, edicion, isbn, paginas, editorial, genero){
		if((typeof id === 'number') && (typeof titulo === 'string') && (typeof paginas === 'number') && (typeof genero === 'string') && (typeof autor === 'string') && (typeof anio === 'number') && (typeof edicion === 'number') && (typeof isbn === 'number')){
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