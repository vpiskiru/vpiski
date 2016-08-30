import React, {Component} from "react";
import {Link, Router, browserHistory} from "react-router";
import AppBar from 'material-ui/AppBar';
import {Tabs, Tab} from 'material-ui/Tabs';
import Title from '../component/Title';

// рассмотреть вариант реализации через redux
// https://maxfarseer.gitbooks.io/react-router-course-ru/content/storedispatch_redirekt.html

/*TODO old title, remove*/
class App extends Component{

    constructor(){
      super();
      console.log("cnst");
      this.state={
        url:0
      }
    }

    onChange(val){
      browserHistory.push(val);
    }

    render() {
        return (
          <div className="layout">
            <Title/>

            <Tabs ref="tabPanel" onChange={::this.onChange} value={this.props.location.pathname}>
              <Tab label="Поиск" value={"/map"}></Tab>
              <Tab label="Знакомства" value={"/events2"}></Tab>
            </Tabs> 
          
            <div >
              {this.props.children}
            </div>     
          
        </div>);
    }

}

export default App;
      
