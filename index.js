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
.listen(6000, err => {
    if (err) throw err;
    console.log(`> Running on localhost:${6000}`);
});