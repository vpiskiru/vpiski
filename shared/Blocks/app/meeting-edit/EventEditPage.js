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
import TitleBack from '../title-back/TitleBack';

const styles = {
    container: {
        textAlign: 'center',
        paddingTop: 50,
    },

    saveBtn:{
      marginTop:"30px"
    }
};

//использование br это такой же позор длz верстальщика, как обосратьсь в метро :)
class EventEditPage extends Component {
    render() {
        return (
          <div style={{display:"flex", flexDirection:"column"}}>
              <TitleBack title="New meeting"/>
              <div style={styles.container}>
                  <Avatar src="images/uxceo-128.jpg" size={150}/>
                  <h4>Enter event info</h4>
                  <DatePicker hintText="Event date" mode="landscape" />
                  <TimePicker hintText="Event start time" format="24hr"/>
                  <TextField  hintText="Where does event will proceed"/>

                  <div style={styles.saveBtn}>
                    <RaisedButton label="Save" />
                  </div>
            </div>
          </div>
        );
    }
}

export default EventEditPage;