const Router = require('@koa/router');
const Prestamo = require('../src/prestamos/prestamo.js');
const PrestamoController = require('../src/prestamos/prestamoController');
const exceptionHandler = require('./exceptionHandler.js');

prestamoController = new PrestamoController();
const router = new Router();

//HU4 Poder hacer un préstamo
router.post('/prestamos/', (ctx) => {
    body = ctx.request.body;
    fecha_str = body.fecha_inicio;
    fecha_arr = fecha_str.split('/');
    if(fecha_arr.length == 3){
        date = new Date(fecha_arr[2], fecha_arr[1] - 1, fecha_arr[0]);
        try{
            prestamo = new Prestamo(body.id, body.id_libro, body.username, date);
            prestamoController.addPrestamo(prestamo);
            ctx.status = 201;
            ctx.body = {msg : 'Préstamo llevado a cabo con éxito.'};
        }catch(exception){
            exceptionHandler(ctx, exception);
        }
    }
    else{
        ctx.status = 400;
        ctx.body = {msg : 'Formato de la fecha incorrecta.'};
    }    
});
router.get('/prestamos/:id', (ctx) => {
    try{
        prestamo = prestamoController.getPrestamo(ctx.params.id);
        ctx.status = 200;
        ctx.body = prestamo;
    }catch(exception){
        exceptionHandler(ctx, exception);
    }
});

//HU5 Devolver un libro
router.put('/prestamos/devolver/:id', (ctx) => {
    try{
        prestamoController.devolver(ctx.params.id);
        ctx.status = 200;
        ctx.body = {msg : 'Libro devuelto. Préstamo actualizado.'};
    }catch(exception){
        exceptionHandler(ctx, exception);
    }
});

//HU7 Renovar un préstamo
router.put('/prestamos/renovar/:id', (ctx) => {
    try{
        nueva_fecha = prestamoController.renovar(ctx.params.id);
        ctx.status = 200;
        ctx.body = {msg : 'Préstamo renovado con nueva fecha: ' + nueva_fecha.toString()};
    }catch(exception){
        exceptionHandler(ctx, exception);
    }
});

//HU12 Saber los préstamos caducados
router.get('/prestamos/status/vencidos', (ctx) => {
    vencidos = prestamoController.getPrestamosVencidos();
    ctx.status = 200;
    ctx.body = vencidos;
});

module.exports = router;