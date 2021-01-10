const Router = require('@koa/router');
const LibroController = require('../src/libros/libroController.js');
const Libro = require('../src/libros/libro.js');
const Valoracion = require('../src/libros/valoracion.js');
const exceptionHandler = require('./exceptionHandler.js');

libroController = new LibroController();
const router = new Router();

//HU1 Consultar el catálogo
router.get('/libros/', (ctx) => {
    ctx.status = 200;
    ctx.body = (libroController.getLibros());
    ctx.log.info('Libros obtenidos correctamente');
});

//HU1 Consultar el catálogo (libro concreto)
router.get('/libros/:id', (ctx) => {
    try{
        libro = libroController.getLibro(ctx.params.id);
        ctx.status = 200;
        ctx.body = libro;
        ctx.log.info('Libro concreto obtenido correctamente');
    }catch(exception){
        exceptionHandler(ctx, exception);
    }
});

//HU9 Obtener libros por filtros
router.get('/libros/genero/:id', (ctx) => {
    try{
        libros = libroController.getLibrosByGenero(parseInt(ctx.params.id));
        ctx.status = 200;
        ctx.body = libros;
        ctx.log.info('Libros de un género obtenidos correctamente');
    }catch(exception){
        exceptionHandler(ctx, exception);
    }
});

//HU2 Introducir nuevos libros
router.post('/libros/', (ctx) => {
    body = ctx.request.body;
    try{
        libro = new Libro(body.id, body.titulo, body.autor, body.anio, body.edicion, body.ISBN, body.paginas, body.editorial, body.genero);
        libroController.addLibro(libro);
        ctx.status = 201;
        ctx.body = {msg : 'Libro creado con éxito.'};
        ctx.log.info('Nuevo libro creado con éxito');
    }catch(exception){
        exceptionHandler(ctx, exception);
    }
});

//HU2 Gestionar el catálogo (eliminar)
router.delete('/libros/:id', (ctx) => {
    try{
        libroController.deleteLibro(ctx.params.id);
        ctx.status = 200;
        ctx.body = {msg: "Libro eliminado con éxito"};
        ctx.log.info('Libro eliminado con éxito');
    }catch(exception){
        exceptionHandler(ctx, exception);
    }
});

//HU13 Valoraciones de libros
router.get('/valoraciones/:isbn', (ctx) => {
    try{
        valoraciones = libroController.getValoracionLibro(ctx.params.isbn);
        ctx.status = 200;
        ctx.body = valoraciones;
        ctx.log.info('Valoraciones de un libro obtenidas con éxito');
    }catch(exception){
        exceptionHandler(ctx, exception);
    }
});
router.post('/valoraciones/', (ctx) => {
    body = ctx.request.body;
    try{
        valoracion = new Valoracion(body.isbn, body.username, body.nota, body.resenia);
        libroController.addValoracion(valoracion);
        ctx.status = 201;
        ctx.body = {msg : 'Valoración añadida con éxito.'};
        ctx.log.info('Nueva valoración añadida con éxito.');
    }catch(exception){
        exceptionHandler(ctx, exception);
    }
});

module.exports = router;