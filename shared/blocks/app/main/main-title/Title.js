import React, {Component} from "react";
import {Link} from "react-router";
import AppBar from "material-ui/AppBar";
import FontIcon from "material-ui/FontIcon";
import MenuItem from "material-ui/MenuItem";
import IconButton from "material-ui/IconButton/IconButton";
import IconMenu from "material-ui/IconMenu";
import MoreVertIcon from "material-ui/svg-icons/navigation/more-vert";

const PlusIconButton = () => (
    <Link to="/meetingEdit">
        <IconButton>
            <FontIcon className="material-icons">add</FontIcon>
        </IconButton>
    </Link>
);

const style = {
    display: 'inline-block',
    margin: '16px 32px 16px 0',
};

//TODO menu not hold to right top! Why?
const MenuIconButton = () => (
    <IconMenu iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
              menuStyle={style}
    >
        <MenuItem primaryText="Refresh"/>
        <MenuItem primaryText="Help"/>
        <MenuItem primaryText="Sign out"/>
    </IconMenu>

);

class Title extends Component {
    render() {
        return <AppBar
            showMenuIconButton={false}
            title="vpiski2"
            iconElementRight={
                <div>
                    <PlusIconButton/>
                    <MenuIconButton/>
                </div>
            }
        />
    }
}
export default Title;