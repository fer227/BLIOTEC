const Exception = require('../exception/exception.js');
class Prestamo{
	static rango_prestamo = 10;
	constructor(id, id_libro, username, fecha_inicio){
		if(this.comprobarTipos(id, id_libro, username, fecha_inicio)){
			this.id = id;
			this.id_libro = id_libro;
			this.username = username;
			this.fecha_inicio = fecha_inicio;
			this.devuelto = false;
			this.n_renovaciones = 0;

			var fecha_fin = new Date(fecha_inicio);
			fecha_fin.setDate(fecha_fin.getDate() + Prestamo.rango_prestamo);
			this.fecha_fin = fecha_fin;
		}
		else{
			//throw "Los tipos del préstamo no son correctos";
			throw new Exception("BadFormat", "No se pudo crear un préstamo a partir de esos parámetros.");
		}
	}

	comprobarTipos(id, id_libro, username, fecha_inicio){
		let correcto = false;
		if((typeof id === 'number') && (typeof id_libro === 'number') && (typeof username === 'string') && (typeof fecha_inicio.getMonth === 'function')){
			correcto = true;
		}
		else{
			//throw "Los parámetros para crear el préstamo son incorrectos";
			throw new Exception("BadFormat", "No se pudo crear un préstamo a partir de esos parámetros.");
		}
		return correcto;
	}

	renovar(){
		var nuevo_fin = new Date(this.fecha_fin);
		nuevo_fin.setDate(nuevo_fin.getDate() + (Prestamo.rango_prestamo - this.n_renovaciones));
		this.fecha_fin = nuevo_fin;
		if(this.n_renovaciones != 5){
			this.n_renovaciones++;
		}
		return this.fecha_fin;
	}

	getID(){
		return this.id;
	}

	getIDLibro(){
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

	devolver(){
		this.devuelto = true;
	}

	renovarPrestamo(){

	}

	to_string(){
		var cadena = this.id.toString() + ", ";
		cadena += this.id_libro.toString() + ", ";
		cadena += this.username + ", ";
		cadena += this.fecha_inicio.toString() + ", ";
		cadena += this.fecha_fin.toString() + ", ";
		cadena += this.devuelto.toString() + ", ";
		return cadena;
	}
}

module.exports = Prestamo;