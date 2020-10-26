class Prestamo{
	constructor(id_libro, username, fecha_inicio, fecha_fin, devuelto){
		this.id_libro = id_libro;
		this.username = username;
		this.fecha_inicio = fecha_inicio;
		this.fecha_fin = fecha_fin;
	}

	getID(){
		return this.id_libro;
	}

	getUsername(){
		return this.username;
	}

	getInicio(){
		return this.fecha_inicio;
	}

	getFin(){
		return this.fecha_fin;
	}

	getDevuelto(){
		return this.devuelto;
	}

	finalizarPrestamo(){

	}

	renovarPrestamo(){

	}

}