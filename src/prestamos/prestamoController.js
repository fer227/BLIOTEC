const Prestamo = require('./prestamo.js');

class PrestamoController{
	constructor(){
		this.prestamos = {};
		this.prestamosDevueltos = {};
	}

	addPrestamo(prestamo){
		if(prestamo instanceof Prestamo){
			if(!(prestamo.getID() in this.prestamos) && !(prestamo.getID() in this.prestamosDevueltos)){
				this.prestamos[prestamo.getID()] = prestamo;
			}
			else{
				//throw "Identificador del préstamo ya existe";
				throw new Exception("AlreadyExists", "Identificador del préstamo ya es existente");
			}
		}
	}

	getPrestamo(id){
		if(id in this.prestamos){
			return this.prestamos[id];
		}
		else if(id in this.prestamosDevueltos){
			return this.prestamosDevueltos[id];
		}
		else{
			//throw "El identificador del préstamo no existe";
			throw new Exception("NotFound", "El identificador del préstamo no existe");
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

	getPrestamosDevueltos(){
		return this.prestamosDevueltos;
	}

	getPrestamosActuales(){
		return this.prestamos;
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
			this.prestamosDevueltos[prestamo.getID()] = prestamo;
			prestamo.devolver();
			
			delete this.prestamos[id]
		}
		else{
			throw "El identificador del préstamo no existe";
		}
	}
}

module.exports = PrestamoController;