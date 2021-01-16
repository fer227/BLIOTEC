## Diseño de los test
Al igual que con los *logger*, también existen muchas bibliotecas que nos podrían servir para testear la API REST, pero en nuestro proyecto ya hemos venido utilizando *Chai* como biblioteca de aserciones que también cuenta con un *plugin* para testear peticiones http. El plugin se denomina como **chai-http** y la sintaxis para utilizarla es muy sencilla:

```
chai.request(server)
        .post("/url/")
        .send({*parámetros en clave-valor*})
        .end(function(err, res){
            expect(res).to.have.status(*código esperado*);
            done();
        });
```

- Previamente necesitaremos exportar nuestra aplicación (es lo que hemos denominado como *server*).
- Indicamos el verbo que queremos utilizar y como parámetro la *url*.
- Mediante el método *send* podemos enviar parámetros en el *body*.
- Finalmente podemos indicar el *status* que esperábamos mediante la sintaxis que caracteriza a Chai. También podríamos obtener el resultado de la operación.

Los test de la API se han dividido en tres ficheros (como se ha venido haciendo) y se pueden encontrar en la carpeta [test](../../test):
- [api_libros_test.js](../../test/api_libros_test.js)
- [api_prestamos_test.js](../../test/api_prestamos_test.js)
- [api_usuarios_test.js](../../test/api_usuarios_test.js)

Cada test llevado a cabo está relacionado con una historia de usuario. Se puede ver en las historias de usuario que hemos indicado anteriomente ([Diseño de la API REST](./api.md)) o también he creado un *issue* con todos los test realizados y la historia a la que pertenece (en el mensaje de cada commit): [Testeo de las rutas](https://github.com/fer227/BLIOTEC/issues/44).
