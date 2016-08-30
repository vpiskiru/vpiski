import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from './webpack.config';

//react
import React from "react";
//import appComp= from "./client/helloWorld";

var app = new (require('express'))()
var port = 3000

//горячая перезагрузка(при изменении кода)
var compiler = webpack(config)
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
app.use(webpackHotMiddleware(compiler))

//компонент приложения
//AppComponent=React.createFactory(appComp);


app.get(/.*/, function(req, res) {
  res.sendFile(__dirname + '/index.html')
})

export default app;