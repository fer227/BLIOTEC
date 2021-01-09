const Usuario = require('./usuario.js');
const Exception = require('../exception/exception.js');

class UsuarioController{
	constructor(){
		//lo utilizaremos como un diccionario
		this.usuarios = {};
	}

	addUsuario(usuario){
		if(usuario instanceof Usuario){
			if(!(usuario.getUsername() in this.usuarios)){
				this.usuarios[usuario.getUsername()] = usuario;
			}
			else{
				//throw "Usuario ya existe";
				throw new Exception("AlreadyExists", "El username ya está en uso.");
			}
		}
		else{
			//throw "No es un usuario";
			throw new Exception("BadFormat", "No se pudo crear un usuario a partir de esos parámetros.");
		}
	}

	getUsuario(username){
		if(username in this.usuarios){
			return this.usuarios[username];
		}
		else{
			console.log(this.usuarios);
			//throw "El usuario no existe";
			throw new Exception("NotFound", "El usuario no existe");
		}
	}
	
}

module.exports = UsuarioController;