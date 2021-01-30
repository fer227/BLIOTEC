FROM node:14-alpine3.10
LABEL maintainer ="Fernando Izquierdo Romera <fer227@correo.ugr.es>" \
        com.bliotec.version="4.0.0" \
        com.bliotec.release-date="2021-01-11" \
        com.bliotec.repository="https://github.com/fer227/BLIOTEC"

RUN mkdir /home/node/node_modules && mkdir -p /home/node/src/libros && chown -R node:node /home/node/node_modules

WORKDIR /home/node

COPY --chown=node  package*.json gulpfile.js ./
COPY --chown=node  ./libros_service/* ./
COPY --chown=node  ./routes/exceptionHandler.js ./routes/libros.js ./routes/
COPY --chown=node  ./src/libros ./src/libros
COPY --chown=node  ./src/exception ./src/exception

RUN npm install -g gulp-cli && npm link gulp && npm install gulp-run

USER node

RUN gulp install-production

ENV PATH=/app/node_modules/.bin:$PATH

EXPOSE 6001

CMD ["gulp", "run"]