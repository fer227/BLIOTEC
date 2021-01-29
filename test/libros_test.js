var expect = require("chai").expect;
const Libro = require('../src/libros/libro.js');
const LibroController = require('../src/libros/libroController.js');
const Valoracion = require("../src/libros/valoracion.js");

describe("Test sobre adición de libros: ", function() {
	it("Crear un libro, añadirlo correctamente y devolverlo por el id", function() {
		lc = new LibroController();
		libro = new Libro(1, "Los Juegos del Hambre", "Suzanne Collins", 2008, 1, 9780439023481, 374, "Scholastic Corporation", "CIENCIAFICCION");
		lc.addLibro(libro);
		libro_from_lc = lc.getLibro(1);
		expect(libro_from_lc.to_string()).to.equal(libro.to_string());
	})
});

describe("Test sobre valoraciones: ", function() {
	it("Comprobamos que se añaden las valoraciones correctamente", function(){
		lc = new LibroController();
		valoracion1 = new Valoracion(1, 9780439023481, "fernando", 9, "Lo recomiendo mucho.");
		valoracion2 = new Valoracion(2, 9876122673, "carla", 7, "Me encantó!");
		lc.addValoracion(valoracion1);
		lc.addValoracion(valoracion2);
		valoraciones = lc.getValoracionLibro(1);
		expect(valoraciones["fernando"].to_string()).to.equal(valoracion1.to_string());
	})
});

describe("Test para obtener libros de un género: ", function() {
	it("Debería obtener los libros de un género que indicamos", function(){
		lc = new LibroController();
		libro1 = new Libro(1, "Los Juegos del Hambre", "Suzanne Collins", 2008, 1, 9780439023481, 374, "Scholastic Corporation", "CIENCIAFICCION");
		libro2 = new Libro(2, "El Corredor del Laberinto", "James Dashner", 2009, 1, 9876122673, 398 , "LECTORUM PUBN INC", "CIENCIAFICCION");
		libro3 = new Libro(3, "El Cuento de la Criada", "Margaret Atwood", 2017, 020, 9788498388015, 416 , "Ediciones Salamandra", "DRAMA");
		lc.addLibro(libro1);
		lc.addLibro(libro2);
		lc.addLibro(libro3);
		libros = lc.getLibrosByGenero(2);
		expect(libros.length).to.equal(2);
		expect(libros[0]).to.equal(libro1);
		expect(libros[1]).to.equal(libro2);
	})
});