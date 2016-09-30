import React, {Component} from "react";
import Avatar from "material-ui/Avatar";
import TitleBack from "../title-back/TitleBack";

const styles = {
    container: {
        textAlign: 'center',
        paddingTop: 50,
    }
};


class MeetingView extends Component {
    render() {
        return (
            <div style={{display: "flex", flexDirection: "column"}}>
                <TitleBack title="New meeting"/>
                <div style={styles.container}>
                    <Avatar src="images/uxceo-128.jpg" size={150}/>
                    <h4>Супер тусовка!</h4>
                </div>
            </div>
        );
    }
}

export default MeetingView;