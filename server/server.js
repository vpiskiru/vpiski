//server
import express from 'express';
import path    from 'path';

//webpack и горячая перезагрузка
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from '../webpack.config';

//react
import React from "react";
import { renderToString } from 'react-dom/server'

//redux
import { Provider } from 'react-redux'

//роутинг
import { RouterContext, match } from 'react-router';
import createLocation            from 'history/lib/createLocation';

//приложение
import routes from "../shared/Routers";
import MuiTheme from "../shared/muiTheme";
import Store from "../shared/Store";
import initialState from "./initState";

var app = new express();
var port = 3000;

//настройки шаблонизатора
app.set('views',__dirname);
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

//горячая перезагрузка(при изменении кода)
var compiler = webpack(config)
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
app.use(webpackHotMiddleware(compiler))

app.use(express.static(path.join(__dirname, 'dist')));


app.use((req, res)=>{
  const location = createLocation(req.url);

  const store = Store({
    state: initialState
  });

  match({ routes, location }, (err, redirectLocation, renderProps) => {
    if(err) {
      console.error(err);
      return res.status(500).end('Internal server error');
    }

    if(!renderProps)
      return res.status(404).end('Not found');


    var initialView =(
      <MuiTheme userAgent={req.headers['user-agent']}>
        <Provider store={store}>
            <RouterContext {...renderProps} />
        </Provider>
      </MuiTheme>
    );

    res.render("index.html", {
      layout: false,
      componentHTML:renderToString(initialView),
      initialState:JSON.stringify(store.getState())
    });

  });

})

export default app;