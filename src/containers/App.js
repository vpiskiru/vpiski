import React, {Component} from "react";
import {Link,Router} from "react-router";
import AppBar from 'material-ui/AppBar';
import {Tabs, Tab} from 'material-ui/Tabs';
import Title from '../component/Title';

/*TODO old title, remove*/
const App = React.createClass({
    render: function () {
        return (
          <div className="layout">
	    <Title/>
	
            <Tabs ref="tabPanel" onChange={this.onTap}>
              <Tab label="Поиск"></Tab>
              <Tab label="Знакомства"></Tab>
            </Tabs> 
          
            <div >
              {this.props.children}
            </div>     
          
        </div>);
    },
          
    onTap:function(e){
      console.log("onTap",this.refs.tabPanel.state.selectedIndex);
      //Router.push("/map")
    }
});
      
export default App;
      
