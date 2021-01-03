const Polka = require('polka');
const LibroController = require('./src/libros/libroController.js');
const Libro = require('./src/libros/libro.js');

libroController = new LibroController();
app = Polka();

app.listen(3030, err => {
    if (err) throw err;
    console.log(`> Running on localhost:${3030}`);
});