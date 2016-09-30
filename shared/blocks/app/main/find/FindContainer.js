import React, {Component} from "react";
import FloatingActionButton from "material-ui/FloatingActionButton";
import ContentAdd from "material-ui/svg-icons/content/flag";
import Map from "./map/Map";
import List from "./list/EventList";

//пример использования картинки
//<img src={require("./img/target.png")} />
const style = {
    position: "absolute",
    bottom: 10,
    right: 20
};

const MAP_MODE = 0;
const LIST_MODE = 1;

export default class FindContainer extends Component {

    constructor() {
        super();
        this.state = {
            mode: MAP_MODE
        }
    }

    onChangeViewMode() {
        this.setState({
            mode: (this.state.mode == MAP_MODE) ? LIST_MODE : MAP_MODE
        })
    }

    render() {
        var view = this.state.mode ? Map : List;

        return (
            <div>
                <FloatingActionButton mini={true} style={style} onClick={this.onChangeViewMode}>
                    <ContentAdd />
                </FloatingActionButton>
                <view></view>
            </div>
        )
    }
}