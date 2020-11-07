class Usuario{
	constructor(nombre, apellidos, email, telefono, dni, fecha_nacimiento, username){
		this.nombre = nombre;
		this.apellidos = apellidos;
		this.email = email;
		this.telefono = telefono;
		this.dni = dni;
		this.fecha_nacimiento = fecha_nacimiento;
		this.username = username;
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