/**
 * In this file, we create a React component
 * which incorporates components providedby material-ui.
 */
import React, {Component} from "react";
import RaisedButton from "material-ui/RaisedButton";
import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';
import Avatar from 'material-ui/Avatar';
import TextField from 'material-ui/TextField';


const styles = {
    container: {
        textAlign: 'center',
        paddingTop: 50,
    },
};

class EventEditPage extends Component {

    render() {
        return (
            <div style={styles.container}>
                <Avatar src="images/uxceo-128.jpg" size={150}/>
                <h4>Enter event info</h4>
                <DatePicker hintText="Event date" mode="landscape" />
                <TimePicker hintText="Event start time" format="24hr"/>
                <TextField  hintText="Where does event will proceed"/>
                <p/>
                <br/>
                <RaisedButton label="Save"/>
            </div>
        );
    }
}

export default EventEditPage;