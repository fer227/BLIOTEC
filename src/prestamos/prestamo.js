class Prestamo{
	constructor(id_libro, username, fecha_inicio, fecha_fin){
		this.id_libro = id_libro;
		this.username = username;
		this.fecha_inicio = fecha_inicio;
		this.fecha_fin = fecha_fin;
		this.devuelto = false;
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
		this.devuelto = true;
	}

	renovarPrestamo(){

	}

	to_string(){
		var cadena = this.id_libro.toString() + ", ";
		cadena += this.username + ", ";
		cadena += this.fecha_inicio.toString() + ", ";
		cadena += this.fecha_fin.toString() + ", ";
		cadena += this.devuelto.toString() + ", ";
		return cadena;
	}
}

module.exports = Prestamo;