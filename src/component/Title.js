import React, {Component} from "react";
import FlatButton from "material-ui/FlatButton";
import {Router, Route, Link, browserHistory} from "react-router";
import AppBar from 'material-ui/AppBar';

class Title extends Component {
    render() {
        return (            
            <AppBar 
              title="vpiski2" 
              iconElementRight={
                <div>
                  <Link to="/map">observe</Link>
                  <Link to="/event">Event</Link>
                </div>
              }
            />
        );
    }
}

export default Title;