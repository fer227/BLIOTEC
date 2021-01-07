const Koa = require('koa');
const json = require('koa-json');
const bodyParser = require('koa-bodyparser');
const libros = require('./routes/libros.js');

const app = new Koa();

app.use(bodyParser());
app.use(json());
app.use(libros.routes());
app.use(libros.allowedMethods());
app.listen(6000, err => {
    if (err) throw err;
    console.log(`> Running on localhost:${6000}`);
});