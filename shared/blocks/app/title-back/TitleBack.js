import React, {Component} from "react";
import {Link} from "react-router";
import AppBar from "material-ui/AppBar";
import FontIcon from "material-ui/FontIcon";
import IconButton from "material-ui/IconButton/IconButton";
import {browserHistory} from "react-router";


// Arrow for future header return back button
const ArrowBackButton = () => (
   <IconButton >
     <FontIcon className="material-icons">arrow_back</FontIcon>
   </IconButton>
 );

class TitleBack extends Component {

  onBack(){
    browserHistory.goBack();
  }

  render() {
    return <AppBar
      title = {this.props.title}
      iconElementLeft={
        <div onClick={::this.onBack}>
          <ArrowBackButton  />
        </div>
      }
    />
  }

}
export default TitleBack;