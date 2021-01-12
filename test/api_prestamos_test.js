const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = require('chai').expect;
const server = require('../index.js');

chai.use(chaiHttp);

p1 = {
    "id" : 1,
    "id_libro": 1,
    "username": "fernando",
    "fecha_inicio": "29/11/2020"
};

//HU4 Poder hacer un préstamo
describe("Test sobre la ruta POST de un préstamo", function(){
    it("Añade un préstamo correctamente", function(done){
        chai.request(server)
            .post("/prestamos/")
            .send(p1)
            .end(function(err, res){
                expect(res).to.have.status(201);
                done();
            });
    });
    it("No permite añadir un préstamo con el mismo id", function(done){
        chai.request(server)
            .post("/prestamos/")
            .send(p1)
            .end(function(err, res){
                expect(res).to.have.status(409);
                done();
            });
    });
    it("Obtener los datos un préstamo correctamente", function(done){
        chai.request(server)
            .get("/prestamos/1")
            .end(function(err, res){
                expect(res).to.have.status(200);
                done();
            });
    });
    it("Obtener error cuando buscamos un préstamo que no existe", function(done){
        chai.request(server)
            .get("/prestamos/12")
            .end(function(err, res){
                expect(res).to.have.status(404);
                done();
            });
    });
});

//HU12 Saber los préstamos caducados
describe("Test de las rutas para obtener los préstamos caducados", function(){
    it("Se obtienen los préstamos caducados correctamente", function(done){
        chai.request(server)
            .get("/prestamos/status/vencidos")
            .end(function(err, res){
                expect(res).to.have.status(200);
                done();
            });
    });
});

//HU7 Renovar un préstamo
describe("Test de las rutas para renovar un préstamo", function(){
    it("Se renueva un préstamo correctamente", function(done){
        chai.request(server)
            .put("/prestamos/renovar/1")
            .end(function(err, res){
                expect(res).to.have.status(200);
                done();
            });
    });
    it("Obtener error correspondiente si intentamos renovar un préstamo no existente", function(done){
        chai.request(server)
            .put("/prestamos/renovar/23")
            .end(function(err, res){
                expect(res).to.have.status(404);
                done();
            });
    });
});