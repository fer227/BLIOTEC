class Usuario{
	constructor(nombre, apellidos, email, telefono, dni, fecha_nacimiento, username){
		if(this.comprobarTipos(nombre, apellidos, email, telefono, dni, fecha_nacimiento, username)){
			this.nombre = nombre;
			this.apellidos = apellidos;
			this.email = email;
			this.telefono = telefono;
			this.dni = dni;
			this.fecha_nacimiento = fecha_nacimiento;
			this.username = username;
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

	getNombre(){
		return this.nombre;
	}

	getApellidos(){
		return this.apellidos;
	}

	getEmail(){
		return this.email;
	}

	setTelefono(telefono){
		this.telefono = telefono;
	}

	getTelefono(){
		return this.telefono;
	}

	getUsername(){
		return this.username;
	}

	to_string(){
		var cadena = this.nombre + ", ";
		cadena += this.apellidos + ", ";
		cadena += this.email + ", ";
		cadena += this.telefono.toString() + ", ";
		cadena += this.dni + ", ";
		cadena += this.fecha_nacimiento.toString() + ", ";
		cadena += this.username;
		return cadena;
	}
}

module.exports = Usuario;