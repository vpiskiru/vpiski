import React, {Component} from "react";
import {render} from "react-dom";
import injectTapEventPlugin from "react-tap-event-plugin";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import {Router, Route, Link, browserHistory} from "react-router";
import { Provider } from 'react-redux'

//dev tools
import DevTools from "./containers/DevTools"

//app
import App from "./containers/App";
import EventList from "./containers/EventList";
import Map from "./component/map";
import Store from './store/Store';
import EventLookupPage from "./component/EventLookupPage";
import EventEditPage from "./component/EventEditPage";

const store = Store(
  DevTools.instrument()
)

// Needed for onTouchTap
injectTapEventPlugin();

//DevTools.instrument();

render((
    <MuiThemeProvider>
      <Provider store={store}>
        <div>
          <Router history={browserHistory}>
            <Route path="/" component={App}>
              <Route path="/map" component={Map}/>
              <Route path="/list" component={EventList}/>
              <Route path="" component={EventEditPage}/>
              <Route path="/events2" component={EventLookupPage}/>
            </Route>
          </Router>

         /*{ !window.devToolsExtension ? <DevTools /> : null } //ВНИМАНИЕ НЕ ИЗОМОРФНЫЙ КОМПОНЕНТ!!!!*/
       </div>
      </Provider>
    </MuiThemeProvider>
  
), document.getElementById('root'));