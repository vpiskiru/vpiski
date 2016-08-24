import React, {Component} from "react";
import {render} from "react-dom";
import About from "./component/map";
import Title from "./component/Title";
import injectTapEventPlugin from "react-tap-event-plugin";
import EventEditPage from "./component/EventEditPage";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import {Router, Route, Link, browserHistory} from "react-router";
import EventLookupPage from "./component/EventLookupPage";

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();


const AboutOther = React.createClass({
    render: function () {
        return (<div>Other</div>);
    }
});

const Users = React.createClass({
    render() {
        return (
            <div>
                <h1>Users</h1>
                <div className="master">
                    <ul>
                        {/* use Link to route around the app */}
                        {this.state.users.map(user => (
                            <li key={user.id}><Link to={`/user/${user.id}`}>{user.name}</Link></li>
                        ))}
                    </ul>
                </div>
                <div className="detail">
                    {this.props.children}
                </div>
            </div>
        )
    }
});

const User = React.createClass({
    componentDidMount() {
        this.setState({
            // route components are rendered with useful information, like URL params
            user: findUserById(this.props.params.userId)
        })
    },

    render() {

        return (
            <div>
                <h2>{this.state.user.name}</h2>
                <span>yhuububy</span>
                {/* etc. */}
            </div>
        )
    }
});


// Declarative route configuration (could also load this config lazily
// instead, all you really need is a single root route, you don't need to
// colocate the entire config).
render((
    <MuiThemeProvider>
        <div>
            <Router history={browserHistory}>
                <Route path="/" component={Title}>
                    <Route path="/about" component={About}/>
                    <Route path="/events" component={EventLookupPage}/>
                    <Route path="/eventEdit" component={EventEditPage}/>
                </Route>
            </Router>
        </div>
    </MuiThemeProvider>
), document.getElementById('root'));