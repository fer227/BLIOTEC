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
}