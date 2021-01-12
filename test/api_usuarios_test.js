const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = require('chai').expect;
const server = require('../index.js');

chai.use(chaiHttp);

u1 = {
    "nombre" : "Fernando",
    "apellidos": "Izquierdo Romera",
    "email": "email@gmail.com",
    "telefono": 666555444,
    "dni": "75943988Y",
    "fecha_nacimiento": "22/6/1998",
    "username": "fernando"
};

//HU3 Usuario quiere registrarse
describe("Test sobre las rutas de adición de usuarios", function(){
    it("Añade un usuario correctamente", function(done){
        chai.request(server)
            .post("/usuarios/")
            .send(u1)
            .end(function(err, res){
                expect(res).to.have.status(201);
                done();
            });
    });
    it("Obtenemos error si intentamos crear otro usuario con el mismo username", function(done){
        chai.request(server)
            .post("/usuarios/")
            .send(u1)
            .end(function(err, res){
                expect(res).to.have.status(409);
                done();
            });
    });
});

//HU8 Administrador quiere consultar datos de usuarios
describe("Test sobre las rutas GET de obtención de usuarios", function(){
    it("Debe obtener la información del usuario especificado", function(done){
        chai.request(server)
            .get("/usuarios/fernando")
            .end(function(err, res){
                expect(res).to.have.status(200);
                done();
            });
    });
    it("Error correcto cuando pedimos un usuario que no existe", function(done){
        chai.request(server)
            .get("/usuarios/nando")
            .end(function(err, res){
                expect(res).to.have.status(404);
                done();
            });
    });
});