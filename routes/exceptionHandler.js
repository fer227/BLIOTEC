function exceptionHandler(ctx, exception){
    if(exception.name == "NotFound"){
        ctx.status = 404;
    }
    else if(exception.name == "AlreadyExists"){
        ctx.status = 409;
    }
    else if(exception.name == "BadFormat"){
        ctx.status = 400;
    }
    ctx.body = {msg : exception.msg};
}

module.exports = exceptionHandler;