import React, {Component} from "react";
import Paper from "material-ui/Paper";
import {Toolbar, ToolbarTitle} from "material-ui/Toolbar";

const paperStyle = {
    height: 200,
    width: 1000,
    margin: 20,
    textAlign: 'center',
    display: 'inline-block',
};

const PaperSubheader = () => (
        <Paper style={paperStyle} zDepth={5}>
            <Toolbar>
                <ToolbarTitle text='Мои встречи'/>
            </Toolbar>
        </Paper>
);

const PaperSubheader2 = () => (
        <Paper style={paperStyle} zDepth={5}>
            <Toolbar>
                <ToolbarTitle text='Интересные'/>
            </Toolbar>
        </Paper>
);


class EventLookupPage extends Component {

    render() {
        return (
            <div>
                <PaperSubheader/>
                <PaperSubheader2/>
            </div>
        );
    }
}

export default EventLookupPage;