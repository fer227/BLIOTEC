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

	getPrestamosVencidos(){
		let vencidos = [];
		let today = new Date();
		Object.values(this.prestamos).forEach(prestamo => {
			if(!prestamo.getDevuelto()){
				if(prestamo.getFin() < today){
					vencidos.push(prestamo);
				}
			}
		});

		return vencidos;
	}

	renovar(id){
		if(id in this.prestamos){
			let prestamo = this.prestamos[id];
			let nuevo_limite = prestamo.renovar();
			return nuevo_limite;			
		}
		else{
			throw "El identificador del préstamo no existe";
		}
	}

	devolver(id){
		if(id in this.prestamos){
			let prestamo = this.prestamos[id];
			prestamo.devolver();			
		}
		else{
			throw "El identificador del préstamo no existe";
		}
	}
}

module.exports = PrestamoController;