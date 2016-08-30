//react и router
import React, {Component} from "react";
import {Route, IndexRoute } from "react-router";

//app
import App from "./containers/App";
import EventList from "./containers/EventList";
import Map from "./component/Map";
import EventLookupPage from "./component/EventLookupPage";
import EventEditPage from "./component/EventEditPage";

export default (
  <Route path="/" component={App}>
    <Route path="/map" component={Map}/>
    <Route path="/list" component={EventList}/>
    <Route path="/eventEdit" component={EventEditPage}/>
    <Route path="/meetings" component={EventLookupPage}/>
  </Route>
)