const Polka = require('polka');
const { json } = require('body-parser');
const LibroController = require('./src/libros/libroController.js');
const Libro = require('./src/libros/libro.js');

libroController = new LibroController();
app = Polka();

app
.use(json())
.get('/libros/', (req, res) => {
    //HU1 Consultar el catálogo
    res.statusCode = 200;
    res.end(JSON.stringify(libroController.getLibros()));
})
.get('/libros/:id', (req, res) => {
    //HU1 Consultar el catálogo (libro concreto)
    try{
        libro = libroController.getLibro(req.params.id);
        res.statusCode = 200;
        res.end(JSON.stringify(libro));
    }catch(err){
        res.statusCode = 400;
        res.end(JSON.stringify({msg : err}));
    }
})
.get('/libros/genero/:id', (req, res) => {
    //HU9 Obtener libros por filtros
    try{
        libros = libroController.getLibrosByGenero(parseInt(req.params.id));
        res.statusCode = 200;
        res.end(JSON.stringify(libros));
    }catch(err){
        res.statusCode = 400;
        res.end(JSON.stringify({msg : err}));
    }
})
.post('/libros/', (req, res) => {
    //HU2 Introducir nuevos libros
    body = req.body;
    libro = new Libro(body.id, body.titulo, body.autor, body.anio, body.edicion, body.ISBN, body.paginas, body.editorial, body.genero);
    try{
        libroController.addLibro(libro);
        res.statusCode = 201;
        res.end(JSON.stringify({msg : 'Libro creado con éxito.'}));
    }catch(err){
        res.statusCode = 400;
        res.end(JSON.stringify({msg : err}));
    }
})
.delete('/libros/:id', (req, res) => {
    //HU2 Gestionar el catálogo (eliminar)
    try{
        libroController.deleteLibro(req.params.id);
        res.statusCode = 200;
        res.end(JSON.stringify({msg: "Libro eliminado con éxito"}));
    }catch(err){
        res.statusCode = 400;
        res.end(JSON.stringify({msg : err}));
    }
})
.listen(6000, err => {
    if (err) throw err;
    console.log(`> Running on localhost:${6000}`);
});