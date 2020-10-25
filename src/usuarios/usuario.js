class Usuario{
	constructor(nombre, apellidos, email, telefono, dni, genero, fecha_nacimiento){
		this.nombre = nombre;
		this.apellidos = apellidos;
		this.email = email;
		this.telefono = telefono;
		this.dni = dni;
		this.genero = genero;
		this.fecha_nacimiento = fecha_nacimiento;
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

	setEmail(email){
		this.email = email;
	}

	setTelefono(telefono){
		this.telefono = telefono;
	}

	getTelefono(){
		return this.telefono;
	}

	getDNI(){
		return this.dni;
	}

	getGenero(){
		return this.genero;
	}

	getFechanNacimiento(){
		return this.fecha_nacimiento;
	}
}