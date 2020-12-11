var expect = require("chai").expect;
const Prestamo = require('../src/prestamos/prestamo.js');
const PrestamoController = require('../src/prestamos/prestamoController.js');

describe("Test sobre adición de préstamos: ", function(){
	it("Crear un nuevo préstamo, añadirlo correctamente y devolverlo por el identificador", function(){
		pc = new PrestamoController();
		var today = new Date();
		prestamo = new Prestamo(0, 11, "fernando", today);
		pc.addPrestamo(prestamo);
		prestamo_from_pc = pc.getPrestamo(0);
		expect(prestamo_from_pc.to_string()).to.equal(prestamo.to_string());
	})
});

describe("Test sobre renovación de préstamos: ", function(){
	it("Renovamos un libro dos veces (para comprobar que la reducción funciona correctamente) y nos tiene que devolver la nueva fecha de vencimiento correspondiente", function(){
		pc = new PrestamoController();
		var today = new Date();
		prestamo = new Prestamo(0, 11, "fernando", today);
		pc.addPrestamo(prestamo);
		pc.renovar(0);
		var new_limite = pc.renovar(0);
		today.setDate(today.getDate() + Prestamo.rango_prestamo*3 -1);
		str_expected = today.getFullYear().toString() + " " + today.getMonth().toString() + " " + today.getDate().toString();
		str_real = new_limite.getFullYear().toString() + " " + new_limite.getMonth().toString() + " " + new_limite.getDate().toString();
		expect(str_expected).to.equal(str_real);
	})
});

describe("Test sobre la devolución de libros: ", function(){
	it("Devolvemos un par de libros y comprobamos que las listas correspondientes son correctas",function(){
		pc = new PrestamoController();
		var today = new Date();
		prestamo1 = new Prestamo(0, 11, "fernando0", today);
		prestamo2 = new Prestamo(1, 12, "fernando1", today);
		prestamo3 = new Prestamo(2, 13, "fernando2", today);
		pc.addPrestamo(prestamo1);
		pc.addPrestamo(prestamo2);
		pc.addPrestamo(prestamo3);
		pc.devolver(0);
		pc.devolver(2);
		devueltos = pc.getPrestamosDevueltos();
		actuales = pc.getPrestamosActuales();

		expect(Object.keys(devueltos).length).to.equal(2);
		expect(Object.keys(actuales).length).to.equal(1);
		expect(actuales[1]).to.equal(prestamo2);
		expect(devueltos[0]).to.equal(prestamo1);
		expect(devueltos[2]).to.equal(prestamo3);
	})
});

describe("Obtener préstamos vencidos", function(){
	it("Debería obtener un array con los préstamos vencidos",function(){
		pc = new PrestamoController();
		var today = new Date();
		//este será el préstamo ok
		prestamo = new Prestamo(0, 11, "fernando", today);
		pc.addPrestamo(prestamo);
		//Los siguientes préstamos estarán vencidos. Tenemos en cuenta que el plazo son de 10 días así que tendremos que superar ese rango.
		today.setDate(today.getDate() - 11);
		prestamo0 = new Prestamo(1, 11, "fernando", today);
		pc.addPrestamo(prestamo0);
		today.setDate(today.getDate() - 2);
		prestamo1 = new Prestamo(2, 11, "fernando", today);
		pc.addPrestamo(prestamo1);

		vencidos = pc.getPrestamosVencidos();
		expect(vencidos.length).to.equal(2);
		expect(vencidos[0]).to.equal(prestamo0);
		expect(vencidos[1]).to.equal(prestamo1);
	})
});
