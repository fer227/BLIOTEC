const Koa = require('koa');
const Router = require('@koa/router');
const json = require('koa-json');
const bodyParser = require('koa-bodyparser');
const LibroController = require('./src/libros/libroController.js');
const Libro = require('./src/libros/libro.js');

libroController = new LibroController();
const app = new Koa();
const router = new Router();

//HU1 Consultar el catálogo
router.get('/libros/', (ctx) => {
    ctx.status = 200;
    ctx.body = (libroController.getLibros());
});

//HU1 Consultar el catálogo (libro concreto)
router.get('/libros/:id', (ctx) => {
    try{
        libro = libroController.getLibro(ctx.params.id);
        ctx.status = 200;
        ctx.body = libro;
    }catch(err){
        ctx.status = 400;
        ctx.body = {msg : err};
    }
});

//HU2 Introducir nuevos libros
router.post('/libros/', (ctx) => {
    body = ctx.request.body;
    libro = new Libro(body.id, body.titulo, body.autor, body.anio, body.edicion, body.ISBN, body.paginas, body.editorial, body.genero);
    try{
        libroController.addLibro(libro);
        ctx.status = 201;
        ctx.body = {msg : 'Libro creado con éxito.'};
    }catch(err){
        ctx.status = 400;
        ctx.body = {msg : err};
    }
});

app.use(bodyParser());
app.use(json());
app.use(router.routes());
app.use(router.allowedMethods());
app.listen(6000, err => {
    if (err) throw err;
    console.log(`> Running on localhost:${6000}`);
});