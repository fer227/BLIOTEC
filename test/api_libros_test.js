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

//HU1 Consultar el catálogo
describe("Test sobre las rutas GET de los libros", function(){
    it("Debe obtener todos los libros", function(done){
        chai.request(server)
            .get("/libros/1")
            .end(function(err, res){
                expect(res).to.have.status(200);
                done();
            });
    });

    it("Debe obtener un libro concreto", function(done){
        chai.request(server)
            .get("/libros/1")
            .end(function(err, res){
                expect(res).to.have.status(200);
                expect(res.body.isbn).equal(9780439023481);
                expect(res.body.id).equal(1);
                done();
            });
    });

    it("Error correcto cuando pedimos un libro que no existe", function(done){
        chai.request(server)
            .get("/libros/3")
            .end(function(err, res){
                expect(res).to.have.status(404);
                done();
            });
    });
});

//HU9 Obtener libros por filtros
describe("Test sobre las rutas GET de los libros por género", function(){
    it("Obtener los libros por un género", function(done){
        chai.request(server)
            .get("/libros/genero/2")
            .end(function(err, res){
                expect(res).to.have.status(200);
                done();
            });
    });
    it("Error cuando pedimos un género que no existe", function(done){
        chai.request(server)
            .get("/libros/genero/15")
            .end(function(err, res){
                expect(res).to.have.status(400);
                done();
            });
    });
});

//HU2 Gestionar el catálogo (eliminar)
describe("Test sobre la ruta DELETE de los libros", function(){
    it("Eliminar un libro correctamente mediante identificador", function(done){
        chai.request(server)
            .delete("/libros/1")
            .end(function(err, res){
                expect(res).to.have.status(200);
                done();
            });
    });
    it("Error cuando intentamos eliminar un libro que no existe", function(done){
        chai.request(server)
            .delete("/libros/15")
            .end(function(err, res){
                expect(res).to.have.status(404);
                done();
            });
    });
});