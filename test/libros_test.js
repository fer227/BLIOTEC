var expect = require("chai").expect;
const Libro = require('../src/libros/libro.js');
const LibroController = require('../src/libros/libroControler.js');

describe("Test sobre adición de libros: ", function() {
	it("Crear un libro, añadirlo correctamente y devolverlo por el id", function() {
		lc = new LibroController();
		lc.addLibro(1, "Los Juegos del Hambre", "Suzanne Collins", 2008, 1, 9780439023481, 374, "Scholastic Corporation", "CIENCIAFICCION");
		libro = new Libro(1, "Los Juegos del Hambre", "Suzanne Collins", 2008, 1, 9780439023481, 374, "Scholastic Corporation", "CIENCIAFICCION");
		libro_from_lc = uc.getLibro(1);
		expect(libro_from_lc.to_string()).to.equal(libro.to_string());
	})
});