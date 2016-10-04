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
    exampleImageInput: {
        cursor: 'pointer',
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        width: '100%',
        opacity: 0,
    },
};

class ImageLoaderButton extends Component {

    constructor(props) {
        super(props);
        this.handlePictureLoad = this.handlePictureLoad.bind(this);
    }

    state = {
        open: false,
        picture: [],
    };

    handlePictureLoad(event) {
        this.setState({picture: event.target.value});
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
            <FlatButton
                label="Submit"
                primary={true}
                keyboardFocused={true}
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

                    <div>Where from we download your picture?</div>
                    <img src={this.state.picture} />
                    <FlatButton label="Choose an Image" labelPosition="before">
                        <input type="file" onChange={this.handlePictureLoad} style={styles.exampleImageInput}/>
                    </FlatButton>

                </Dialog>
            </div>
        );
    }
}

export default ImageLoaderButton;