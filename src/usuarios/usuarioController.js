const Usuario = require('./usuario.js');

class UsuarioController{
	constructor(){
		//lo utilizaremos como un diccionario
		this.usuarios = [];
	}

	addUsuario(usuario){
		if(usuario instanceof Usuario){
			if(!(username in this.usuarios)){
				this.usuarios[username] = usuario;
			}
			else{
				throw "Usuario ya existe";
			}
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