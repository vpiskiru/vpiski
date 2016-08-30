import React, {Component} from "react";
import {render} from "react-dom";
import injectTapEventPlugin from "react-tap-event-plugin";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import {Router, Route, Link, browserHistory} from "react-router";
import { Provider } from 'react-redux'

//dev tools
import DevTools from "../shared/containers/DevTools"

//app
import routes from "../shared/Routers";
import MuiTheme from "../shared/muiTheme";
import Store from "../shared/Store";

const store = Store()

// Needed for onTouchTap
//injectTapEventPlugin();
/*{ !window.devToolsExtension ? <DevTools /> : null } //ВНИМАНИЕ НЕ ИЗОМОРФНЫЙ КОМПОНЕНТ!!!!*/
render((
  <MuiTheme userAgent={navigator.userAgent}>
      <Provider store={store}>
        <div>
          <Router children={routes} history={browserHistory}/>
       </div>
      </Provider>
    </MuiTheme>

), document.getElementById('root'));