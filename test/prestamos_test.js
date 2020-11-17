var expect = require("chai").expect;
const Prestamo = require('../src/prestamos/prestamo.js');
const PrestamoController = require('../src/prestamos/prestamoController.js');

describe("Test sobre adición de préstamos: ", function(){
	it("Crear un nuevo préstamo, añadirlo correctamente y devolverlo por el identificador", function(){
		rango = 10;
		pc = new PrestamoController();
		var today = new Date();
		prestamo = new Prestamo(0, 11, "fernando", today);
		pc.addPrestamo(prestamo);
		prestamo_from_pc = pc.getPrestamo(0);
		expect(prestamo_from_pc.to_string()).to.equal(prestamo.to_string());
	})
});
