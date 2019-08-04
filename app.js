const express = require('express');
const router = require('./router.js');
// const fs = require('fs');
const app = express();
app.listen(8080,()=>{
    console.log('http://127.0.0.1:8080');
})

app.use('/assets',express.static('assets'))
app.use('/uploads',express.static('uploads'))

app.set('view engine', 'ejs'); //配置ejs模板引擎
app.set('views', __dirname + '/views');

//分发路由
app.use(router);


