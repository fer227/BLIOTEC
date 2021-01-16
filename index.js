const Koa = require('koa');
const json = require('koa-json');
const bodyParser = require('koa-bodyparser');
const libros = require('./routes/libros.js');
const prestamos = require('./routes/prestamos.js');
const usuarios = require('./routes/usuarios.js');
const dotenv = require('dotenv').config();
const logger = require('koa-pino-logger');
const { Etcd3 } = require('etcd3');

const etcd = new Etcd3();
const app = new Koa();
var port = null;
var server = null;

app.use(bodyParser());
app.use(json());
app.use(logger());
app.use(libros.routes());
app.use(libros.allowedMethods());
app.use(prestamos.routes());
app.use(prestamos.allowedMethods());
app.use(usuarios.routes());
app.use(usuarios.allowedMethods());

(async() => {
    portReceived = await etcd.get("port").string()
    if(portReceived !== null){
        port = parseInt(portReceived);
    }else{
        port = process.env.PORT || 6000;
    }
})();

server = app.listen(port, err => {
    if (err) throw err;
    console.log(`> Running on localhost:${port}`);
});

module.exports = server;
