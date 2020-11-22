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
		valoracion1 = new Valoracion(9780439023481, "fernando", 9, "Lo recomiendo mucho.");
		valoracion2 = new Valoracion(9780439023481, "carla", 7, "Me encantó!");
		lc.addValoracion(valoracion1);
		lc.addValoracion(valoracion2);
		valoraciones = lc.getValoracionLibro(9780439023481);
		expect(valoraciones["fernando"].to_string()).to.equal(valoracion1.to_string());
		expect(valoraciones["carla"].to_string()).to.equal(valoracion2.to_string());
	})
});