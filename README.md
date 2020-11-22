# BLIOTEC

## Previos avances del proyecto
- La correcta configuración del repositorio se puede ver [aquí](./doc/git_config.md).
- La descripción inicial del problema la puedes encontrar [aquí](./doc/descripcion.md).
- Descripción de la [arquitectura](./doc/arquitectura.md).
- [Tecnologías](./doc/tecnologias.md) a utilizar.
- [Gestor de tareas, biblioteca de aserciones y marco de prueba](./doc/gestorTareas_BDD.md).

## Nuevos avances del proyecto
- [Elección y desarrollo del Dockerfile (R1 y R2)](./doc/docker.md).

### Docker hub
Una vez tenemos la imagen creada y funcionando, sería interesante almacenarla en un repositorio público. Para ello disponemos de *Docker hub*. Primero nos creamos una cuenta en Docker hub y la enlazamos con nuestra cuenta de Github:

![link](./doc/docker_img/link_github.png)

A continuación publicamos la imagen. Primero tenemos que ponerle un *tag* a la imagen, identificada por un ID.

![tag](./doc/docker_img/push_dockerhub.png)

Ahora podemos ver en nuestros repositorios de Docker hub que tenemos uno nuevo con una imagen. [Aquí](https://hub.docker.com/repository/docker/fer227/bliotec) puedes ver su vista pública.

![repo](./doc/docker_img/repo_dockerhub.png)

Ahora procedemos a automatizar el proceso de creación de imágenes para cada *push* que hagamos en nuestro repositorio. Accedemos al apartado *builds* de la imagen, seleccionamos Github como proveedor y dejamos la siguiente configuración:

![automation](./doc/docker_img/automation.png)

Podemos ver que ahora aparece como automatizado (*Autobuild*).

![success](./doc/docker_img/success.png)
