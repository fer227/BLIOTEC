const Prestamo = require('./prestamo.js');

class PrestamoController{
	constructor(){
		this.prestamos = [];
		//número de días que se da en un préstamo.
		this.rango_prestamo = 10;
	}

	addPrestamo(id, id_libro, username, fecha_inicio){
		if(this.comprobarTipos(id, id_libro, username, fecha_inicio)){
			if(!(id in this.prestamos)){
				var fecha_fin = new Date(fecha_inicio);
				fecha_fin.setDate(fecha_fin.getDate() + this.rango_prestamo);
				var prestamo = new Prestamo(id, id_libro, username, fecha_inicio, fecha_fin);
				this.prestamos[id] = prestamo;
			}
			else{
				throw "Identificador del préstamo ya existe";
			}
		}
		else{
			throw "Los datos del préstamo no son correctos";
		}
	}

	comprobarTipos(id, id_libro, username, fecha_inicio){
		//cuando los microservicios se puedan comunicar, podremos comprobar que existen ciertos usuarios o libros, si tienen alguna penalización..
		let correcto = false;
		if((typeof id === 'number') && (typeof id_libro === 'number') && (typeof username === 'string') && (typeof fecha_inicio.getMonth === 'function')){
			correcto = true;
		}
		return correcto;
	}

	getPrestamo(id){
		if(id in this.prestamos){
			return this.prestamos[id];
		}
		else{
			throw "El identificador del préstamo no existe";
		}
	}
}

module.exports = PrestamoController;