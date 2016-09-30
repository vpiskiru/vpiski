import React, {Component} from "react";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import RaisedButton from "material-ui/RaisedButton";
import {fullWhite, grey500} from "material-ui/styles/colors";
import ContentAdd from "material-ui/svg-icons/content/add";

const styles = {
    button: {
        margin: 12,
        height: 100,
        width: 100,
    },
};

class ImageLoaderButton extends Component {
    state = {
        open: false,
    };

    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    render() {
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onTouchTap={this.handleClose}
            />,
        ];

        return (
            <div>
                <div>
                    <RaisedButton
                        backgroundColor={grey500}
                        icon={<ContentAdd color={fullWhite}/>}
                        style={styles.button}
                        onTouchTap={this.handleOpen}
                    />
                </div>
                <Dialog
                    title="How get your picture?"
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                >
                    Where from we download your picture?
                </Dialog>
            </div>
        );
    }
}

export default ImageLoaderButton;