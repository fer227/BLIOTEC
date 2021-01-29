class Valoracion{
    constructor(id_libro, isbn, username, nota, resenia){
        if(this.comprobarTipos(id_libro, isbn, username, nota, resenia)){
            this.id_libro =  id_libro;
            this.isbn = isbn;
            this.username = username;
            this.nota = nota;
            this.resenia = resenia;
        }
        else{
            //throw "El formato de la valoración es incorrecta";
            throw new Exception("BadFormat", "No se pudo crear una valoración a partir de esos parámetros.");
        }
    }

    comprobarTipos(id_libro, isbn, username, nota, resenia){
        if((typeof isbn === 'number') && (typeof isbn === 'number') && (typeof username === 'string') && (typeof nota === 'number') && (typeof resenia === 'string')){
            return true;
        }
        else{
            return false;
        }
    }

    getID(){
        return this.id_libro;
    }

    getISBN(){
        return this.isbn;
    }

    getUsername(){
        return this.username;
    }

    getNota(){
        return this.nota;
    }

    to_string(){
        var cadena = this.isbn.toString() + ", ";
        cadena += this.username + ", ";
        cadena += this.nota.toString() + ", ";
        cadena += this.resenia + ", ";
        return cadena
    }
}

module.exports = Valoracion;