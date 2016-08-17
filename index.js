import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'

const App = React.createClass({
  render:function(){
    return (<div>
		 <Link to="/about">Users</Link>
		 <Link to="/about2">Users2</Link>
		{this.props.children}
            </div>);
  }
})

const About = React.createClass({
  render:function(){
    return (<div>About</div>);
  }
})

const About2 = React.createClass({
  render:function(){
    return (<div>About2</div>);
  }
})

const AboutOther = React.createClass({
  render:function(){
    return (<div>Other</div>);
  }
})

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
})

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
})

// Declarative route configuration (could also load this config lazily
// instead, all you really need is a single root route, you don't need to
// colocate the entire config).
render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="/about" component={About}/>
      <Route path="/about2" component={About2}/>      
    </Route>
  </Router>
), document.getElementById('root'))