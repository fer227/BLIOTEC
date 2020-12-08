
### Docker hub
Una vez tenemos la imagen creada y funcionando, sería interesante almacenarla en un repositorio público. Para ello disponemos de *Docker hub*. Primero nos creamos una cuenta en Docker hub y la enlazamos con nuestra cuenta de Github:

![link](./docker_img/link_github.png)

A continuación publicamos la imagen. Primero tenemos que ponerle un *tag* a la imagen, identificada por un ID.

![tag](./docker_img/push_dockerhub.png)

Ahora podemos ver en nuestros repositorios de Docker hub que tenemos uno nuevo con una imagen. [Aquí](https://hub.docker.com/repository/docker/fer227/bliotec) puedes ver su vista pública.

![repo](./docker_img/repo_dockerhub.png)

Ahora procedemos a automatizar el proceso de creación de imágenes para cada *push* que hagamos en nuestro repositorio. Accedemos al apartado *builds* de la imagen, seleccionamos Github como proveedor y dejamos la siguiente configuración:

![automation](./docker_img/automation.png)

Podemos ver que ahora aparece como automatizado (*Autobuild*).

![success](./docker_img/success.png)

### Registro alternativo: GitHub Container Registry
Para utilizar el registro de Github Container he seguido el siguiente [tutorial](https://docs.github.com/es/free-pro-team@latest/packages/using-github-packages-with-your-projects-ecosystem/configuring-docker-for-use-with-github-packages). Una vez hemos generado el token, iniciamos sesión como se indica en el tutorial:

![login](./docker_img/login.png)

Una vez identificados, publicamos la imagen:

![push](./docker_img/push_github.png)

Y ya podemos ver en la página de nuestro propio repositorio como aparece la nueva imagen. Se puede ver [aquí](https://github.com/fer227/BLIOTEC/packages/513267).

