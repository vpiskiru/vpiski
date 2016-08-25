import React, {Component} from "react";
import {Link,Router} from "react-router";
import AppBar from 'material-ui/AppBar';
import {Tabs, Tab} from 'material-ui/Tabs';


/*TODO old title, remove*/
const App = React.createClass({
    render: function () {
        return (
          <div className="layout">
            <AppBar               
              title="vpiski2"           
              iconElementRight={
                  <div>
                    <Link to="/map"> map demo </Link>
                    <Link to="/list"> list demo </Link>
                    <Link to="/event">Event</Link>
                  </div>            
                }         
            />   
          
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
      
