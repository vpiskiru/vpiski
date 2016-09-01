//react и router
import React, {Component} from "react";
import {Route, IndexRoute } from "react-router";

//app
import App from "./Blocks/app/App";
import Main from "./Blocks/app/main/Main";
import EventList from "./Blocks/app/main/find/list/EventList";
import Map from "./Blocks/app/main/find/map/Map";
import EventLookupPage from "./Blocks/app/main/contacts/EventLookupPage";
import EventEditPage from "./Blocks/app/meeting-edit/EventEditPage";
import MeetingView from "./Blocks/app/meeting-view/MeetingView";

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