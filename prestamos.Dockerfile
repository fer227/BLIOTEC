FROM node:14-alpine3.10
LABEL maintainer ="Fernando Izquierdo Romera <fer227@correo.ugr.es>" \
        com.bliotec.version="4.0.0" \
        com.bliotec.release-date="2021-01-11" \
        com.bliotec.repository="https://github.com/fer227/BLIOTEC"

RUN mkdir /home/node/node_modules && mkdir -p /home/node/src/prestamos && chown -R node:node /home/node/node_modules

WORKDIR /home/node

COPY --chown=node  package*.json gulpfile.js ./
COPY --chown=node  ./prestamos_service/* ./
COPY --chown=node  ./routes/exceptionHandler.js ./routes/prestamos.js ./routes/
COPY --chown=node  ./src/prestamos ./src/prestamos
COPY --chown=node  ./src/exception ./src/exception

RUN npm install -g gulp-cli && npm link gulp && npm install gulp-run

USER node

RUN gulp install-production

ENV PATH=/app/node_modules/.bin:$PATH

EXPOSE 6002

CMD ["gulp", "run"]
