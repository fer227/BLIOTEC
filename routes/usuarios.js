const Router = require('@koa/router');
const UsuarioController = require('../src/usuarios/usuarioController.js');
const Usuario = require('../src/usuarios/usuario.js');

usuarioController = new UsuarioController();
const router = new Router();

//HU3 Usuario quiere registrarse
router.post('/usuarios/', (ctx) => {
    body = ctx.request.body;
    fecha_str = body.fecha_nacimiento;
    fecha_arr = fecha_str.split('/');
    if(fecha_arr.length == 3){
        try{
            date = new Date(fecha_arr[2], fecha_arr[1] - 1, fecha_arr[0]);
            usuario = new Usuario(body.nombre, body.apellidos, body.email, body.telefono, body.dni, date, body.username);
            usuarioController.addUsuario(usuario);
            ctx.status = 201;
            ctx.body = {msg : 'Usuario dado de alta con éxito.'};
        }catch(err){
            ctx.status = 400;
            ctx.body = {msg : err};
        }
    }
    else{
        ctx.status = 400;
        ctx.body = {msg : 'Formato de la fecha incorrecta.'};
    }
});

module.exports = router;