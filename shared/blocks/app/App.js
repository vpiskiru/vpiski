import React, {Component} from "react";
import {Link, Router, browserHistory} from "react-router";
import AppBar from 'material-ui/AppBar';
import {Tabs, Tab} from 'material-ui/Tabs';
import Title from './main/main-title/Title';

// рассмотреть вариант реализации через redux
// https://maxfarseer.gitbooks.io/react-router-course-ru/content/storedispatch_redirekt.html

/*TODO old title, remove*/
class App extends Component{

    constructor(){
      super();
    }

    render() {
        return (
          <div style={{display:"flex", flexDirection:"column"}}>
            {this.props.children}
          </div>
        );
    }
}

export default App;
      
