/**
 * In this file, we create a React component
 * which incorporates components providedby material-ui.
 */
import React, {Component} from "react";
import RaisedButton from "material-ui/RaisedButton";
import DatePicker from "material-ui/DatePicker";
import TimePicker from "material-ui/TimePicker";
import TextField from "material-ui/TextField";
import TitleBack from "../title-back/TitleBack";
import Paper from "material-ui/Paper";
import FontIcon from "material-ui/FontIcon";
import IconButton from "material-ui/IconButton/IconButton";

const styles = {
    container: {
        textAlign: 'center',
        paddingTop: 50,
    },

    saveBtn: {
        marginTop: "30px"
    }
};

const imageStyle = {
    height: 100,
    width: 100,
    margin: 20,
    textAlign: 'center',
    display: 'inline-block',
};

class EditImageButton extends Component {
    render() {
        return (
            <Paper style={imageStyle} zDepth={1}>
                <IconButton>
                    <FontIcon className="material-icons">add</FontIcon>
                </IconButton>
            </Paper>
        );
    }
}

//использование br это такой же позор длz верстальщика, как обосратьсь в метро :)
class EventEditPage extends Component {
    render() {
        return (
            <div style={{display: "flex", flexDirection: "column"}}>
                <TitleBack title="New meeting"/>
                <div style={styles.container}>
                    <div>
                        <EditImageButton/>
                        <EditImageButton/>
                        <EditImageButton/>
                        <EditImageButton/>
                    </div>
                    <h4>Enter event info</h4>
                    <DatePicker hintText="Event date" mode="landscape"/>
                    <TimePicker hintText="Event start time" format="24hr"/>
                    <TextField hintText="Where does event will proceed"/>

                    <div style={styles.saveBtn}>
                        <RaisedButton label="Save"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default EventEditPage;