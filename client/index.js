import React, {Component} from "react";
import {render} from "react-dom";
import {Router, Route, Link, browserHistory} from "react-router";
import { Provider } from 'react-redux'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

//app
import routes from "../shared/Routers";
import MuiTheme from "../shared/muiTheme";
import Store from "../shared/Store";


const store = Store({
  state: window.initialState,
  injectReducer:(state, action) => ({
    ...state,
    routing: routerReducer(state.routing, action)
  })

});



//синхронизация навигационных событий с store (https://www.npmjs.com/package/react-router-redux)
const history = syncHistoryWithStore(browserHistory, store);


render((
  <MuiTheme userAgent={navigator.userAgent}>
      <Provider store={store}>
        <Router children={routes} history={history}/>
      </Provider>
    </MuiTheme>
), document.getElementById('root'));