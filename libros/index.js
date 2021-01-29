const Koa = require('koa');
const json = require('koa-json');
const bodyParser = require('koa-bodyparser');
const dotenv = require('dotenv').config();
const logger = require('koa-pino-logger');
const { Etcd3 } = require('etcd3');
const router = require('../routes/libros.js');
const etcd = new Etcd3();
const app = new Koa();
var port = 6001;
var server = null;

//middleware
app.use(async (ctx, next) => {
    await next();
    if((ctx.status !== 200) && (ctx.status !== 201)){
        ctx.log.error(JSON.parse(ctx.body).msg);
    }
    else{
        ctx.log.info(JSON.parse(ctx.body).msg);
    }
})

app.use(bodyParser());
app.use(json());
app.use(logger());
app.use(router.routes());
app.use(router.allowedMethods());

(async() => {
    port = await etcd.get("port").string()
    if(port != null){
        port = parseInt(port);
    }
})().catch(()=> {
    port = process.env.PORT;
});

server = app.listen(port, err => {
    if (err) throw err;
    console.log(`> Running on localhost:${port}`);
});

module.exports = server;