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
.listen(6000, err => {
    if (err) throw err;
    console.log(`> Running on localhost:${6000}`);
});