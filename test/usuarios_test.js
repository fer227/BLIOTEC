var expect = require("chai").expect;
const Usuario = require('../src/usuarios/usuario.js');
const UsuarioController = require('../src/usuarios/usuarioController.js');

describe("Test sobre adición de usuarios: ", function() {
	it("Crear un usuario, añadirlo correctamente y devolverlo por el username", function() {
		uc = new UsuarioController();
		uc.addUsuario("Fernando", "Izquierdo Romera", "email@ugr.es", 666666666, "77777777X", new Date(1998, 7, 22), "fernando");
		usuario = new Usuario("Fernando", "Izquierdo Romera", "email@ugr.es", "666666666", "77777777X", new Date(1998, 7, 22), "fernando");
		usuario_from_uc = uc.getUsuario("fernando");
		expect(usuario_from_uc.to_string()).to.equal(usuario.to_string());
	})
});