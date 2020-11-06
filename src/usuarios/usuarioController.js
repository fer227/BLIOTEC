const Usuario = require('./usuario.js')

class UsuarioController{
	constructor(){
		//lo utilizaremos como un diccionario
		usuarios = [];
	}

	addUsuario(nombre, apellidos, email, telefono, dni, fecha_nacimiento, username){
		if((typeof nombre === 'string') && (typeof apellidos === 'string') && (typeof telefono === 'number') && (typeof dni === 'string') && (typeof fecha_nacimiento.getMonth === 'function') && (typeof username === 'string')){
			if(dni.lenght == 9){
				if(!(username in usuarios)){
					usuario = new Usuario(ombre, apellidos, email, telefono, dni, fecha_nacimiento, username);
					usuarios.push({
						key : username,
						value : usuario
					});
				}
			}
		}
		else{
			throw "Los parámetros para crear el usuario no son correctos";
		}
	}

	getUsuario(username){
		if(username in usuarios){
			return usuarios[username];
		}
		else{
			throw "El usuario no existe";
		}
	}
	
}