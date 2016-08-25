import React, {Component} from "react";
import FlatButton from "material-ui/FlatButton";
import {Link} from "react-router";
import AppBar from "material-ui/AppBar";
import FontIcon from "material-ui/FontIcon";
import IconMenu from "material-ui/IconMenu";
import MenuItem from "material-ui/MenuItem";
import IconButton from "material-ui/IconButton/IconButton";
import MoreVertIcon from "material-ui/svg-icons/navigation/more-vert";

const PlusIconButton = () => (
    <Link to="/eventEdit">
        <IconButton>
            <FontIcon className="material-icons">add</FontIcon>
        </IconButton>
    </Link>
);

//TODO menu not hold to right top! Why?
const RightMenuIcon = () => (
    <IconMenu
        iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
    >

        <MenuItem primaryText="Refresh"/>
        <MenuItem primaryText="Help"/>
        <MenuItem primaryText="Sign out"/>
    </IconMenu>
);

// Arrow for future header return back button
const ArrowBackButton = () => (
    <Link to="/about">
        <IconButton>
            <FontIcon className="material-icons">arrow_back</FontIcon>
        </IconButton>
    </Link>
);


class Title extends Component {
    render() {
<<<<<<< HEAD
        return (            
            <AppBar 
              title="vpiski2" 
              iconElementRight={
                <div>
                  <Link to="/map">observe</Link>
                  <Link to="/event">Event</Link>
                </div>
              }
            />
=======
        return (
            <div className="layout">
                <AppBar
                    iconElementLeft={
                        <div>
                            <Link to="/about"><FlatButton label="Поиск"/></Link>
                            <Link to="/events"><FlatButton label="Встречи"/></Link>
                        </div>
                    }
                    iconElementRight={
                        <div>
                            <PlusIconButton/>
                            <RightMenuIcon/>
                        </div>
                    }
                />
                {this.props.children}
            </div>
>>>>>>> 79e22f6c3398f1281ffce1fbd56a2266e72a9032
        );
    }
}

export default Title;