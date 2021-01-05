const Koa = require('koa');
const Router = require('@koa/router');
const json = require('koa-json');
const LibroController = require('./src/libros/libroController.js');
const Libro = require('./src/libros/libro.js');

libroController = new LibroController();
const app = new Koa();
const router = new Router();

app.use(router.routes());
app.use(router.allowedMethods());
app.listen(6000, err => {
    if (err) throw err;
    console.log(`> Running on localhost:${6000}`);
});