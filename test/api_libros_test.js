const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = require('chai').expect;
const server = require('../index.js');

chai.use(chaiHttp);

libro_juegos = {
    "id": 1,
    "titulo": "Los Juegos del Hambre",
    "autor": "Suzanne Collins",
    "anio": 2008,
    "edicion": 1,
    "ISBN": 9780439023481,
    "paginas": 374,
    "editorial": "Scholastic Corporation",
    "genero": "CIENCIAFICCION"
};

//HU2 Introducir nuevos libros
describe("Test sobre la ruta POST de un libro", function(){
    it("Añade un libro correctamente", function(done){
        chai.request(server)
            .post("/libros/")
            .send(libro_juegos)
            .end(function(err, res){
                expect(res).to.have.status(201);
                done();
            });
    });
    it("No permite añadir un libro con el mismo id", function(done){
        chai.request(server)
            .post("/libros/")
            .send(libro_juegos)
            .end(function(err, res){
                expect(res).to.have.status(409);
                done();
            });
    });
});