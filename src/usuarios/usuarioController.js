const Usuario = require('./usuario.js');

class UsuarioController{
	constructor(){
		//lo utilizaremos como un diccionario
		this.usuarios = [];
	}

	addUsuario(nombre, apellidos, email, telefono, dni, fecha_nacimiento, username){
		if(this.comprobarTipos(nombre, apellidos, email, telefono, dni, fecha_nacimiento, username)){
			if(!(username in this.usuarios)){
				var usuario = new Usuario(nombre, apellidos, email, telefono, dni, fecha_nacimiento, username);
				this.usuarios[username] = usuario;
			}
			else{
				throw "Usuario ya existe";
			}
		}
	}

	comprobarTipos(nombre, apellidos, email, telefono, dni, fecha_nacimiento, username){
		let correcto = false;
		if((typeof nombre === 'string') && (typeof apellidos === 'string') && (typeof telefono === 'number') && (typeof dni === 'string') && (typeof fecha_nacimiento.getMonth === 'function') && (typeof username === 'string')){
			if(dni.length === 9){
				correcto = true;
			}
			else{
				throw "DNI no es correcto";
			}
		}
		else{
			throw "Los parámetros para crear el usuario no son correctos";
		}
		return correcto;
	}

	getUsuario(username){
		if(username in this.usuarios){
			return this.usuarios[username];
		}
		else{
			console.log(this.usuarios);
			throw "El usuario no existe";
		}
	}
	
}

module.exports = UsuarioController;