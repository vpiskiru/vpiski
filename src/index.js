import React, {Component} from "react";
import {render} from "react-dom";
import injectTapEventPlugin from "react-tap-event-plugin";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import {Router, Route, Link, browserHistory} from "react-router";
import { Provider } from 'react-redux'


import App from "./Containers/App";
import EventList from "./Containers/EventList";
import Map from "./component/map";
import Store from './store/Store';
import EventLookupPage from "./component/EventLookupPage";
import EventEditPage from "./component/EventEditPage";

const store = Store()

// Needed for onTouchTap
injectTapEventPlugin();
      
render((  
    <MuiThemeProvider>
      <Provider store={store}>
        <Router history={browserHistory}>
          <Route path="/" component={App}>
            <Route path="/map" component={Map}/>
            <Route path="/list" component={EventList}/>  
            <Route path="/eventEdit" component={EventEditPage}/>
            <Route path="/events2" component={EventLookupPage}/>
          </Route>
        </Router>
      </Provider>
    </MuiThemeProvider>
  
), document.getElementById('root'));