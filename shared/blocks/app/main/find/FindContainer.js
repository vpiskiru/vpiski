import React, {Component} from "react";
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/flag';

import Map from "./map/Map";
import List from "./list/EventList";

//пример использования картинки
//<img src={require("./img/target.png")} />
const style = {
  position:"absolute",
  bottom : 10,
  right: 20
};

const MapMode=0;
const ListMode=1;

export default class FindContainer extends Component {

  constructor(){
    super();
    this.state={
      mode:MapMode
    }
  }

  onChangeViewMode(){
    this.setState({
      mode:(this.state.mode==MapMode)?ListMode:MapMode
    })
  }

  render() {
    var view =  this.state.mode ? Map:List;

    return (

      <div>
        <FloatingActionButton mini={true} style={style} onClick={this.onChangeViewMode} >
          <ContentAdd />
        </FloatingActionButton>
        <view></view>

      </div>
    )
  }
}