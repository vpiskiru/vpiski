//react и router
import React, {Component} from "react";
import {Route, IndexRoute } from "react-router";

//app
import App from "./blocks/app/App";
import Main from "./blocks/app/main/Main";
import EventList from "./blocks/app/main/find/list/EventList";
import Map from "./blocks/app/main/find/map/Map";
import EventLookupPage from "./blocks/app/main/contacts/EventLookupPage";
import EventEditPage from "./blocks/app/meeting-edit/EventEditPage";
import MeetingView from "./blocks/app/meeting-view/MeetingView";

export default (
  <Route path="/" component={App}>
    <Route component={Main}>
      <IndexRoute component={Map} />
      <Route path="map" component={EventList}/>
      <Route path="meetings" component={EventLookupPage}/>
    </Route>
    <Route path="meetingEdit" component={EventEditPage}/>
    <Route path="meetingView" component={MeetingView}/>
  </Route>
)