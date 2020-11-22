const Prestamo = require('./prestamo.js');

class PrestamoController{
	constructor(){
		this.prestamos = [];
	}

	addPrestamo(prestamo){
		if(prestamo instanceof Prestamo){
			if(!(prestamo.getID() in this.prestamos)){
				this.prestamos[prestamo.getID()] = prestamo;
			}
			else{
				throw "Identificador del préstamo ya existe";
			}
		}
	}

	getPrestamo(id){
		if(id in this.prestamos){
			return this.prestamos[id];
		}
		else{
			throw "El identificador del préstamo no existe";
		}
	}

	renovar(id){
		if(id in this.prestamos){
			let prestamo = this.prestamos[id];
			let nuevo_limite = prestamo.renovar();			
		}
		else{
			throw "El identificador del préstamo no existe";
		}
	}
}

module.exports = PrestamoController;