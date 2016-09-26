import React, {Component} from "react";
import {Link, Router, browserHistory} from "react-router";
import AppBar from 'material-ui/AppBar';
import {Tabs, Tab} from 'material-ui/Tabs';
import Title from './main-title/Title';


// рассмотреть вариант реализации через redux
// https://maxfarseer.gitbooks.io/react-router-course-ru/content/storedispatch_redirekt.html

/*TODO old title, remove*/
class Main extends Component{

  constructor(){
    super();
    this.state={
      url:0
    }
  }

  onChange(val){
    browserHistory.push(val);
  }

  render() {
    return (

      <div style={{display:"flex", flexDirection:"column"}}>

        <Title/>

        <Tabs ref="tabPanel" onChange={::this.onChange} value={this.props.location.pathname}>
          <Tab label="Поиск" value={"/find"}></Tab>
          <Tab label="Знакомства" value={"/meetings"}></Tab>
        </Tabs>
        <div style={{flex:"1"}}>
          {this.props.children}
        </div>

      </div>);
  }
}

export default Main;