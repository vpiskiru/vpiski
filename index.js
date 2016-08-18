import React, {Component} from "react";
import {render} from "react-dom";
import About from "./component/map";
import {Router, Route, Link, browserHistory} from "react-router";
import injectTapEventPlugin from "react-tap-event-plugin";
import EventPage from "./component/eventPage";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import lightBaseTheme from "material-ui/styles/baseThemes/lightBaseTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import FlatButton from "material-ui/FlatButton";

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

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

function handleTouchTap() {
    alert('onTouchTap triggered on the title component');
}

const styles = {
    title: {
        cursor: 'pointer',
    },
};

class Title extends Component {
    render() {
        return (
            <div className="layout">
                <AppBar
                    title={<span style={styles.title}>Title</span>}
                    onTitleTouchTap={handleTouchTap}
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


const About2 = React.createClass({
    render: function () {
        return (<div>About2</div>);
    }
});

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
    <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <div>
            <Router history={browserHistory}>
                <Route path="/" component={Title}>
                    <Route path="/about" component={About}/>
                    <Route path="/about2" component={About2}/>
                    <Route path="/event" component={EventPage}/>
                </Route>
            </Router>
        </div>
    </MuiThemeProvider>
), document.getElementById('root'));