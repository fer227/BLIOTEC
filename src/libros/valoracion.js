class Valoracion{
    constructor(isbn, username, nota, resenia){
        if(this.comprobarTipos(isbn, username, nota, resenia)){
            this.isbn = isbn;
            this.username = username;
            this.nota = nota;
            this.resenia = resenia;
        }
        else{
            throw "El formato de la valoración es incorrecta";
        }
    }

    comprobarTipos(isbn, username, nota, resenia){
        if((typeof isbn === 'number') && (typeof username === 'string') && (typeof nota === 'number') && (typeof resenia === 'string')){
            return true;
        }
        else{
            return false;
        }
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