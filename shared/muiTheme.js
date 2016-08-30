import React, {Component} from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from "react-tap-event-plugin";

injectTapEventPlugin();


export default class MuiTheme extends React.Component {
  render() {
    var theme = getMuiTheme({}, {
      userAgent: this.props.userAgent
    });

    return (
      <MuiThemeProvider muiTheme={theme}>
        {this.props.children}
      </MuiThemeProvider>
    );
  }
}