import React, {Component} from "react";
import {Router, Route, Link, browserHistory} from "react-router";

/*TODO old title, remove*/
const App = React.createClass({
    render: function () {
        return (<div className="layout">
            <Link to="/about">Users</Link>
            <Link to="/about2">Users2</Link>
            <Link to="/event">Event</Link>
            <Link to="/title">Title</Link>
            {this.props.children}
        </div>);
    }
});
      
export default App;