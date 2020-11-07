const Usuario = require('./usuario.js');

class UsuarioController{
	constructor(){
		//lo utilizaremos como un diccionario
		this.usuarios = [];
	}

	addUsuario(nombre, apellidos, email, telefono, dni, fecha_nacimiento, username){
		if((typeof nombre === 'string') && (typeof apellidos === 'string') && (typeof telefono === 'number') && (typeof dni === 'string') && (typeof fecha_nacimiento.getMonth === 'function') && (typeof username === 'string')){
			if(dni.length === 9){
				if(!(username in this.usuarios)){
					var usuario = new Usuario(nombre, apellidos, email, telefono, dni, fecha_nacimiento, username);
					this.usuarios[username] = usuario;
				}
				else{
					throw "Usuario ya existe";
				}
			}
			else{
				throw "DNI no es correcto";
			}
		}
		else{
			throw "Los parámetros para crear el usuario no son correctos";
		}
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