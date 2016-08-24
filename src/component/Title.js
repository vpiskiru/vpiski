import React, {Component} from "react";
import FlatButton from "material-ui/FlatButton";
import {Router, Route, Link, browserHistory} from "react-router";
import AppBar from 'material-ui/AppBar';

class Title extends Component {
    render() {
        return (
            <div className="layout">
                <AppBar
                    title="Title"
                    iconElementRight={
                        <div>
                            <Link to="/about"><FlatButton label="Users"/></Link>
                            <Link to="/about2"><FlatButton label="Users2"/></Link>
                            <Link to="/event"><FlatButton label="Event"/></Link>
                        </div>
                    }
                />
                {this.props.children}
            </div>
        );
    }
}

export default Title;