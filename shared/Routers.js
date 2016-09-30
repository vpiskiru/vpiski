//react и router
import React, {Component} from "react";
import {Route, IndexRoute } from "react-router";

//app
import App from "./blocks/app/App";
import Main from "./blocks/app/main/Main";
import EventList from "./blocks/app/main/find/list/EventList";
import EventLookupPage from "./blocks/app/main/contacts/EventLookupPage";
import EventEditPage from "./Blocks/app/meeting/EventEditPage";
import MeetingView from "./Blocks/app/meeting/MeetingView";
import FindContainer from './blocks/app/main/find/FindContainer';

export default (
  <Route path="/" component={App}>
    <Route component={Main}>
      <IndexRoute component={FindContainer} />
      <Route path="find" component={FindContainer}/>
      <Route path="meetings" component={EventLookupPage}/>
    </Route>
    <Route path="meetingEdit" component={EventEditPage}/>
    <Route path="meetingView" component={MeetingView}/>
  </Route>
)