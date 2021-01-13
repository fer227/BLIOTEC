const Koa = require('koa');
const json = require('koa-json');
const bodyParser = require('koa-bodyparser');
const libros = require('./routes/libros.js');
const prestamos = require('./routes/prestamos.js');
const usuarios = require('./routes/usuarios.js');
const dotenv = require('dotenv').config();
const logger = require('koa-pino-logger');
const { Etcd3 } = require('etcd3');

async function getEnvironment(){
    port = await etcd.get("port").string()
    .then(()=>{
        port = parseInt(port);
    }).catch((err)=>{
        port = process.env.PORT || 6000;
        return port;
    });
}

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

getEnvironment().then(()=>{
    server = app.listen(port, err => {
        if (err) throw err;
        console.log(`> Running on localhost:${port}`);
    });
}).catch(()=> {
    console.log("Enviroment falló");
})

module.exports = server;
