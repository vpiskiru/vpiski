import React, {Component} from "react";
import {render} from "react-dom";
import injectTapEventPlugin from "react-tap-event-plugin";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import {Router, Route, Link, browserHistory} from "react-router";
import { Provider } from 'react-redux'

//app
import routes from "../shared/Routers";
import MuiTheme from "../shared/muiTheme";
import Store from "../shared/Store";

const store = Store();

render((
  <MuiTheme userAgent={navigator.userAgent}>
      <Provider store={store}>
        <Router children={routes} history={browserHistory}/>
      </Provider>
    </MuiTheme>
), document.getElementById('root'));